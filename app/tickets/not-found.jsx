import Link from "next/link"


export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">Oh dear, appears we have hit a brick wall</h2>
            <p>The ticket you requested doesn't exist </p>
            <p> Go back to the <Link href="/tickets">Tickets page</Link> </p>
        </main>
    )
}
