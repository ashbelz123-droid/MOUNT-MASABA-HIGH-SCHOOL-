import Link from "next/link"

export default function Sidebar() {

  return (
    <div className="sidebar">

      <Link href="/">Home</Link>

      <Link href="/resources">AI Tutor</Link>

      <Link href="/login">Logout</Link>

    </div>
  )
    }
