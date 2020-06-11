import {Container} from 'unstated'

class OrderContainer extends Container {
  state = {
    orderDetails: '',
    addressPlaceholder: 'Adicione o endereço de entrega..',
    addressLink: '',
    addressDescription: '',
    bag: [],
    total: 0,
    companyTitle: 'Delivery do Fran6',
    companyDescription: 'Rua Janary Nunes 815, Infraero 1, Macapá-AP',
    companyContact: '559692082016',
    orderOwner: '',
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
  clearOrder() {this.setState({
    bag: [], 
    orderOwner: '',
    orderDetails: '',
    addressPlaceholder: 'Adicione o endereço de entrega..'
  })}

  setOrderDetails(orderDetails) {this.setState({orderDetails})}
  setOrderOwner(orderOwner) {this.setState({orderOwner})}
  setAddressPlaceholder(addressPlaceholder) {this.setState({addressPlaceholder})}
  setAddressLink(addressLink) {this.setState({addressLink})}

  getOrderLink() {
    let itens = ''
    this.state.bag.forEach(item => itens += item.name + ', ')
    return 'https://wa.me/' + 
      this.state.companyContact + 
      `?text=Pedido para *${this.state.orderOwner}*: ` + itens + '%0a' +
      `*Endereço*: ${this.state.addressPlaceholder}%0a` +
      `*Pedido as*: ${new Date(new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"}))}%0a` +
      `*OBS*: ${this.state.orderDetails}%0a` +
      this.state.addressLink
  }
}

export default OrderContainer