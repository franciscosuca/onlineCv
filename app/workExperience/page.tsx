import { PostList } from "app/components/postsList"
import { queryItems } from "app/utils/cosmosDB"
import { Experience } from "app/types/Experience"

export default async function Page() {
  //* TODO: check why the blob is not saving the type of the experience correctly on the DB
  //TODO: fix the order of the posts in the page
  //? Then, prepare pipeline to publish application in Azure
  let workExperience = await queryItems<Experience>("workexperience"); //TODO: change the partitionKey to the one used for projects in CosmosDB
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Work Experience
      </h1>
      <PostList posts={workExperience} />
    </section>
  );
}