import React from "react";
import "./App.css";
import { Card, Container, Divider, Header, Icon } from "semantic-ui-react";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import AddressLoader from "./components/AddressLoader";
import Bag from "./components/Bag";
import IntroMessage from "./components/IntroMessage";
import Toast from "./components/Toast";
import { Subscribe } from "unstated";
import ProductsContainer from "./containers/ProductsContainer";
import { toast, ToastContainer } from "react-toastify";

class App extends React.Component {
  orderAdded(name) {
    toast.success(`${name} adicionado 🍔`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  render() {
    return (
      <Subscribe to={[ProductsContainer]}>
        {(productsContainer) => (
          <div className="App">
            <Banner />
            <Container>
              <IntroMessage />
              <Header as="h3">
                <Icon name="food" color="orange" /> Adicione o(s) item(s)
                desejado(s)
              </Header>
              <Card.Group centered>
                {productsContainer.state.products.map((product, index) => (
                  <ProductCard
                    id={index}
                    product={product}
                    showAlert={this.orderAdded}
                  />
                ))}
              </Card.Group>
            </Container>
            <Divider />
            <AddressLoader />
            <Divider />
            <Bag />

            <Toast />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default App;
