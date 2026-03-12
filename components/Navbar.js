import Link from "next/link"

export default function Navbar(){

return(

<div className="nav">

<Link href="/">Home</Link>

<Link href="/resources">AI Tutor</Link>

<Link href="/login">Login</Link>

</div>

)

}
