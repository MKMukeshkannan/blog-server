import { MarkdownRenderer } from "@/components/Markdown";
import NavBar from "@/components/NavBar";
import { Post } from "@/utils";
import { Metadata } from "next";
import Head from "next/head";

// export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const info_json: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());
  const this_post = info_json.find((val) => val.slug == slug);

  return {
    title: this_post?.title ?? "Mukesh Kannan",
    description: this_post?.description ?? "I write blogs",
  };
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true",
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: String(post.slug),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/pages/${slug}.md?raw=true`,
  ).then((res) => res.text());

  const info_json: Post[] = await fetch(
    `https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true`,
  ).then((res) => res.json());
  const this_post = info_json.find((val) => val.slug == slug);

  if (!this_post) return <h1>PAGE NOT FOUND</h1>;

  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-[#f0f0f0] ">
      <Head>
        <title>{this_post?.title} | Mukesh Kannan</title>
        <meta name="description" content={this_post?.description} key="desc" />
      </Head>
      <section className="h-0 flex-1 w-full max-w-4xl shadow bg-white p-10">
        <NavBar slug={slug} />
        <MarkdownRenderer>{post}</MarkdownRenderer>
      </section>
      <section className="w-full p-5 py-1 max-w-4xl bg-[#FF9898] text-white ">
        <p>blog by MK Mukesh Kannan</p>
      </section>
    </main>
  );
}
