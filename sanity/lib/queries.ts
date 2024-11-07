import { defineQuery } from "next-sanity";

export const STARTUP_QUERIES =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author -> {
        _id,
        name,
        bio,
        image
    },
    views,
    description,
    image,
    category,
 } 
`);
