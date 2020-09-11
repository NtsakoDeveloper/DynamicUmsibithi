import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Govern extends React.Component{

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
              <img className="first-slide" src="assets/img/governance.jpg" alt="First slide" />
              <div className="container">
                <div className="carousel-caption">
                </div>
              </div>
            </div>
          </div>
        </div>{/* /.carousel */}
        <hr />
        <hr />
        <div className="container" id="exTab2">
          <div className="container"><h2>Governance</h2></div>
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#1" data-toggle="tab"><h4>Policies</h4></a>
            </li>
            <li><a href="#2" data-toggle="tab"><h4>Reporting Misconduct</h4></a>
            </li>
          </ul>
          <div className="tab-content ">
            <div className="tab-pane active" id={1}>
              <ul className="list-group">
                <li className="list-group-item">policy 1(Advise if available)</li>
                <li className="list-group-item">Policy 2</li>
                <li className="list-group-item">Policy 3</li>
                <li className="list-group-item">Policy 4</li>
                <li className="list-group-item"><a href="#" /> Procurement Terms and Conditions</li> 
              </ul>
            </div>
            <div className="tab-pane" id={2}>
              <h4>Everybody working for Umsimbithi  must promptly raise any situations in which the  Umsimbithi  Code of Conduct, 
                its underlying policies or the law appear to be breached with a supervisor or manager. Alternatively, 
                they may raise the concern with the appropriate manager in human resources, legal, finance, 
                corporate affairs, sustainability or senior management, or with his or her local compliance contact.<p />
                <br />
                <br />
                <p>the concern remains unresolved through these local channels, or should an employee, 
                  contractor, supplier or other stakeholder feel uncomfortable utilising the local channels 
                  for resolution of the concerns for whatever reason and at any time, 
                  the concern can be referred to the  Umsimbithi  Raising Concerns Programme.</p>
                <br />
                <br />
                {/* <p>The process is simple. To raise a concern using  Umsimbithi ’s secure web platform, individuals 
              may visit https://glencore.raisingconcerns.org and click on the “Raise a Concern” button. For 
              most countries, telephone numbers are also available to make a report.  These relevant 
              telephone numbers can be found at the above web address. </p> */}
                <br />
                <br />
                <p>When using the platform, no IP information, time stamps or metadata is recorded and reports are encrypted. 
                  All reporters will remain anonymous unless the reporter chooses to disclose his or her name, or unless the 
                  reporter’s name is required by local law.  If a concern is reported in good faith and the reporter elects to 
                  identify himself or herself, the reporter’s identity will be considered private and must be protected.  
                  This means  Umsimbithi  will only disclose the identity of 
                  the reporter to those people at  Umsimbithi  who need the information to investigate and resolve the concern. </p> 
                <br />
                <br />
                <p> Umsimbithi  will not tolerate retaliation for reports made in good faith.  Abuse of the channel, however, is not acceptable.</p>
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
              </h4></div>
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


export default Govern