import Link from "next/link";

interface Props {
    slug?: string
};

function NavBar({slug = ""}: Props) {
  return (
    <nav className="mb-10">
      <section className=" mb-2 flex justify-between">
        <span className="text-2xl">yen sondha peru apple</span>
        <section className="space-x-2">
          <Link href="/feed" className="text-sm"> rss </Link>
          <a href="https://github.com/MKMukeshkannan/" className="text-sm"> github </a>
        </section>
      </section>
      <section className="flex justify-between mb-10">
        <p className="text-sm font-light ">
          [POST]: ~/<Link href="/">all-blog</Link>/{slug}
        </p>
        {/* <p className="text-sm font-light mb-10">posted on {}</p> */}
      </section>
      <hr />
    </nav>
  );
}

export default NavBar;
