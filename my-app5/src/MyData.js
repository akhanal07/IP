import axios from "axios";
import React, { useState, useEffect } from "react";

function MyData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table border="1cm">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>avatar</td>
          </tr>
        </thead>
        <tbody>
          {data.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="user avatar" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyData;
