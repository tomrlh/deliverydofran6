import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import {Subscribe} from 'unstated'
import OrderContainer from '../containers/OrderContainer'
import ProductsContainer from '../containers/ProductsContainer'
import {toast, ToastContainer} from 'react-toastify'
import NumberFormat from 'react-number-format'

class ProductCard extends React.Component {
	state = {
		message: 'ovni',
		address: 'https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7'
	}

	render() {
		return (
			<Subscribe to={[OrderContainer]}>
				{orderContainer => (
					<Card style={{width: '255px'}}>
						<Image src={this.props.product.image} wrapped ui={false} />
						<Card.Content>
							<Card.Header>{this.props.product.name}</Card.Header>
							<Card.Meta>
								<NumberFormat 
									value={this.props.product.price}
									displayType={'text'} 
									prefix={'R$ '}
									thousandSeparator={'.'} 
									decimalSeparator={','}
									fixedDecimalScale={true}
									decimalScale={2}
									renderText={value => <span>{value}</span>}
								/>
							</Card.Meta>
							<Card.Description>
							{this.props.product.description}
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button 
								content={`adicionar ${this.props.product.name}`} basic
								color={this.props.product.color} icon='shopping cart' size='tiny'
								onClick={() => {
									orderContainer.addToBag({
										id: orderContainer.state.bag.length + this.props.product.name,
										name: this.props.product.name,
										price: this.props.product.price
									})
									this.props.showAlert(this.props.product.name)

									//window.open(`https://wa.me/5541998943368?text=${this.state.message}`, "_blank")
								}}
							/>
						</Card.Content>
					</Card>
				)}
			</Subscribe>
		)
	}
}

ProductCard.propTypes = {
  product: {}
}

export default ProductCard