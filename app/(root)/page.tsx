import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string} >
}) {

  const query = (await searchParams).query;

  const posts = [{ _createdAt: new Date(), views: 55, author: { _id: 1, }, _id: 1, description: 'This is a description', image: 'https://files.oaiusercontent.com/file-HGvePrKcTWa8HrmyTDSamr?se=2024-12-20T14%3A09%3A09Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd28963d4-bdfd-469b-b342-2d186307d1aa.webp&sig=0IruYpW0ukZlIysGBaAwddO5980GImaAQrPsVBhl4Fs%3D', category: 'Healthcare', title: 'Dr Medico' },];
 
  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Share your vision, <br /> connect with innovators</h1>
      <p className="sub-heading !max-w-3xl">
        Submit, vote, and compete — your entrepreneurial journey starts here.
      </p>
      <SearchForm query={query}/>
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query? `Search results for "${query}"` : 'All Startups'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number) => (
          <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="no-results">No startups found</p>
      )}
      </ul>
    </section>
    </>
  );
}
