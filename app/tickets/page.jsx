import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

export default function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets Page</h2>
                    <p><small>Currently open tickets...</small></p>
                </div>
            </nav>
            <h2 className="div-add"> <Link href="/tickets/create"> Create New Ticket Here</Link></h2>
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>

        </main>
    )
}