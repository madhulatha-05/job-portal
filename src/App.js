import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: ""
  });

  const [jobs, setJobs] = useState([]);

  const registerUser = (e) => {
    e.preventDefault();
    alert("User Registered Successfully");
    console.log(user);
  };

  const addJob = (e) => {
    e.preventDefault();

    setJobs([...jobs, job]);

    setJob({
      title: "",
      company: "",
      location: "",
      salary: ""
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Portal</h1>

      <hr />

      <h2>User Registration</h2>

      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <hr />

      <h2>Post Job</h2>

      <form onSubmit={addJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) =>
            setJob({ ...job, title: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Company"
          value={job.company}
          onChange={(e) =>
            setJob({ ...job, company: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) =>
            setJob({ ...job, location: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Salary"
          value={job.salary}
          onChange={(e) =>
            setJob({ ...job, salary: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">
          Post Job
        </button>
      </form>

      <hr />

      <h2>Available Jobs</h2>

      {jobs.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>Company: {item.company}</p>
          <p>Location: {item.location}</p>
          <p>Salary: {item.salary}</p>

          <button>Apply</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;