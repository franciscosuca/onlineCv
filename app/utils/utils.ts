import fs from 'fs'
import path from 'path'

type Metadata = {
  sdate: string
  edate: string
  company: string
  location: string
  jobTitle: string
  summary: string
  skills: string
}

export interface Post {
  metadata: {
      sdate: string;
      edate: string;
      location: string;
      company: string;
      jobTitle: string;
      summary: string;
      skills: string;
      link?: string;
  };
  content: string;
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getPosts(dir) 
{
  return getMDXData(path.join(process.cwd(), 'app', dir, 'posts'))
}

export function getSkills() {
  let skills: string[] = []
  let skillCategories = ['volunteering', 'projects', 'workExperience']

  skillCategories.forEach(category => {
    getPosts(category).forEach((post) => {
      console.log(post.metadata.skills)
      if (post.metadata.skills !== undefined) { 
        post.metadata.skills.split(';').forEach((skill) => {
          skills.push(skill)
        })
      }
    })
  })

  return skills
}
