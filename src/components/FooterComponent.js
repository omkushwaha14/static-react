import React from "react";



function Footer () {
    return(  <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/aboutus">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="contactus">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            110042, Rohini sec-16<br />
                            Bhawana Road<br />
                            New delhi,India<br />
                            <i className="fa fa-phone fa-lg"></i>:+916203807954<br/>
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:omkushwaha14@gmail.com">Email us !</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2018 Foodapp</p>
                    </div>
                </div>
            </div>
        </div>
    )



}
export default Footer;