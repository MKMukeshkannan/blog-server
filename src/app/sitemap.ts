import { Post } from "@/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());

  const ret_val: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `http://www.mukeshkannan.com/${post.slug}`,
    lastModified: post.last_modified,
    changeFrequency: "monthly",
  }));

  return ret_val;
}
