import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  data: string;
  category: string;
  description: string;
}

export default async function Page() {
  const posts: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-amber-100 font-mono">
      <section className="h-0 flex-1 w-full max-w-4xl shadow bg-white p-10">
        <h1 className="text-4xl font-bold">ALL POSTS</h1>
        {posts.map((post, i) => (
          <CardComponent key={i} post={post} />
        ))}
      </section>
    </main>
  );
}

const CardComponent = ({ post }: { post: Post }) => {
  return (
    <section className="py-5">
      <Link className="text-xl text-[#0000ee]" href={`blog/${post.slug}`}>
        {post.title}
      </Link>
      <p>{post.description}</p>
      <h6 className="text-sm text-gray-700">posted on: {post.data}</h6>
    </section>
  );
};
