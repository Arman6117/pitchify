import { auth } from "@/auth";
import SearchForm from "@/components/search-form";
import StartupCard, { StartupTypeCard } from "@/components/startup-card";

import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: post } = await sanityFetch({ query: STARTUP_QUERIES,params });
 const session = await auth();
 console.log(session?.id)
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
          {post.length > 0
            ? post.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            : null}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
