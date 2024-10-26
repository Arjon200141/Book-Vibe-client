const Footer = () => {
    return (
        <div>
            <footer className="footer bg-cyan-200 text-md px-16 text-black p-10">
                <aside>
                    <img src="https://i.ibb.co.com/fpW5Ywc/201189010.png" alt="" className="h-16 w-40 rounded-lg" />
                    <p>Mobile : +880 123 3243 5353</p>
                    <p>Email : bookvibe@gmail.com</p>
                    <p>15/32 Dhanmondi,Dhaka</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;