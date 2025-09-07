import Image from "next/image";

export default function Home() {
  const email = "contact.teapotstudio@gmail.com";
  return (
    <main>
      <Image src="/images/teapot.png" alt="Teapot Studio Logo" width={80} height={80} />
      <h1>Teapot Studio</h1>
      <p>Reach out to <a href={`mailto:${email}`}>{email}</a> to contact us.</p>
    </main>
  );
}
