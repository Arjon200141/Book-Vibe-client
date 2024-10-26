import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    const location = useLocation();
    const noheaderFooter = location.pathname.includes('signin') || location.pathname.includes('signup');
    return (
        <div className="bg-cyan-100">
            {noheaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;