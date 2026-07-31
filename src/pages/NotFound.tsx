import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
const NotFound = () => <div className="site-shell"><Seo title="Page not found | LaunchPoint" description="Return to the LaunchPoint conference website."/><Navbar/><main><section className="page-hero"><div className="site-container page-hero-inner"><p className="eyebrow eyebrow-light">404</p><h1>That page is not on the agenda.</h1><p>Return to the conference homepage or explore the current event plan.</p><p><Link to="/" className="button button-primary">Back to LaunchPoint</Link></p></div></section></main><Footer/></div>;
export default NotFound;
