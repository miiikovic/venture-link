import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string} >
}) {

  const query = (await searchParams).query;

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Share your vision, <br /> connect with innovators</h1>
      <p className="sub-heading !max-w-3xl">
        Submit, vote, and compete — your entrepreneurial journey starts here.
      </p>
      <SearchForm query={query}/>
    </section>
    </>
  );
}
