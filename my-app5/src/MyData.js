import axios from "axios";
import React from "react";

function MyData() {
  const [data, setData] = React.useState([]);
  const myFunc = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    
    setData(response.data.data);
  };
  myFunc();
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
          {data.map((user, key) => {
            return (
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyData;