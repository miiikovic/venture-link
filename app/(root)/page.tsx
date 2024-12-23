import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string} >
}) {

  const query = (await searchParams).query;

  const posts = [{ _createdAt: new Date(), views: 55, author: { _id: 1, name: 'Momčilo' }, _id: 1, description: 'Your chosen healthcare agency.', image: 'https://images.unsplash.com/photo-1550831106-f8d5b6f1abe9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Healthcare', title: 'Dr Medico' },];
 
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
