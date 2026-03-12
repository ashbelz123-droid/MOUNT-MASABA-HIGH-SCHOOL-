import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()

  const login = (role) => {
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="container">
      <h2>Select Role</h2>

      <button onClick={() => login("director")}>Director</button>
      <button onClick={() => login("headteacher")}>Head Teacher</button>
      <button onClick={() => login("teacher")}>Teacher</button>
      <button onClick={() => login("student")}>Student</button>
      <button onClick={() => login("parent")}>Parent</button>
    </div>
  )
    }
