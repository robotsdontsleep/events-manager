import Link from "next/link";

export default function FooterAbout() {
  return (
    <section className="about">
      <h2>About us</h2>
      <Link href="/about">About Us</Link>
      <p>Find your Event</p>
      <p>All Categories</p>
      <p>All Locations</p>
    </section>
  );
}

//поки що так можливо прейдеться переробити на список
