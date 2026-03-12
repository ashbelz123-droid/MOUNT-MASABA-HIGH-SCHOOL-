import Link from "next/link"

export default function Sidebar(){

return(

<div className="sidebar">

<p><b>Menu</b></p>

<Link href="/">Home</Link>
<br/>

<Link href="/resources">AI Tutor</Link>
<br/>

<Link href="/login">Logout</Link>

</div>

)

  }
