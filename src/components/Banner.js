import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Header, Image} from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import OrderContainer from '../containers/OrderContainer'

class Banner extends React.Component {
	state = {
		message: 'ovni',
		address: 'https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7'
	}

	render() {
		const textStyle = {color: 'white', textShadow: '2px 2px #636363'}

		return (
			<Subscribe to={[OrderContainer]}>
				{orderContainer => (
					<div>
						<Carousel className='test'>
							<Carousel.Item>
								<Image
									src="img/banner.jpeg"
									alt="Delivery do Fran6"
								/>
								<Carousel.Caption>
									<Header as='h1' icon textAlign='center' style={textStyle}>
										<Header.Content>{orderContainer.state.companyTitle}</Header.Content>
									</Header>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
						<br/>
					</div>
				)}
			</Subscribe>
		)
	}
}

export default Banner