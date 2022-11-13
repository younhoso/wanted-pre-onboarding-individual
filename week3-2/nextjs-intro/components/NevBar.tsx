import Link from "next/link";

export default function NaBar() {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
		</nav>
	)
}