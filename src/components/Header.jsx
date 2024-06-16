import "../styles/Header.css";
import logo from "../assets/logo_wild.svg";

const Header = () => {
	const today = new Date().toLocaleDateString();
	return (
		<header>
			<div className="left">
				<img className="logo" src={logo} alt="" />
			</div>
			<div className="right">
				<h1>Hello Wilders today is the {today}</h1>
			</div>
			<div className="gradient" />
			<div className="gradient2" />
			<div className="gradient3" />
		</header>
	);
};

export default Header;
