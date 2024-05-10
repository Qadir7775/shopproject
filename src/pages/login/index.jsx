//meta teqleri elave ede bilmersen bura bele, yanlisdir
export default function Login() {
    return (
        <div>
            <>
                <main>
                    <div className="mb-4 pb-4" />
                    <section className="login-register container">
                        <h2 className="d-none">Login &amp; Register</h2>
                        <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link nav-link_underscore active"
                                    id="login-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-item-login"
                                    role="tab"
                                    aria-controls="tab-item-login"
                                    aria-selected="true"
                                >
                                    Login
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link nav-link_underscore"
                                    id="register-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-item-register"
                                    role="tab"
                                    aria-controls="tab-item-register"
                                    aria-selected="false"
                                >
                                    Register
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content pt-2" id="login_register_tab_content">
                            <div
                                className="tab-pane fade show active"
                                id="tab-item-login"
                                role="tabpanel"
                                aria-labelledby="login-tab"
                            >
                                <div className="login-form">
                                    <form name="login-form" className="needs-validation" noValidate="">
                                        <div className="form-floating mb-3">
                                            <input
                                                name="login_email"
                                                type="email"
                                                className="form-control form-control_gray"
                                                id="customerNameEmailInput1"
                                                placeholder="Email address *"
                                                required=""
                                            />
                                            <label htmlFor="customerNameEmailInput1">Email address *</label>
                                        </div>
                                        <div className="pb-3" />
                                        <div className="form-floating mb-3">
                                            <input
                                                name="login_password"
                                                type="password"
                                                className="form-control form-control_gray"
                                                id="customerPasswodInput"
                                                placeholder="Password *"
                                                required=""
                                            />
                                            <label htmlFor="customerPasswodInput">Password *</label>
                                        </div>
                                        <div className="d-flex align-items-center mb-3 pb-2">
                                            <div className="form-check mb-0">
                                                <input
                                                    name="remember"
                                                    className="form-check-input form-check-input_fill"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label text-secondary"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="reset_password.html" className="btn-text ms-auto">
                                                Lost password?
                                            </a>
                                        </div>
                                        <button
                                            className="btn btn-primary w-100 text-uppercase"
                                            type="submit"
                                        >
                                            Log In
                                        </button>
                                        <div className="customer-option mt-4 text-center">
                                            <span className="text-secondary">No account yet?</span>
                                            <a href="#register-tab" className="btn-text js-show-register">
                                                Create Account
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-item-register"
                                role="tabpanel"
                                aria-labelledby="register-tab"
                            >
                                <div className="register-form">
                                    <form
                                        name="register-form"
                                        className="needs-validation"
                                        noValidate=""
                                    >
                                        <div className="form-floating mb-3">
                                            <input
                                                name="register_username"
                                                type="text"
                                                className="form-control form-control_gray"
                                                id="customerNameRegisterInput"
                                                placeholder="Username"
                                                required=""
                                            />
                                            <label htmlFor="customerNameRegisterInput">Username</label>
                                        </div>
                                        <div className="pb-3" />
                                        <div className="form-floating mb-3">
                                            <input
                                                name="register_email"
                                                type="email"
                                                className="form-control form-control_gray"
                                                id="customerEmailRegisterInput"
                                                placeholder="Email address *"
                                                required=""
                                            />
                                            <label htmlFor="customerEmailRegisterInput">
                                                Email address *
                                            </label>
                                        </div>
                                        <div className="pb-3" />
                                        <div className="form-floating mb-3">
                                            <input
                                                name="register_password"
                                                type="password"
                                                className="form-control form-control_gray"
                                                id="customerPasswodRegisterInput"
                                                placeholder="Password *"
                                                required=""
                                            />
                                            <label htmlFor="customerPasswodRegisterInput">Password *</label>
                                        </div>
                                        <div className="d-flex align-items-center mb-3 pb-2">
                                            <p className="m-0">
                                                Your personal data will be used to support your experience
                                                throughout this website, to manage access to your account, and
                                                for other purposes described in our privacy policy.
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-primary w-100 text-uppercase"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <div className="mb-5 pb-xl-5" />
                {/* Footer Type 1 */}
                <footer className="footer footer_type_1">
                    <div className="footer-middle container">
                        <div className="row row-cols-lg-5 row-cols-2">
                            <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
                                <div className="logo">
                                    <a href="index.html">
                                        <img
                                            src="../images/logo.png"
                                            alt="Uomo"
                                            className="logo__image d-block"
                                        />
                                    </a>
                                </div>
                                {/* /.logo */}
                                <p className="footer-address">
                                    1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                                </p>
                                <p className="m-0">
                                    <strong className="fw-medium">sale@uomo.com</strong>
                                </p>
                                <p>
                                    <strong className="fw-medium">+1 246-345-0695</strong>
                                </p>
                                <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            className="footer__social-link d-block"
                                        >
                                            <svg
                                                className="svg-icon svg-icon_facebook"
                                                width={9}
                                                height={15}
                                                viewBox="0 0 9 15"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_facebook" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.twitter.com/"
                                            className="footer__social-link d-block"
                                        >
                                            <svg
                                                className="svg-icon svg-icon_twitter"
                                                width={14}
                                                height={13}
                                                viewBox="0 0 14 13"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_twitter" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            className="footer__social-link d-block"
                                        >
                                            <svg
                                                className="svg-icon svg-icon_instagram"
                                                width={14}
                                                height={13}
                                                viewBox="0 0 14 13"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_instagram" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.youtube.com/"
                                            className="footer__social-link d-block"
                                        >
                                            <svg
                                                className="svg-icon svg-icon_youtube"
                                                width={16}
                                                height={11}
                                                viewBox="0 0 16 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.pinterest.com/"
                                            className="footer__social-link d-block"
                                        >
                                            <svg
                                                className="svg-icon svg-icon_pinterest"
                                                width={14}
                                                height={15}
                                                viewBox="0 0 14 15"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_pinterest" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.footer-column */}
                            <div className="footer-column footer-menu mb-4 mb-lg-0">
                                <h6 className="sub-menu__title text-uppercase">Company</h6>
                                <ul className="sub-menu__list list-unstyled">
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            Careers
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            Affiliates
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="blog_list1.html" className="menu-link menu-link_us-s">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="contact.html" className="menu-link menu-link_us-s">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.footer-column */}
                            <div className="footer-column footer-menu mb-4 mb-lg-0">
                                <h6 className="sub-menu__title text-uppercase">Shop</h6>
                                <ul className="sub-menu__list list-unstyled">
                                    <li className="sub-menu__item">
                                        <a href="shop2.html" className="menu-link menu-link_us-s">
                                            New Arrivals
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="shop3.html" className="menu-link menu-link_us-s">
                                            Accessories
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="shop4.html" className="menu-link menu-link_us-s">
                                            Men
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="shop5.html" className="menu-link menu-link_us-s">
                                            Women
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="shop1.html" className="menu-link menu-link_us-s">
                                            Shop All
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.footer-column */}
                            <div className="footer-column footer-menu mb-4 mb-lg-0">
                                <h6 className="sub-menu__title text-uppercase">Help</h6>
                                <ul className="sub-menu__list list-unstyled">
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            Customer Service
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a
                                            href="account_dashboard.html"
                                            className="menu-link menu-link_us-s"
                                        >
                                            My Account
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a
                                            href="store_location.html"
                                            className="menu-link menu-link_us-s"
                                        >
                                            Find a Store
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            Legal &amp; Privacy
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="contact.html" className="menu-link menu-link_us-s">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="about.html" className="menu-link menu-link_us-s">
                                            Gift Card
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.footer-column */}
                            <div className="footer-column footer-newsletter col-12 mb-4 mb-lg-0">
                                <h6 className="sub-menu__title text-uppercase">Subscribe</h6>
                                <p>
                                    Be the first to get the latest news about trends, promotions, and
                                    much more!
                                </p>
                                <form
                                    action="https://uomo-html.flexkitux.com/Demo1/index.html"
                                    className="footer-newsletter__form position-relative bg-body"
                                >
                                    <input
                                        className="form-control border-white"
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                    />
                                    <input
                                        className="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100"
                                        type="submit"
                                        defaultValue="JOIN"
                                    />
                                </form>
                                <div className="mt-4 pt-3">
                                    <strong className="fw-medium">Secure payments</strong>
                                    <p className="mt-2">
                                        <img
                                            loading="lazy"
                                            src="../images/payment-options.png"
                                            alt="Acceptable payment gateways"
                                        />
                                    </p>
                                </div>
                            </div>
                            {/* /.footer-column */}
                        </div>
                        {/* /.row-cols-5 */}
                    </div>
                    {/* /.footer-middle container */}
                    <div className="footer-bottom container">
                        <div className="d-block d-md-flex align-items-center">
                            <span className="footer-copyright me-auto">©2024 Uomo</span>
                            <div className="footer-settings d-block d-md-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <label
                                        htmlFor="footerSettingsLanguage"
                                        className="me-2 text-secondary"
                                    >
                                        Language
                                    </label>
                                    <select
                                        id="footerSettingsLanguage"
                                        className="form-select form-select-sm bg-transparent"
                                        aria-label="Default select example"
                                        name="store-language"
                                    >
                                        <option className="footer-select__option" selected="">
                                            United Kingdom | English
                                        </option>
                                        <option className="footer-select__option" value={1}>
                                            United States | English
                                        </option>
                                        <option className="footer-select__option" value={2}>
                                            German
                                        </option>
                                        <option className="footer-select__option" value={3}>
                                            French
                                        </option>
                                        <option className="footer-select__option" value={4}>
                                            Swedish
                                        </option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label
                                        htmlFor="footerSettingsCurrency"
                                        className="ms-md-3 me-2 text-secondary"
                                    >
                                        Currency
                                    </label>
                                    <select
                                        id="footerSettingsCurrency"
                                        className="form-select form-select-sm bg-transparent"
                                        aria-label="Default select example"
                                        name="store-language"
                                    >
                                        <option selected="">$ USD</option>
                                        <option value={1}>£ GBP</option>
                                        <option value={2}>€ EURO</option>
                                    </select>
                                </div>
                            </div>
                            {/* /.footer-settings */}
                        </div>
                        {/* /.d-flex */}
                    </div>
                    {/* /.footer-bottom container */}
                </footer>
                {/* /.footer footer_type_1 */}
                {/* End Footer Type 1 */}
                {/* Mobile Fixed Footer */}
                <footer className="footer-mobile container w-100 px-5 d-md-none bg-body">
                    <div className="row text-center">
                        <div className="col-4">
                            <a
                                href="https://uomo-html.flexkitux.com/"
                                className="footer-mobile__link d-flex flex-column align-items-center"
                            >
                                <svg
                                    className="d-block"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <use href="#icon_home" />
                                </svg>
                                <span>Home</span>
                            </a>
                        </div>
                        {/* /.col-3 */}
                        <div className="col-4">
                            <a
                                href="https://uomo-html.flexkitux.com/"
                                className="footer-mobile__link d-flex flex-column align-items-center"
                            >
                                <svg
                                    className="d-block"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <use href="#icon_hanger" />
                                </svg>
                                <span>Shop</span>
                            </a>
                        </div>
                        {/* /.col-3 */}
                        <div className="col-4">
                            <a
                                href="https://uomo-html.flexkitux.com/"
                                className="footer-mobile__link d-flex flex-column align-items-center"
                            >
                                <div className="position-relative">
                                    <svg
                                        className="d-block"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_heart" />
                                    </svg>
                                    <span className="wishlist-amount d-block position-absolute js-wishlist-count">
                                        3
                                    </span>
                                </div>
                                <span>Wishlist</span>
                            </a>
                        </div>
                        {/* /.col-3 */}
                    </div>
                    {/* /.row */}
                </footer>
                {/* /.footer-mobile container position-fixed d-md-none bottom-0 */}
                {/* Customer Login Form */}
                <div
                    className="aside aside_right overflow-hidden customer-forms"
                    id="customerForms"
                >
                    <div className="customer-forms__wrapper d-flex position-relative">
                        <div className="customer__login">
                            <div className="aside-header d-flex align-items-center">
                                <h3 className="text-uppercase fs-6 mb-0">Login</h3>
                                <button className="btn-close-lg js-close-aside ms-auto" />
                            </div>
                            {/* /.aside-header */}
                            <form
                                action="https://uomo-html.flexkitux.com/Demo1/login_register.html"
                                method="POST"
                                className="aside-content"
                            >
                                <div className="form-floating mb-3">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control form-control_gray"
                                        id="customerNameEmailInput"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="customerNameEmailInput">
                                        Username or email address *
                                    </label>
                                </div>
                                <div className="pb-3" />
                                <div className="form-label-fixed mb-3">
                                    <label htmlFor="customerPasswordInput" className="form-label">
                                        Password *
                                    </label>
                                    <input
                                        name="password"
                                        id="customerPasswordInput"
                                        className="form-control form-control_gray"
                                        type="password"
                                        placeholder="********"
                                    />
                                </div>
                                <div className="d-flex align-items-center mb-3 pb-2">
                                    <div className="form-check mb-0">
                                        <input
                                            name="remember"
                                            className="form-check-input form-check-input_fill"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            className="form-check-label text-secondary"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="reset_password.html" className="btn-text ms-auto">
                                        Lost password?
                                    </a>
                                </div>
                                <button
                                    className="btn btn-primary w-100 text-uppercase"
                                    type="submit"
                                >
                                    Log In
                                </button>
                                <div className="customer-option mt-4 text-center">
                                    <span className="text-secondary">No account yet?</span>
                                    <a
                                        href="login_register.html#register-tab"
                                        className="btn-text js-show-register"
                                    >
                                        Create Account
                                    </a>
                                </div>
                            </form>
                        </div>
                        {/* /.customer__login */}
                        <div className="customer__register">
                            <div className="aside-header d-flex align-items-center">
                                <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
                                <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
                            </div>
                            {/* /.aside-header */}
                            <form
                                action="https://uomo-html.flexkitux.com/Demo1/login_register.html"
                                method="POST"
                                className="aside-content"
                            >
                                <div className="form-floating mb-4">
                                    <input
                                        name="username"
                                        type="text"
                                        className="form-control form-control_gray"
                                        id="registerUserNameInput"
                                        placeholder="Username"
                                    />
                                    <label htmlFor="registerUserNameInput">Username</label>
                                </div>
                                <div className="pb-1" />
                                <div className="form-floating mb-4">
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control form-control_gray"
                                        id="registerUserEmailInput"
                                        placeholder="user@company.com"
                                    />
                                    <label htmlFor="registerUserEmailInput">Email address *</label>
                                </div>
                                <div className="pb-1" />
                                <div className="form-label-fixed mb-4">
                                    <label htmlFor="registerPasswordInput" className="form-label">
                                        Password *
                                    </label>
                                    <input
                                        name="password"
                                        id="registerPasswordInput"
                                        className="form-control form-control_gray"
                                        type="password"
                                        placeholder="*******"
                                    />
                                </div>
                                <p className="text-secondary mb-4">
                                    Your personal data will be used to support your experience
                                    throughout this website, to manage access to your account, and for
                                    other purposes described in our privacy policy.
                                </p>
                                <button
                                    className="btn btn-primary w-100 text-uppercase"
                                    type="submit"
                                >
                                    Register
                                </button>
                                <div className="customer-option mt-4 text-center">
                                    <span className="text-secondary">Already have account?</span>
                                    <a href="#" className="btn-text js-show-login">
                                        Login
                                    </a>
                                </div>
                            </form>
                        </div>
                        {/* /.customer__register */}
                    </div>
                    {/* /.customer-forms__wrapper */}
                </div>
                {/* /.aside aside_right */}
                {/* Cart Drawer */}
                <div
                    className="aside aside_right overflow-hidden cart-drawer"
                    id="cartDrawer"
                >
                    <div className="aside-header d-flex align-items-center">
                        <h3 className="text-uppercase fs-6 mb-0">
                            SHOPPING BAG ({" "}
                            <span className="cart-amount js-cart-items-count">1</span> ){" "}
                        </h3>
                        <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
                    </div>
                    {/* /.aside-header */}
                    <div className="aside-content cart-drawer-items-list">
                        <div className="cart-drawer-item d-flex position-relative">
                            <div className="position-relative">
                                <a href="product1_simple.html">
                                    <img
                                        loading="lazy"
                                        className="cart-drawer-item__img"
                                        src="../images/cart-item-1.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="cart-drawer-item__info flex-grow-1">
                                <h6 className="cart-drawer-item__title fw-normal">
                                    <a href="product1_simple.html">Zessi Dresses</a>
                                </h6>
                                <p className="cart-drawer-item__option text-secondary">
                                    Color: Yellow
                                </p>
                                <p className="cart-drawer-item__option text-secondary">Size: L</p>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <div className="qty-control position-relative">
                                        <input
                                            type="number"
                                            name="quantity"
                                            defaultValue={1}
                                            min={1}
                                            className="qty-control__number border-0 text-center"
                                        />
                                        <div className="qty-control__reduce text-start">-</div>
                                        <div className="qty-control__increase text-end">+</div>
                                    </div>
                                    {/* .qty-control */}
                                    <span className="cart-drawer-item__price money price">$99</span>
                                </div>
                            </div>
                            <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
                        </div>
                        {/* /.cart-drawer-item d-flex */}
                        <hr className="cart-drawer-divider" />
                        <div className="cart-drawer-item d-flex position-relative">
                            <div className="position-relative">
                                <a href="product1_simple.html">
                                    <img
                                        loading="lazy"
                                        className="cart-drawer-item__img"
                                        src="../images/cart-item-2.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="cart-drawer-item__info flex-grow-1">
                                <h6 className="cart-drawer-item__title fw-normal">
                                    <a href="product1_simple.html">Kirby T-Shirt</a>
                                </h6>
                                <p className="cart-drawer-item__option text-secondary">
                                    Color: Black
                                </p>
                                <p className="cart-drawer-item__option text-secondary">Size: XS</p>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <div className="qty-control position-relative">
                                        <input
                                            type="number"
                                            name="quantity"
                                            defaultValue={4}
                                            min={1}
                                            className="qty-control__number border-0 text-center"
                                        />
                                        <div className="qty-control__reduce text-start">-</div>
                                        <div className="qty-control__increase text-end">+</div>
                                    </div>
                                    {/* .qty-control */}
                                    <span className="cart-drawer-item__price money price">$89</span>
                                </div>
                            </div>
                            <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
                        </div>
                        {/* /.cart-drawer-item d-flex */}
                        <hr className="cart-drawer-divider" />
                        <div className="cart-drawer-item d-flex position-relative">
                            <div className="position-relative">
                                <a href="product1_simple.html">
                                    <img
                                        loading="lazy"
                                        className="cart-drawer-item__img"
                                        src="../images/cart-item-3.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="cart-drawer-item__info flex-grow-1">
                                <h6 className="cart-drawer-item__title fw-normal">
                                    <a href="product1_simple.html">Cableknit Shawl</a>
                                </h6>
                                <p className="cart-drawer-item__option text-secondary">
                                    Color: Green
                                </p>
                                <p className="cart-drawer-item__option text-secondary">Size: L</p>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <div className="qty-control position-relative">
                                        <input
                                            type="number"
                                            name="quantity"
                                            defaultValue={3}
                                            min={1}
                                            className="qty-control__number border-0 text-center"
                                        />
                                        <div className="qty-control__reduce text-start">-</div>
                                        <div className="qty-control__increase text-end">+</div>
                                    </div>
                                    {/* .qty-control */}
                                    <span className="cart-drawer-item__price money price">$129</span>
                                </div>
                            </div>
                            <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" />
                        </div>
                        {/* /.cart-drawer-item d-flex */}
                    </div>
                    {/* /.aside-content */}
                    <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
                        <hr className="cart-drawer-divider" />
                        <div className="d-flex justify-content-between">
                            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
                            <span className="cart-subtotal fw-medium">$176.00</span>
                        </div>
                        {/* /.d-flex justify-content-between */}
                        <a href="shop_cart.html" className="btn btn-light mt-3 d-block">
                            View Cart
                        </a>
                        <a href="shop_checkout.html" className="btn btn-primary mt-3 d-block">
                            Checkout
                        </a>
                    </div>
                    {/* /.aside-content */}
                </div>
                {/* /.aside */}
                {/* Sitemap */}
                <div className="modal fade" id="siteMap" tabIndex={-1}>
                    <div className="modal-dialog modal-fullscreen">
                        <div className="sitemap d-flex">
                            <div className="w-50 d-none d-lg-block">
                                <img
                                    loading="lazy"
                                    src="../images/nav-bg.jpg"
                                    alt="Site map"
                                    className="sitemap__bg"
                                />
                            </div>
                            {/* /.sitemap__bg w-50 d-none d-lg-block */}
                            <div className="sitemap__links w-50 flex-grow-1">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active rounded-1 text-uppercase"
                                                    id="pills-item-1-tab"
                                                    data-bs-toggle="pill"
                                                    href="#pills-item-1"
                                                    role="tab"
                                                    aria-controls="pills-item-1"
                                                    aria-selected="true"
                                                >
                                                    WOMEN
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link rounded-1 text-uppercase"
                                                    id="pills-item-2-tab"
                                                    data-bs-toggle="pill"
                                                    href="#pills-item-2"
                                                    role="tab"
                                                    aria-controls="pills-item-2"
                                                    aria-selected="false"
                                                >
                                                    MEN
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link rounded-1 text-uppercase"
                                                    id="pills-item-3-tab"
                                                    data-bs-toggle="pill"
                                                    href="#pills-item-3"
                                                    role="tab"
                                                    aria-controls="pills-item-3"
                                                    aria-selected="false"
                                                >
                                                    KIDS
                                                </a>
                                            </li>
                                        </ul>
                                        <button
                                            type="button"
                                            className="btn-close-lg"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <div className="tab-content col-12" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-item-1"
                                                role="tabpanel"
                                                aria-labelledby="pills-item-1-tab"
                                            >
                                                <div className="row">
                                                    <ul
                                                        className="nav nav-tabs list-unstyled col-5 d-block"
                                                        id="myTab"
                                                        role="tablist"
                                                    >
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a
                                                                className="nav-link nav-link_rline active"
                                                                id="tab-item-1-tab"
                                                                data-bs-toggle="tab"
                                                                href="#tab-item-1"
                                                                role="tab"
                                                                aria-controls="tab-item-1"
                                                                aria-selected="true"
                                                            >
                                                                <span className="rline-content">WOMEN</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a
                                                                className="nav-link nav-link_rline"
                                                                id="tab-item-2-tab"
                                                                data-bs-toggle="tab"
                                                                href="#tab-item-2"
                                                                role="tab"
                                                                aria-controls="tab-item-2"
                                                                aria-selected="false"
                                                            >
                                                                <span className="rline-content">MAN</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a
                                                                className="nav-link nav-link_rline"
                                                                id="tab-item-3-tab"
                                                                data-bs-toggle="tab"
                                                                href="#tab-item-3"
                                                                role="tab"
                                                                aria-controls="tab-item-3"
                                                                aria-selected="false"
                                                            >
                                                                <span className="rline-content">KIDS</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">HOME</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">COLLECTION</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a
                                                                className="nav-link nav-link_rline text-red"
                                                                href="#"
                                                            >
                                                                SALE UP TO 50% OFF
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">NEW</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">SHOES</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">ACCESSORIES</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">JOIN LIFE</span>
                                                            </a>
                                                        </li>
                                                        <li
                                                            className="nav-item position-relative"
                                                            role="presentation"
                                                        >
                                                            <a className="nav-link nav-link_rline" href="#">
                                                                <span className="rline-content">#UOMOSTYLE</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content col-7" id="myTabContent">
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="tab-item-1"
                                                            role="tabpanel"
                                                            aria-labelledby="tab-item-1-tab"
                                                        >
                                                            <ul className="sub-menu list-unstyled">
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        New
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Best Sellers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Collaborations®
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Sets
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Denim
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jackets &amp; Coats
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Overshirts
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Trousers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jeans
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Dresses
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Sweatshirts and Hoodies
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        T-shirts &amp; Tops
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shirts &amp; Blouses
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shorts and Bermudas
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shoes
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="shop3.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Bags
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="about.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Gift Card
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/* /.sub-menu */}
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="tab-item-2"
                                                            role="tabpanel"
                                                            aria-labelledby="tab-item-2-tab"
                                                        >
                                                            <ul className="sub-menu list-unstyled">
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Best Sellers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        New
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Sets
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Denim
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Collaborations®
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Trousers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jackets &amp; Coats
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Overshirts
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Dresses
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jeans
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Sweatshirts and Hoodies
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="about.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Gift Card
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shirts &amp; Blouses
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        T-shirts &amp; Tops
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shorts and Bermudas
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="shop3.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shoes
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Bags
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/* /.sub-menu */}
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="tab-item-3"
                                                            role="tabpanel"
                                                            aria-labelledby="tab-item-3-tab"
                                                        >
                                                            <ul className="sub-menu list-unstyled">
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="about.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Gift Card
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Collaborations®
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Sets
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Denim
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        New
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Best Sellers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Overshirts
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jackets &amp; Coats
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Jeans
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Trousers
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shorts and Bermudas
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Shoes
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a
                                                                        href="shop3.html"
                                                                        className="menu-link menu-link_us-s"
                                                                    >
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Dresses
                                                                    </a>
                                                                </li>
                                                                <li className="sub-menu__item">
                                                                    <a href="#" className="menu-link menu-link_us-s">
                                                                        Bags
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            {/* /.sub-menu */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /.row */}
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-item-2"
                                                role="tabpanel"
                                                aria-labelledby="pills-item-2-tab"
                                            >
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate velit
                                                    esse cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                                Elementum lectus a porta commodo suspendisse arcu, aliquam
                                                lectus faucibus.
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-item-3"
                                                role="tabpanel"
                                                aria-labelledby="pills-item-3-tab"
                                            >
                                                <p>
                                                    Sed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                    aut fugit, sed quia consequuntur magni dolores eos qui
                                                    ratione voluptatem sequi nesciunt.
                                                </p>
                                                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                                consequatur?
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.modal-body */}
                                </div>
                                {/* /.modal-content */}
                            </div>
                            {/* /.sitemap__links w-50 flex-grow-1 */}
                        </div>
                    </div>
                    {/* /.modal-dialog modal-fullscreen */}
                </div>
                {/* /.sitemap position-fixed w-100 */}
                {/* Quick View */}
                <div className="modal fade" id="quickView" tabIndex={-1}>
                    <div className="modal-dialog quick-view modal-dialog-centered">
                        <div className="modal-content">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            <div className="product-single">
                                <div className="product-single__media m-0">
                                    <div className="product-single__image position-relative w-100">
                                        <div
                                            className="swiper-container js-swiper-slider"
                                            data-settings='{
            "slidesPerView": 1,
            "slidesPerGroup": 1,
            "effect": "none",
            "loop": false,
            "navigation": {
              "nextEl": ".modal-dialog.quick-view .product-single__media .swiper-button-next",
              "prevEl": ".modal-dialog.quick-view .product-single__media .swiper-button-prev"
            }
          }'
                                        >
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide product-single__image-item">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/quickview_1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="swiper-slide product-single__image-item">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/quickview_2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="swiper-slide product-single__image-item">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/quickview_3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="swiper-slide product-single__image-item">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/quickview_4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="swiper-button-prev">
                                                <svg
                                                    width={7}
                                                    height={11}
                                                    viewBox="0 0 7 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_prev_sm" />
                                                </svg>
                                            </div>
                                            <div className="swiper-button-next">
                                                <svg
                                                    width={7}
                                                    height={11}
                                                    viewBox="0 0 7 11"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_next_sm" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-single__detail">
                                    <h1 className="product-single__name">
                                        Lightweight Puffer Jacket With a Hood
                                    </h1>
                                    <div className="product-single__price">
                                        <span className="current-price">$449</span>
                                    </div>
                                    <div className="product-single__short-desc">
                                        <p>
                                            Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                                            elementum gravida nec dui. Aenean aliquam varius ipsum, non
                                            ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                                            aliquet magna posuere eget.
                                        </p>
                                    </div>
                                    <form name="addtocart-form" method="post">
                                        <div className="product-single__swatches">
                                            <div className="product-swatch text-swatches">
                                                <label>Sizes</label>
                                                <div className="swatch-list">
                                                    <input type="radio" name="size" id="swatch-1" />
                                                    <label
                                                        className="swatch js-swatch"
                                                        htmlFor="swatch-1"
                                                        aria-label="Extra Small"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Extra Small"
                                                    >
                                                        XS
                                                    </label>
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        id="swatch-2"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="swatch js-swatch"
                                                        htmlFor="swatch-2"
                                                        aria-label="Small"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Small"
                                                    >
                                                        S
                                                    </label>
                                                    <input type="radio" name="size" id="swatch-3" />
                                                    <label
                                                        className="swatch js-swatch"
                                                        htmlFor="swatch-3"
                                                        aria-label="Middle"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Middle"
                                                    >
                                                        M
                                                    </label>
                                                    <input type="radio" name="size" id="swatch-4" />
                                                    <label
                                                        className="swatch js-swatch"
                                                        htmlFor="swatch-4"
                                                        aria-label="Large"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Large"
                                                    >
                                                        L
                                                    </label>
                                                    <input type="radio" name="size" id="swatch-5" />
                                                    <label
                                                        className="swatch js-swatch"
                                                        htmlFor="swatch-5"
                                                        aria-label="Extra Large"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Extra Large"
                                                    >
                                                        XL
                                                    </label>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="sizeguide-link"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#sizeGuide"
                                                >
                                                    Size Guide
                                                </a>
                                            </div>
                                            <div className="product-swatch color-swatches">
                                                <label>Color</label>
                                                <div className="swatch-list">
                                                    <input type="radio" name="color" id="swatch-11" />
                                                    <label
                                                        className="swatch swatch-color js-swatch"
                                                        htmlFor="swatch-11"
                                                        aria-label="Black"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Black"
                                                        style={{ color: "#222" }}
                                                    />
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        id="swatch-12"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="swatch swatch-color js-swatch"
                                                        htmlFor="swatch-12"
                                                        aria-label="Red"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Red"
                                                        style={{ color: "#C93A3E" }}
                                                    />
                                                    <input type="radio" name="color" id="swatch-13" />
                                                    <label
                                                        className="swatch swatch-color js-swatch"
                                                        htmlFor="swatch-13"
                                                        aria-label="Grey"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Grey"
                                                        style={{ color: "#E4E4E4" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-single__addtocart">
                                            <div className="qty-control position-relative">
                                                <input
                                                    type="number"
                                                    name="quantity"
                                                    defaultValue={1}
                                                    min={1}
                                                    className="qty-control__number text-center"
                                                />
                                                <div className="qty-control__reduce">-</div>
                                                <div className="qty-control__increase">+</div>
                                            </div>
                                            {/* .qty-control */}
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-addtocart js-open-aside"
                                                data-aside="cartDrawer"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </form>
                                    <div className="product-single__addtolinks">
                                        <a href="#" className="menu-link menu-link_us-s add-to-wishlist">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_heart" />
                                            </svg>
                                            <span>Add to Wishlist</span>
                                        </a>
                                        <share-button className="share-button">
                                            <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                                                <svg
                                                    width={16}
                                                    height={19}
                                                    viewBox="0 0 16 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <use href="#icon_sharing" />
                                                </svg>
                                            </button>
                                            <details
                                                id="Details-share-template__main"
                                                className="m-1 xl:m-1.5"
                                                hidden=""
                                            >
                                                <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
                                                    +
                                                </summary>
                                                <div
                                                    id="Article-share-template__main"
                                                    className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
                                                >
                                                    <div className="field grow mr-4">
                                                        <label className="field__label sr-only" htmlFor="url">
                                                            Link
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="field__input w-full"
                                                            id="url"
                                                            defaultValue="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                                                            placeholder="Link"
                                                            readOnly=""
                                                        />
                                                    </div>
                                                    <button className="share-button__copy no-js-hidden">
                                                        <svg
                                                            className="icon icon-clipboard inline-block mr-1"
                                                            width={11}
                                                            height={13}
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            viewBox="0 0 11 13"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Copy link</span>
                                                    </button>
                                                </div>
                                            </details>
                                        </share-button>
                                    </div>
                                    <div className="product-single__meta-info mb-0">
                                        <div className="meta-item">
                                            <label>SKU:</label>
                                            <span>N/A</span>
                                        </div>
                                        <div className="meta-item">
                                            <label>Categories:</label>
                                            <span>Casual &amp; Urban Wear, Jackets, Men</span>
                                        </div>
                                        <div className="meta-item">
                                            <label>Tags:</label>
                                            <span>biker, black, bomber, leather</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.modal-dialog */}
                </div>
                {/* /.quickview position-fixed */}
                {/* Go To Top */}
                <div id="scrollTop" className="visually-hidden end-0" />
                {/* Page Overlay */}
                <div className="page-overlay" />
                {/* /.page-overlay */}
                {/* External JavaScripts */}
                {/* Footer Scripts */}
                {/* Mirrored from uomo-html.flexkitux.com/Demo1/login_register.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 10 May 2024 07:31:25 GMT */}
            </>

        </div>
    )
}
