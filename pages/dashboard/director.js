import Sidebar from "../../components/Sidebar"

export default function Director() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="content">
        <h2>Director Dashboard</h2>

        <p>Upload School Badge</p>
        <input type="file" />

        <p>School Vision</p>
        <textarea />

        <button>Save</button>
      </div>
    </div>
  )
    }
