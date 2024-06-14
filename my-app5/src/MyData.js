import axios from 'axios'
import React from 'react'

function MyData() {
    const [userData, setUserData] = React.useState([]);

    React.useEffect( () => {
        const myFunction = async () => {
            const response = await axios.get("https://reqres.in/api/users?page=2");
            console.log(response.data.data);
            setUserData(response.data.data)
        }
        myFunction();
    },[])

    const insertData = () => {
        var obj = {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }
 
    userData.push(obj);

    setUserData([...userData])
    }

  return (
    <div>
        <table border ='1'>
<thead>
    <td>Id</td>
    <td>Name</td>
    <td>Email</td>
    <td>Avatar</td>
</thead>
<tbody>

        {userData.map((user, key) => {
            return <tr key={key}>
            <td>{user.id}</td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td><img src = {user.avatar} /></td>
        </tr>
            })}
</tbody>
        </table>
        <br></br>
        <br></br>
        <button onClick = {insertData}>Insert Data</button>

    </div>
  )

}

export default MyData
