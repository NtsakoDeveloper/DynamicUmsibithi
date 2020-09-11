import React , {useState } from 'react'
import { useHistory } from "react-router-dom";




const Login =()=>{

    const history = useHistory();

   

    const [name, setName] = useState()
    const [file, setFile] = useState();
    const [errors, setErr] = useState()
   

    const userLogin = async(e) =>{
      e.preventDefault();
        
        fetch("http://localhost:5000/users/AddFile", {
 
             method: 'post',
             headers: {
                 'Content-type': 'application/json'
             },
 
             body:JSON.stringify({
               name,
               file
             })
        }).then((res) => res.json())
          .then( async (data)=> {
        
            console.log(data)
            setErr(data.msg)
            history.push("/Home")
            
 
          })  
          .catch((error)=>{
              console.error(error);
           
          })
         
     }



        return(


            <div>
                <form className="form-signin" onSubmit={userLogin}>
              <img className="mb-4" src="https://i.ibb.co/tPGxBHG/logo.png" alt="" width={172} height={72} />
              <h1 className="h3 mb-3 font-weight-normal">Add New File</h1>

               <label htmlFor="inputEmail" className="sr-only">Job Name</label>
                <input 
                    type="text" 
                    id="inputname"   
                    onChange={(e) => setName(e.target.value)}
                    className="form-control" 
                    placeholder="Job Title" 
                    required autoFocus />

                <label htmlFor="inputname" className="sr-only">File URL</label>
                <input 
                    type="text" 
                    id="inputname"   
                    onChange={(e) => setFile(e.target.value)}
                    className="form-control" 
                    placeholder="File URL" 
                    required autoFocus />
               
             <div className="checkbox mb-3">
             </div>
             <h6 className=''>{errors}</h6>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Add File</button>
             <p className="mt-5 mb-3 text-muted">© 2020</p>
              </form>
            </div>
        
        )

        
       
        
    
}



export default Login