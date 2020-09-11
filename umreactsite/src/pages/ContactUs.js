import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class ContactUs extends React.Component{

    render(){

        return(
            <div>
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
                      <li><Link to='/About' >About</Link></li>
                      <li><Link to='/Services'>Our Services</Link></li>
                      <li><Link className="active" to='/Community'>Community</Link></li>                                                                           
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
              <img className="first-slide" src="assets/bgGif.gif" alt="First slide" />
              <div className="container">
                <div className="carousel-caption">
                </div>
              </div>
            </div>
          </div>
        </div>{/* /.carousel */}
        {/* End header section */}
        {/* Start Contact section */}
        <section id="mu-contact">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-contact-area">
                  <div className="mu-title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="mu-contact-content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mu-contact-left">
                          {/* Email message div */}
                          <div id="form-messages" />
                          {/* Start contact form */}
                          <form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
                            <div className="form-group">
                              <label htmlFor="name">Your Name</label>
                              <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email address</label>
                              <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                            </div>                      
                            <div className="form-group">
                              <label htmlFor="subject">Subject</label>
                              <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                              <label htmlFor="message">Message</label>                        
                              <textarea className="form-control" id="message" name="message" cols={30} rows={10} placeholder="Type Your Message" required defaultValue={""} />
                            </div>                      
                            <button type="submit" className="mu-send-btn">Send Message</button>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mu-contact-right">
                          <div className="mu-contact-widget">
                            <h3>Office Address</h3>
                            <p />
                            <address>
                              <p><i className="fa fa-phone" /> 011 243 5200</p>
                              <p><i className="fa fa-envelope-o" />info@umsmining.co.za</p>
                              <p><i className="fa fa-map-marker" />4th Floor, Illovo Edge, Building 1, <br />
                                11 Harries Road <br />
                                Cnr Fricker &amp; Harries Road, <br />
                                Illovo, Sandton 2196
                              </p>
                            </address>
                          </div>
                          <div className="mu-contact-widget">
                            <h3>Open Hours</h3>                      
                            <address>
                              <p><span>Monday - Friday</span> 8:00 am to 5:00 pm</p>
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact section */}
        {/* Start Map section */}
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


export default ContactUs