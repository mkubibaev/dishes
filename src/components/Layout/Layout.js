import React, {Fragment} from 'react';
import Header from "../Header/Header";
import Container from "reactstrap/es/Container";

const Layout = ({children}) => {
	return (
		<Fragment>
			<Header/>
			<Container>
				{children}
			</Container>
		</Fragment>
	);
};

export default Layout;