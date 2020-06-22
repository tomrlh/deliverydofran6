import { Container } from "unstated";

class ProductsContainer extends Container {
  state = {
    mostrarDetalhesModal: false,
    products: [
      {
        id: "asteroide",
        name: "Asteroide",
        description: "2 X-Larica, 500g batata, cheddar, 1 coca litro",
        price: 25.0,
        image: "img/products/asteroide.jpeg",
        link: "#",
        color: "red",
      },
      {
        id: "cometa",
        name: "Cometa",
        description: "4 X-Larica, 500g batata, cheddar, 1 coca litro",
        price: 35.0,
        image: "img/products/cometa.jpeg",
        link: "#",
        color: "green",
      },
      {
        id: "espacial",
        name: "Espacial",
        description:
          "2 Super X-Larica, 500g batata, bacon, cheddar, calabresa acebolada, 1 coca litro",
        price: 40.0,
        image: "img/products/espacial.jpeg",
        link: "#",
        color: "violet",
      },
      {
        id: "ovni",
        name: "OVNI",
        description:
          "Batata frita, anéis de Saturno (cebola empanada), cheddar, cream cheese, bacon, calabresa acebolada, 1 coca litro",
        price: 35.0,
        image: "img/products/ovni.jpeg",
        link: "#",
        color: "orange",
      },
    ],
    additionals: [
      {
        id: "calabresa",
        name: "calabresa",
        price: 2.0,
        qtt: 0,
      },
      {
        id: "bacon",
        name: "bacon",
        price: 3.0,
        qtt: 0,
      },
      {
        id: "carne",
        name: "carne",
        price: 2.0,
        qtt: 0,
      },
      {
        id: "ovo",
        name: "ovo",
        price: 1.0,
        qtt: 0,
      },
      {
        id: "cheddar",
        name: "cheddar",
        price: 2.0,
        qtt: 0,
      },
      {
        id: "cheese",
        name: "cream cheese",
        price: 3.0,
        qtt: 0,
      },
      {
        id: "catupiry",
        name: "catupiry",
        price: 2.0,
        qtt: 0,
      },
      {
        id: "mussarela",
        name: "mussarela",
        price: 2.0,
        qtt: 0,
      },
      {
        id: "presunto",
        name: "presunto",
        price: 1.0,
        qtt: 0,
      },
      {
        id: "cebola",
        name: "cebola",
        price: 1.0,
        qtt: 0,
      },
      {
        id: "frango",
        name: "filé de frango",
        price: 4.0,
        qtt: 0,
      },
      {
        id: "carne",
        name: "filé de carne",
        price: 4.0,
        qtt: 0,
      },
    ],
    addressLink: "",
  };

  setAddressLink(addressLink) {
    this.setState({ addressLink });
  }
}

export default ProductsContainer;
