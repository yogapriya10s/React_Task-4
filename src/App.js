import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      {!data.users && <h1>Loading</h1>}
      {data.users && (
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} alt={item.firstName} />
                </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.domain}</td>
                <td>{item.ip}</td>
                <td>{item.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;