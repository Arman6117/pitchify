import SearchForm from "@/components/search-form";
import StartupCard from "@/components/startup-card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const post = [
    {
      _createdAt: new Date(),
      _id: 1,
      author: { _id: 1, name: "John" },
      image:
        "https://images.unsplash.com/photo-1508175800969-525c72a047dd?q=80&w=2205&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We robot",
      category: "Robot",
      description: "This is a description",
      views: 55,
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your ideas and connect with entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Your Ideas, Vote On Pitches, and Get Noticed In Virtual
          Competition
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {post.length > 0 ? (
            post.map((post) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ):null}
        </ul>
      </section>
    </>
  );
}
