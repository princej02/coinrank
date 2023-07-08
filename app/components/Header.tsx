import Link from "next/link"

export default function Header() {
  return (
    <header className="py-8 px-2 font-poppins max-w-5xl mx-auto mb-12 flex flex-col gap-4">
      <h1 className="text-2xl lg:text-4xl font-bold flex-start">
        <Link href="/" className="flex flex-start">
          Crypto<span className="text-yellow-500">Rank</span>
        </Link>
      </h1>
    </header>
  )
}