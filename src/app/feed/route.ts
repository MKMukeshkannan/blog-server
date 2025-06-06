import { Feed } from "feed";
import { Post } from "@/utils";

export async function GET() {
  const posts: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());

  const feed = new Feed({
    title: "Mukesh Kannan's Blog",
    description:
      "I talk about c++, nix, opengl, networking, machine learning, or any thing that i find interesting.",
    id: "",
    link: "http://www.mukeshkannan.com",
    language: "en",
    image: "",
    favicon: "",
    copyright: "All rights reserved 2025, M K Mukesh Kannan",
    updated: new Date(2025, 6, 6),
    author: {
      name: "Mukesh Kannan M K",
      email: "mukeshkannan311@gmail.com",
      link: "http://www.mukeshkannan.com",
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `http://mukeshkannan.com/blog/${post.slug}`,
      description: post.description,
      author: [
        {
          name: "Mukesh Kannan M K",
          email: "mukeshkannan311@gmail.com",
          link: "http://www.mukeshkannan.com",
        },
      ],
      date: new Date(post.date.year, post.date.month, post.date.date),
    });
  });

  return new Response(feed.rss2(), { headers: { "Content-Type": "text/xml" } });
}
