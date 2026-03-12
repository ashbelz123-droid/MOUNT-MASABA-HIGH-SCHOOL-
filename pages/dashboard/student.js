import Link from "next/link"
import Sidebar from "../../components/Sidebar"

export default function Student() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <h2>Student Dashboard</h2>

        <Link href="/resources">
          <button>Open AI Tutor</button>
        </Link>
      </div>
    </div>
  )
    }
