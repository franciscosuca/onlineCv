import { PostList } from "../components/postsList"
import { queryItems } from "../utils/cosmosDB"
import { Experience } from "../types/Experience"

// Force this page to be dynamic and not statically generated
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function WorkExperience() {
  const timestamp = new Date().toISOString();
  console.log('=== WORK EXPERIENCE PAGE RUNTIME EXECUTION ===');
  console.log('WorkExperience page: Component function called at:', timestamp);
  console.log('WorkExperience page: NODE_ENV:', process.env.NODE_ENV);
  
  // Runtime detection
  if (typeof window === 'undefined') {
    console.log('WorkExperience page: Running on SERVER-SIDE');
  } else {
    console.log('WorkExperience page: Running on CLIENT-SIDE');
  }
  
  try {
    console.log('WorkExperience page: About to query workexperience data...');
    const workExperience = await queryItems<Experience>("workexperience");
    console.log('WorkExperience page: Query completed, found', workExperience?.length || 0, 'items');
    
    if (workExperience && workExperience.length > 0) {
      console.log('WorkExperience page: First item:', {
        id: workExperience[0].id,
        title: workExperience[0].title,
        type: (workExperience[0] as any).type
      });
    } else {
      console.log('WorkExperience page: No workExperience items found');
    }
    
    console.log('WorkExperience page: About to render PostList component');
    return (
      <div>
        <h1>Work Experience</h1>
        <PostList posts={workExperience} />
      </div>
    );
  } catch (error) {
    console.error('WorkExperience page: Error occurred:', error);
    console.error('WorkExperience page: Error stack:', error.stack);
    return (
      <div>
        <h1>Work Experience</h1>
        <p>Error loading work experience: {error.message}</p>
      </div>
    );
  } finally {
    console.log('=== WORK EXPERIENCE PAGE COMPONENT FINISHED ===');
  }
}