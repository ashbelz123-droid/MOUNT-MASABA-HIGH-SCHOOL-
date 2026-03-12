import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <h1>Mount Masaba High School Portal</h1>

      <p>Welcome to the S1–S6 Learning Portal</p>

      <Link href="/login">
        <button className="btn">Login</button>
      </Link>

      <Link href="/resources">
        <button className="btn">AI Tutor Search</button>
      </Link>
    </div>
  )
    }
