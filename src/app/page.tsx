import NavBar from "@/components/NavBar";
import Link from "next/link";

import { Post } from "@/utils"

export default async function Page() {
  const posts: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-[#f0f0f0]">
      <section className="h-0 flex-1 w-full max-w-4xl shadow bg-white p-10">
        <NavBar />
        <h1 className="text-4xl font-bold">ALL POSTS</h1>
        {posts.map((post, i) => (
          <CardComponent key={i} post={post} />
        ))}
      </section>
      <section className="w-full p-5 py-1 max-w-4xl bg-[#FF9898] text-white ">
        <p>blog by MK Mukesh Kannan</p>
      </section>
    </main>
  );
}

const CardComponent = ({ post }: { post: Post }) => {
  return (
    <section className="py-5">
      <Link className="text-xl text-[#FF9898]" href={`blog/${post.slug}`}>
        {post.title}
      </Link>
      <p>{post.description}</p>
      <h6 className="text-sm text-gray-700">
        category: 
        {post.category.map((cat, i) => (
          <a href="#" className="pl-2" key={i}>{cat}</a>
        ))}
      </h6>
      <h6 className="text-sm text-gray-700">posted on: {post.date.date}|{post.date.month}|{post.date.year}</h6>
    </section>
  );
};
