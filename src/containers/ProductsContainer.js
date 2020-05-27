import {Container} from 'unstated'

class ProductsContainer extends Container {
  state = {
    mostrarDetalhesModal: false,
    products: [
      {
        id: 'asteroide',
        name: 'Asteroide',
        description: '2 X-Larica, 500g batata, cheddar, 1 coca litro',
        price: 25.00,
        image: 'img/products/asteroide.jpeg',
        link: '#',
        color: 'red'
      },
      {
        id: 'cometa',
        name: 'Cometa',
        description: '4 X-Larica, 500g batata, cheddar, 1 coca litro',
        price: 35.00,
        image: 'img/products/cometa.jpeg',
        link: '#',
        color: 'green'
      },
      {
        id: 'espacial',
        name: 'Espacial',
        description: '2 Super X-Larica, 500g batata, bacon, cheddar, calabresa acebolada, 1 coca litro',
        price: 40.00,
        image: 'img/products/espacial.jpeg',
        link: '#',
        color: 'violet'
      },
      {
        id: 'ovni',
        name: 'OVNI',
        description: 'Batata frita, anéis de Saturno (cebola empanada), cheddar, cream cheese, bacon, calabresa acebolada, 1 coca litro',
        price: 35.00,
        image: 'img/products/ovni.jpeg',
        link: '#',
        color: 'orange'
      },
    ],
    addressLink: ''
  }

  setAddressLink(addressLink) {this.setState({addressLink})}
}

export default ProductsContainer