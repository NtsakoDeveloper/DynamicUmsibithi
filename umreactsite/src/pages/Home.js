
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Index extends React.Component{

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
                      <li><Link className="active" to='/' class="navbar-brand" >Home</Link></li>
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
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="first-slide" src="https://i.ibb.co/zVb0dqb/Glencore-Wonderfontein-Mine.jpg" alt="First slide" />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Wonderfontein Colliery</h1>
                      <p>an Umsimbithi Mining (Pty) Ltd operation</p>
                      <p><a className="btn btn-lg btn-primary" href="About.html" role="button">Learn More</a></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="second-slide" src="https://i.ibb.co/Sxj4rWQ/img2.jpg" alt="Second slide" />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Umsimbithi</h1>
                      <p>is a JV between Umcebo Mining (50%) and Lithemba Wonderfontein Coal (50%)</p>
                      <p><a className="btn btn-lg btn-primary" href="About.html" role="button">Learn more</a></p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img className="third-slide" src="https://i.ibb.co/TWMfpZQ/Glencore-Wonderfontein-Mine-FIKILESOPHY-SIBANYONI-and-JOHANNES-MNGOMEZULU-are-both-Plant-attendants.jpg" alt="Third slide" />/
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Leadership</h1>
                      <p>Umsimbithi Mining believes that its competitive advantage lies in having competent and experienced employee</p>
                      <p><a className="btn btn-lg btn-primary" href="About.html" role="button">Learn More</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>{/* /.carousel */}
            <hr />
            {/* Three columns of text below the carousel */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">&nbsp;</div>
                <div className="col-md-8">
                  <div className="row space-16">&nbsp;</div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="thumbnailHome">
                        <div className="caption text-center">
                          <div className="thumbnail-description smaller">
                            <h3>Coal Mining</h3>
                            <p>Umsimbithi mines both export and domestic Coal</p>
                            <a href="OurServices.html" className="cta">Learn More<span className="ti-angle-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumbnailHome">
                        <div className="caption text-center">
                          <div className="thumbnail-description smaller">
                            <h3>Domestic Sales</h3>
                            <p>Umsimbithi supply its coal to power stations and local vendors</p>
                            <a href="OurServices.html" className="cta">Learn More<span className="ti-angle-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="thumbnailHome">
                        <div className="caption text-center">
                          <div className="thumbnail-description smaller">
                            <h3>Export Sales</h3>
                            <p>Umsimbithi supply its coal to export markets through Richardsbay Coal Terminals.</p>
                            <a href="OurServices.html" className="cta">Learn More<span className="ti-angle-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">&nbsp;</div>
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

export default Index