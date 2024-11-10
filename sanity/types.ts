/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Startup = {
  _id: string;
  _type: "startup";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  description?: string;
  category?: string;
  image?: string;
  views?: number;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Startup | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: STARTUP_QUERIES
// Query: *[_type == "startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {    _id,    _createdAt,    title,    slug,    author -> {        _id,        name,        bio,        image    },    views,    description,    image,    category, }
export type STARTUP_QUERIESResult = Array<{
  _id: string;
  _createdAt: string;
  title: null;
  slug: null;
  author: null;
  views: null;
  description: null;
  image: string | null;
  category: null;
} | {
  _id: string;
  _createdAt: string;
  title: string | null;
  slug: null;
  author: null;
  views: null;
  description: string | null;
  image: null;
  category: null;
} | {
  _id: string;
  _createdAt: string;
  title: string | null;
  slug: Slug | null;
  author: {
    _id: string;
    name: string | null;
    bio: string | null;
    image: string | null;
  } | null;
  views: number | null;
  description: string | null;
  image: string | null;
  category: string | null;
}>;
// Variable: STARTUP_QUERIES_BY_ID
// Query: *[_type == "startup" && _id == $id][0]  {    _id,    _createdAt,    title,    slug,    author -> {        _id,      username,        name,        bio,        image    },    views,    description,    image,    category,      pitch }
export type STARTUP_QUERIES_BY_IDResult = {
  _id: string;
  _createdAt: string;
  title: string | null;
  slug: Slug | null;
  author: {
    _id: string;
    username: string | null;
    name: string | null;
    bio: string | null;
    image: string | null;
  } | null;
  views: number | null;
  description: string | null;
  image: string | null;
  category: string | null;
  pitch: string | null;
} | null;
// Variable: STARTUP_VIEWS_QUERY
// Query: *[_type == "startup" && _id == $id][0] {  _id, views }
export type STARTUP_VIEWS_QUERYResult = {
  _id: string;
  views: number | null;
} | null;
// Variable: AUTHOR_BY_GITHUB_QUERY
// Query: *[_type == "author" && id == $id][0] {    _id,    id,    image,    username,    name,    bio,    email  }
export type AUTHOR_BY_GITHUB_QUERYResult = {
  _id: string;
  id: number | null;
  image: string | null;
  username: string | null;
  name: string | null;
  bio: string | null;
  email: string | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"startup\" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {\n    _id,\n    _createdAt,\n    title,\n    slug,\n    author -> {\n        _id,\n        name,\n        bio,\n        image\n    },\n    views,\n    description,\n    image,\n    category,\n } \n": STARTUP_QUERIESResult;
    "*[_type == \"startup\" && _id == $id][0]  {\n    _id,\n    _createdAt,\n    title,\n    slug,\n    author -> {\n        _id,\n      username,\n        name,\n        bio,\n        image\n    },\n    views,\n    description,\n    image,\n    category,\n      pitch\n } ": STARTUP_QUERIES_BY_IDResult;
    "*[_type == \"startup\" && _id == $id][0] {\n  _id, views\n }": STARTUP_VIEWS_QUERYResult;
    "*[_type == \"author\" && id == $id][0] {\n    _id,\n    id,\n    image,\n    username,\n    name,\n    bio,\n    email\n  }": AUTHOR_BY_GITHUB_QUERYResult;
  }
}
