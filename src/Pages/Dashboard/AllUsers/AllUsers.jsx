import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AllUsers = () => {
  const {user}=useContext(AuthContext)
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const handleMakeAdmin=(id)=>{
    axios.patch(`http://localhost:5000/users/admin/${id}`)
    .then(res=>{
      console.log(res.data);
      if(res.data.modifiedCount >0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
   
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5">All Users:{users?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
         {
          users?.map((user,index) =>
          <tr key={user._id}>
            <th>
             {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={user.img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {user.name}
            </td>
            <td>{user.email}</td>
            <th>
             {user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs"><FaUsers className="text-2xl"/></button>}
            </th>
          </tr>)
         }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
