import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">

            <h1 className="text-3xl">The Page you requested Could not be found</h1>
            <p> Click here to go back to the <Link href="/">Dashboard</Link> </p>

        </main>

    )
}
