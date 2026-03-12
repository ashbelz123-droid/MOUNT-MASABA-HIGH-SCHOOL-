import Sidebar from "../../components/Sidebar"

export default function Teacher() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <h2>Teacher Dashboard</h2>

        <h3>Upload Resource</h3>

        <input placeholder="Title" />
        <input placeholder="Class (S1-S6)" />
        <input placeholder="Subject" />

        <input type="file" />

        <button>Upload</button>
      </div>
    </div>
  )
    }
