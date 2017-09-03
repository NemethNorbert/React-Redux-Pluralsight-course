import React from 'react';
//class becouse of hotreloading, otherwise it`s should be stateless
class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>This application uses React, Redux, React Router and a variety of other helpful libaries.</p>
			</div>
		);
	}
}

export default AboutPage;
