import React  from 'react'
import {Link} from 'react-router-dom';




class Home extends React.Component{

    render(){


        return(

            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="masthead mb-auto">
              <div className="inner">   
                <nav className="nav nav-masthead justify-content-center">
                  <a className="nav-link active"><Link to='/Vacancies'>Vacancies</Link></a>  
                  <a className="nav-link" ><Link to='/Tenders'>Tenders</Link></a>
                  <a className="nav-link"> <Link to='/Learnership'>Learnerhsip</Link></a>
                </nav>
              </div>
            </header>
           
          </div>

        )

       
       
    }
}



export default Home