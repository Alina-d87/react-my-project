//import PropTypes from 'prop-types';
//import { Routes, Route, NavLink } from "react-router-dom";
//import styled from "styled-components";
//import Home from "path/to/pages/Home";
//import About from "path/to/pages/About";
//import Products from "path/to/pages/Products";

import Header from "styled-components"

export const Header = () => {
	return (
		<Header>
			<Logo>pe<span>t</span>ly</Logo>
			<Navigation>
				//Загальна навігація
				<nav>
<Link to="/">Home</Link>
  <Link to="/new">New</Link>
  <Link to="/find pet">Find pet</Link>
  <Link to="/our friends">Our friends</Link>
</nav>
			//навігація для авторизованого користувача
				<UserNav>
					<button>Login</button>
					<button>Registration</button>
				</UserNav>
				//навігація для НЕавторизованого користувача
				<Authnav>
					<button>Account</button>
				</Authnav>
			</Navigation>
		</Header>
	)
}