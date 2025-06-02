interface Post {
    slug: string,
    title: string,
    data: string,
    category: string,
    description: string,
}
 
// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60
 
// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths
 
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://github.com/MKMukeshkannan/blog-static/blob/main/all.json?raw=true').then((res) =>
    res.json()
  )

  console.log(posts[0].data)

  return posts.map((post) => ({
    slug: String(post.slug),
  }))
}
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetch(`https://github.com/MKMukeshkannan/blog-static/blob/main/pages/${slug}.md?raw=true`).then(
    (res) => res.text()
  )
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-amber-100 font-mono">
      <section className="h-0 flex-1 w-full max-w-4xl shadow bg-white p-10">
        <h1 className="text-4xl font-bold">POST</h1>
        {post}
      </section>
    </main>
  )
}
