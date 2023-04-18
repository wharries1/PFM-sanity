import React from 'react'

const Footer = () => {
  return (
    <footer className="ws-footer">       
        <div className="container">
            <div className="row">                                             

                <div className="col-sm-6 ws-footer-col">                            
                    <h3>Our Message</h3>
                    <div className="ws-footer-separator"></div>                                         
                    <div className="ws-footer-about">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="col-sm-2 ws-footer-col">                    
                    <h3>Support</h3>   
                    <div className="ws-footer-separator"></div>                                         
                    <ul>
                        <li><a href="#x">Shipping &amp; Return</a></li>
                        <li><a href="#x">Privacy Policy</a></li>
                        <li><a href="#x">F.A.Q</a></li>
                        <li><a href="#x">Contact Us</a></li>                        
                    </ul>                    
                </div>  
                <div className="col-sm-2 ws-footer-col">                    
                    <h3>Socials</h3>   
                    <div className="ws-footer-separator"></div>                                         
                    <ul className="ws-footer-social">
                        <li><a href="#x"><i className="fa fa-facebook-square fa-lg"></i> Facebook</a></li>
                        <li><a href="#x"><i className="fa fa-twitter fa-lg"></i> Twitter</a></li>
                        <li><a href="#x"><i className="fa fa-instagram fa-lg"></i> Instagram</a></li>
                        <li><a href="#x"><i className="fa fa-pinterest fa-lg"></i> Pinterest</a></li>                        
                    </ul>                    
                </div> 

                <div className="col-sm-2 ws-footer-col">                    
                    <h3>Shop</h3>         
                    <div className="ws-footer-separator"></div>                                                     
                    <ul>
                        <li><a href="#x">Organic Printed T-shirts</a></li>
                        <li><a href="#x">Barrel Lids</a></li>
                        <li><a href="#x">Prints</a></li>
                        <li><a href="#x">Featured Works</a></li>                        
                    </ul>  
                </div>  
                   
            </div>
        </div>
    </footer>   
  )
}

export default Footer