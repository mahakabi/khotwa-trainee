import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Here is the landing page</p>
      <Link href="/close-ended-questions">
        <button>Start The Survey</button>
      </Link>
    </div>
  );
}
