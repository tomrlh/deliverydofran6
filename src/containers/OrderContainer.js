import {Container} from 'unstated'

class OrderContainer extends Container {
  state = {
    orderDetails: '',
    addressPlaceholder: 'Adicione o endereço de entrega..',
    addressLink: '',
    bag: [],
    total: 0,
    companyTitle: 'Delivery do Fran6',
    companyDescription: 'Rua Janary Nunes 815, Infraero 1, Macapá-AP',
    companyContact: '559692082016',
  }

  formatPrice(price) {
    return parseInt(price.replace(',', '.'), 10) 
  }

  addToBag(item) {
    this.setState(state => {
      const newBag = state.bag.concat(item)
      const newTotal = state.total += item.price
      return {
        bag: newBag,
        total: newTotal
      }
    })
  }
  removeFromBag(itemToRemove) {
    this.setState(state => {
      const newBag = state.bag.filter(item => item.id != itemToRemove.id)
      const newTotal = state.total -= itemToRemove.price
      return {
        bag: newBag,
        total: newTotal
      }
    })
  }
  clearBag() {this.setState({bag: []})}

  setOrderDetails(orderDetails) {this.setState({orderDetails})}
  setAddressPlaceholder(addressPlaceholder) {this.setState({addressPlaceholder})}
  setAddressLink(addressLink) {this.setState({addressLink})}

  getOrderLink() {
    let message = ''
    this.state.bag.forEach(item => message += item.name + ', ')
    console.log(this.state)
    return 'https://wa.me/' + 
      this.state.companyContact + 
      '?text=Pedido de entrega para o Fran6: ' + message + 'no endereço ' + this.state.addressLink
  }
}

export default OrderContainer