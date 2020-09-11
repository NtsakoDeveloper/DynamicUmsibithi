import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Board extends React.Component{

    render(){

        return(

            <div>
            {/* Start header section */}
            <header id="mu-header">  
              <nav className="navbar navbar-default mu-main-navbar" role="navigation">  
                <div className="container">
                  <div className="navbar-header">
                    {/* FOR MOBILE VIEW COLLAPSED BUTTON */}
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    {/* LOGO */}       
                    {/*  Text based logo  */}

                  
                    {/* <a className="navbar-brand" href="index.html"> <img src="https://i.ibb.co/vDTHnDn/logo.png" alt="Logo" /> </a>  */}

                    <Link to='/' class="navbar-brand" >
                       <img src="assets/img/logo.png" alt="Logo img"/>
                    </Link>
                    {/*  Image based logo  */}
                    {/* <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="Logo img"></a>  */}
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
                      <li><Link to='/' class="navbar-brand" >Home</Link></li>
                      <li><Link to='/About' >About</Link></li>
                      <li><Link to='/Services'>Our Services</Link></li>
                      <li><Link to='/Community'>Community</Link></li>                                                                           
                      <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Opportunities <span className="caret" />
                        </a><ul className="dropdown-menu"><a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                          </a><li><a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" />      
                          <Link to='/Tender'>Procurement</Link></li>
                          <li><Link to='/Vacancies'>Vacancies</Link></li> 
                          <li><Link to='/Learnership'>Leanership</Link></li> 
                          
                        </ul>
                      </li>
                      <li><Link to='/Contact'>Contact Us</Link></li> 
                    </ul>                            
                  </div>{/*/.nav-collapse */}       
                </div>          
              </nav> 
            </header>
            {/* End header section */}
            {/* Carousel
        ================================================== */}
            <div id="myCarousel" className="carousel slide">
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="first-slide" src="assets/img/Coal-Mine-Cyn.jpg" alt="First slide" />
                  <div className="container">
                    <div className="carousel-caption">
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* /.carousel */}
            <hr />
            <hr />
            <div className="container">
              <div className>
                <h2 style={{textAlign: 'center'}}>Our Board</h2>
                <p />
              </div>
              <div>
                {/*-- <button class="btn btn-primary filter-button" data-filter="all">All</button>*/}
                {/*--   <button class="btn btn-default filter-button" data-filter="photo">Photo</button>*/}
                {/* <button class="btn btn-default filter-button" data-filter="graphic">Our Board</button> */}
                {/*--  <button class="btn btn-default filter-button" data-filter="webdesign"></button> */}
              </div>
              <br />
              <div className="row">
                <div className="col-md-3 filter graphic photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Du Plessis Willem Johannes</p>
                    </div>
                  </div>
                  <h4>Du Plessis Willem Johannes</h4>
                  <h4>Director</h4>
                </div>
                <div className="col-md-3 filter graphic photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Mathebula Bhasani</p>
                    </div>
                  </div>
                  <h4>Mathebula Bhasani</h4>
                  <h4>Director</h4>
                </div>
                <div className="col-md-3 filter graphic photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Houston Murray James</p>
                    </div>
                  </div>
                  <h4>Houston Murray James</h4>
                  <h4>Director</h4>
                </div>
                <div className="col-md-3 filter photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Qata Nolwazi Mpofukazi Leonara</p>
                    </div>
                  </div>
                  <h4>Qata Nolwazi Mpofukazi Leonara</h4>
                  <h4>Director</h4>
                </div>
                <div className="col-md-3 filter photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Murdoch Eaton Anthony James</p>
                    </div>
                  </div>
                  <h4>Murdoch Eaton Anthony James</h4>
                  <h4>Director</h4>
                </div> 
                <div className="col-md-3 filter photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Pasiya Masibulele Donald Sturu</p>
                    </div>
                  </div>
                  <h4>Pasiya Masibulele Donald Sturu</h4>
                  <h4>Director</h4>
                </div> 
                <div className="col-md-3 filter photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Raziya Bongani</p>
                    </div>
                  </div>
                  <h4>Raziya Bongani</h4>
                  <h4>Director</h4>
                </div>
                <div className="col-md-3 filter photo">
                  <div className="each-item">
                    <img className="port-image" src="assets/img/profile-photo-placeholder.jpg" />
                    <div className="cap1">
                      <h4>Profile</h4>
                    </div>
                    <div className="cap2">
                      <p className="text-center">Balfour Yoliswa Pumla</p>
                    </div>
                  </div>
                  <h4>Balfour Yoliswa Pumla</h4>
                  <h4>Director</h4>
                </div>
              </div>
            </div>
            <footer id="footer" className="footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="full">
                      <div className="footer-widget">
                        <div className="footer-logo">
                          <a href="#"><img src="assets/img/logo.png" height="100px" width="150px" alt="" /></a>
                        </div>
                        <ul className="social-icons style-4 pull-left">
                          <li><a className="facebook" target="_blank" href="https://web.facebook.com/pages/umsimbithi-mining-Wonderfontein/324266708016750?_rdc=1&_rdr"><i className="fa fa-facebook" /></a></li>
                          {/* <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="full">
                      <div className="footer-widget">
                        <h3>Menu</h3>
                        <ul className="footer-menu">
                          <li><Link to='/About' >About</Link></li>
                          <li><Link to='/Board' >Our Board</Link></li>
                          <li><Link to='/Contact' >Contact Us</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="full">
                      <div className="footer-widget">
                        <h3>Contact us</h3>
                        <h4>Physical Address</h4>
                        <ul className="address-list">
                          <li><i className="fa fa-map-marker" /> 4th Floor, Illovo Edge, Building 1, <br />
                            11 Harries Road
                            Cnr Fricker &amp; Harries Road,
                            Illovo, Sandton 2196  
                          </li>
                          <li><i className="fa fa-phone" />011 243 5200</li>
                          <li><i style={{fontSize: '20px', top: '5px'}} className="fa fa-envelope" />info@umsmining.co.za</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="full">
                      <div className="footer-widget">
                        <h3>Contact us</h3>
                        <h4>Postal Address</h4>
                        <ul className="address-list">
                          <li><i className="fa fa-map-marker" /> Postnet Suite H11
                            Private Bag X11
                            Birnam Park
                            2015</li>
                          <li><i className="fa fa-phone" /> 011 243 5200</li>
                          <li><i style={{fontSize: '20px', top: '5px'}} className="fa fa-envelope" />info@umsmining.co.za</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <p>Copyright © 2020 Umsibithi</p>
                </div>
              </div>
            </footer>
          </div>
        )
    }
}


export default Board