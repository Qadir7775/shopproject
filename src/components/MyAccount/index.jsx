/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function AccountLayout({children}) {
    return (
        <div>
            <main>
                <div className="mb-4 pb-4" />
                <section className="my-account container">
                    <h2 className="page-title">My Account</h2>
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="account-nav">    
                                <li>
                                    <Link to={'/dashboard'} className="menu-link menu-link_us-s menu-link_active"> Dashboard</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/orders'} className="menu-link menu-link_us-s">Orders</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/editAddress'} className="menu-link menu-link_us-s">ADDRESSES</Link>
                                </li>
                                <li>
                                    <Link to = {'/dashboard/accountEdit'}  className="menu-link menu-link_us-s">Account Details</Link>
                                </li>
                                <li>
                                    <Link to={'/dashboard/wishlist'} className="menu-link menu-link_us-s">Wishlist</Link>
                                </li>
                                <li>
                                    <a href="login_register.html" className="menu-link menu-link_us-s">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {children}
                    </div>
                </section>
            </main>
        </div>
    )
}
