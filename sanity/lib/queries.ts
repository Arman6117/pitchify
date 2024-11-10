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

export const STARTUP_QUERIES_BY_ID =
  defineQuery(`*[_type == "startup" && _id == $id][0]  {
    _id,
    _createdAt,
    title,
    slug,
    author -> {
        _id,
      username,
        name,
        bio,
        image
    },
    views,
    description,
    image,
    category,
      pitch
 } `);

export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, views
 }`);

export const AUTHOR_BY_GITHUB_QUERY = defineQuery(
  `*[_type == "author" && id == $id][0] {
    _id,
    id,
    image,
    username,
    name,
    bio,
    email
  }` 
);
export const AUTHOR_BY_ID_QUERY = defineQuery(`
*[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
}
`);

export const STARTUP_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
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

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);