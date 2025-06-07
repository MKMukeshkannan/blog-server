import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='h-screen w-full flex flex-col items-center justify-center'>
      <p className='text-4xl font-bold text-[#FF9898]'>Not Found</p>
      <p>could not find requested resource</p>
      <p>why not read <Link href="/" className='text-[#FF9898]'>blogs</Link> that actually exist! </p>
    </main>
  )
}
