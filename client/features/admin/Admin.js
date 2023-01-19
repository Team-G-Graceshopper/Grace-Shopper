import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersAsync, selectUsers, updateUserAsync } from "./adminSlice";


const Admin = () => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const test = useSelector((state) => state.auth.me)

  const appointAdminButton = async (id, privledge) => {
    await dispatch(updateUserAsync({id, privledge}))
    setRender(!render)
  }

  const removeAdminButton = async (id, privledge) => {
    await dispatch(updateUserAsync({id, privledge}))
    setRender(!render)
  }

  useEffect(() => {
    dispatch(fetchUsersAsync())
  }, [dispatch, render])

  return (
    <>
      {test.privledge == 'admin' ?
      <div className="usersContainer">
        {users.map((user) => {
          if(user.id != test.id){
          return (
            <div className="adminMenu">
            <Link to={`/users/${user.id}`}>{user.username} - {user.privledge}</Link>
            <button onClick={() => appointAdminButton(user.id, 'admin')}>Appoint admin</button>
            <button onClick={() => removeAdminButton(user.id, 'customer')}>Remove admin</button>
            </div>
          )
          }
        })}
      </div>
      :
      <p>Not Authorized to view this page</p>
      }

    </>
  )

}

export default Admin

