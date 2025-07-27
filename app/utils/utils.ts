
export function getSkills() {
  let skills: string[] = []
  let skillCategories = ['volunteering', 'projects', 'workexperience']

  // skillCategories.forEach(category => {
  //   getPosts(category).forEach((post) => {
  //     if (post.metadata.skills !== undefined) { 
  //       post.metadata.skills.split(';').forEach((skill) => {
  //         skills.push(skill)
  //       })
  //     }
  //   })
  // })

  return skills
}
