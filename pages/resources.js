import { useState } from "react"
import resources from "../data/resources.json"

export default function Resources() {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const search = () => {

    const filtered = resources.filter(r =>
      r.title.toLowerCase().includes(query.toLowerCase())
    )

    setResults(filtered)
  }

  return (
    <div className="container">

      <h2>AI Tutor Search</h2>

      <input
        placeholder="Search subject, topic or class"
        onChange={(e)=>setQuery(e.target.value)}
      />

      <button onClick={search}>Search</button>

      <ul>
        {results.map((r,i)=>(
          <li key={i}>
            <a href={r.link} target="_blank">
              {r.title}
            </a>
          </li>
        ))}
      </ul>

    </div>
  )
          }
