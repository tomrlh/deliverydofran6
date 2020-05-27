import React, { Component } from 'react';
import {Header, Icon} from 'semantic-ui-react'
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '10px' }}>
				<Header as='h3'><Icon name='map marker' color='red'/> Endereço</Header>
				<Map
					google={this.props.google}
					center={{lat: 0.101772, lng: -51.2369471}}
					height='300px'
					zoom={15}
				/>
				<br/><br/>
			</div>
		);
	}
}

export default Home;
