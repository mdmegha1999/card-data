import React,{useEffect, useState} from "react";
import './style.css';
const Userinfo =()=>{
    const[users,setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        //Response object
        .then((res)=> res.json())
        //it again return a promise
        .then((userData)=>{
            console.log(userData);
            setUsers(userData)
        })
        // err message
        .catch((err)=>console.log(err.message))
       //only one time render[]
 
    },[])
    const deleteUser = (userId)=>{
        const index = users.findIndex((user) => user.id === userId)
        //use strep opretar
        //
        setUsers([...users.slice(0,index), ...users.slice(index+1)])
    }
    return(
        <div>
            <header className="header">
                <h1>Available Users</h1>
            </header>
            <main>
                {
                    (function (){
                        let userArr = []
                        users.forEach((user)=>{
                            // mt arr pushing
                            userArr.push(
                                <section className="user" key={user.id}> 
                                     <div><b>Name:</b><br></br> {user.name}</div>
                                     <div><b>Email:</b><br></br> {user.email}</div>
                                     <div><b>Username:</b><br></br> {user.username}</div>
                                     <div><b>Phone:</b> <br></br>{user.phone}</div>
                                     <button onClick={()=>deleteUser(user.id)}>Delete</button>
                                     
                                     <br></br>
                                     <br></br>
                                     </section>
                              
                            )
                        })
                        return userArr
                    }
                    )()
                }
            </main>
        </div>
    )
}
export default Userinfo;
//https://jsonplaceholder.typicode.com/users

