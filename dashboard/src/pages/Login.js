import React , {useState } from 'react'
import { useHistory } from "react-router-dom";




const Login =()=>{

    const history = useHistory();

    function handleClick() {
        history.push("/Add");
      }

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [errors, setErr] = useState()
   

    const userLogin = async(e) =>{
      e.preventDefault();
        
        fetch("http://localhost:5000/users/login", {
 
             method: 'post',
             headers: {
                 'Content-type': 'application/json'
             },
 
             body:JSON.stringify({
               email,
               password
             })
        }).then((res) => res.json())
          .then( async (data)=> {
        
            setErr(data.msg)
            console.log(data)
            history.push("/Home")
           
            
 
          })  
          .catch((error)=>{
              console.error(error);
              setErr(error)
           
          })
         
     }



        return(


            <div>
                <form className="form-signin" onSubmit={userLogin}>
        <       img className="mb-4" src="https://i.ibb.co/tPGxBHG/logo.png" alt="" width={172} height={72} />
        <       h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input 
                    type="email" 
                    id="inputEmail"   
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control" 
                    placeholder="Email address" 
                    required autoFocus />
                <label htmlFor="inputPassword"    className="sr-only">Password</label>
                <input 
                    type="password" 
                    id="inputPassword" 
                    onChange={(e) => setPass(e.target.value)}
                    className="form-control" 
                    placeholder="Password" />
                <div className="checkbox mb-3">
                  <h6 className=''>{errors}</h6>
             </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleClick}>Add new Admin</button>
             <p className="mt-5 mb-3 text-muted">© 2020</p>
              </form>
            </div>
        
        )

        
       
        
    
}



export default Login