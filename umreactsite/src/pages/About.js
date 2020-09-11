import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class About extends React.Component{

    render(){
        return(

            <div>
            {/*START SCROLL TOP BUTTON */}
            <a className="scrollToTop" href="#">
              <i className="fa fa-angle-up" />
            </a>
            {/* END SCROLL TOP BUTTON */}
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
                      <li><Link  to='/' class="navbar-brand" >Home</Link></li>
                      <li><Link className="active" to='/About' >About</Link></li>
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
                  <img className="first-slide" src="assets/img/metro_20161205_coal_mine.jpg" alt="First slide" />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1><b>About Us</b></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* /.carousel */}
            <div className="jumbotron">
              <div className="container">
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="thumbnail">
                        <div className="caption text-center">
                          <div className="position-relative">
                            <img src="assets/img/logo.png" style={{width: '200px', height: '150px'}} />
                          </div>
                          <h4 id="thumbnail-label"><a href="#" target="_blank">Umsimbhithi</a></h4>
                          <div className="thumbnail-description smaller">Umsimbithi Mining (Pty) Ltd is a JV between Umcebo Mining (Pty) 
                            Ltd (50%) and Lithemba Wonderfontein Coal  (Pty) Ltd (50%)</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="thumbnail">
                        <div className="caption text-center">
                          <h4 id="thumbnail-label"> </h4>
                          <div className="thumbnail-description smaller">Umsimbithi Mining currently has 1 operation called Wonderfontein
                            Colliery. Wonderfontein Colliery is the first mine owned and managed by Umsimbithi Mining which started its
                            mining operations in 2012 as an underground mine but converted to a 100% opencast truck and shovel operation 
                            by the end of 2013. 
                            <br />
                            <br /> 
                            Wonderfontein Colliery has a processing plant with the design capacity to process 300kt of 
                            coal per month and a railway siding capable of handling RBCT jumbo size wagons. Umsimbithi has 500ktpa throughput
                            allocation at Richard’s Bay Coal Terminal. 
                            The majority of activities are outsourced and the mine currently employs, directly or through the contractors, over 800 people.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="thumbnail2">
                        <div className="caption text-center">
                          <div className="thumbnail-description2 "><h2 style={{color: 'aliceblue'}}>At Glance</h2>
                            <hr />
                            <h3 style={{color: 'aliceblue'}}> We are an emerging 
                              South African based mining company currently with 1 operation.</h3></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="thumbnail3">
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="thumbnail1A">
                        <div className="caption text-center">
                          <div className="thumbnail-description smaller"><q> Safety, Health, Environment and Communities are our number one key priorities to
                              ensure business success and profitability. We seek to apply best practice, ensuring that our approach is up-to-date and relevant</q>
                            <hr />
                            <p>-Sifiso Mazubane CEO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="thumbnail2A">
                        <div className="caption text-center">
                          <div className="thumbnail-description2 "><h1 style={{color: 'bisque'}}>History</h1>
                            <hr />
                            <p style={{color: 'whitesmoke'}}>It all started in 2012 as an Underground Mine but converted to a 100% opencast truck and shovel operation in 2013. The relationship between Umcebo Mining (50%) and Lithemba Wonderfontein Coal (50%) gave birth to Umsimbithi Mining (Pty) Ltd. We pride ourselves in the 
                              achievements we have made so far as we continuously aim for great results. At the current mining rate of 4.2 Mtpa, the mine will 
                              have a Life of Mine up to 2030. The Mining activities are outsourced to Andru Mining. The mine directly and through its contractors 
                              employs approximately 968 employees.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <div className="caption text-center">
                          <h1>Our Leadership</h1>
                          <p>Find out more about the people who run the company - from the Board and Management Structure.</p>
                          <Link to='/Board'><h3>Board Members</h3></Link>
                          <Link to='/Management'><h3>Operational Management</h3></Link>
                          <hr />
                          <h1>Governance</h1>
                          <p>Read more about our governance frameworks, including Board committees, compliance and group policies.</p>
                          <Link to='/Govern'><h3>Governance</h3></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="thumbnailCircle">
                        <div className="caption text-center">
                          <div className="position-relative">
                            <img className="img-circle" src="assets/img/img2.JPG" style={{width: '350px', height: '300px'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">&nbsp;</div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="thumbnailcON">
                        <div className="caption text-center">
                          <div className="thumbnail-description2 "><h3 style={{color: 'black'}}><u><b>Raise concern in confidence</b></u></h3>
                            <p>Whistleblower</p>
                            <hr />
                            <h4 style={{color: 'black'}}>contact: 011 243 5200    or email:   info@umsmining.co.za</h4>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            {/* End About us */}
            {/* Start Map section */}
            <div className="mu-title">
              <h2>Mine Location</h2>
            </div>
            <section id="mu-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14362.75298549616!2d29.8675591!3d-25.8468162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef997e0b3cbc9fa2!2sUmsimbithi%20Colliery!5e0!3m2!1sen!2sza!4v1579195570649!5m2!1sen!2sza" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
            </section>
            {/* End Map section */}
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


export default About