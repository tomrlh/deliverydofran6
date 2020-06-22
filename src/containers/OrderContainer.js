import { Container } from "unstated";

class OrderContainer extends Container {
  state = {
    orderDetails: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    complemento: "",
    bag: [],
    total: 0,
    companyTitle: "Delivery do Fran6",
    companyDescription: "Rua Janary Nunes 815, Infraero 1, Macapá-AP",
    companyContact: "5541998943368",
    orderOwner: "",
  };

  formatPrice(price) {
    return parseInt(price.replace(",", "."), 10);
  }

  addToBag(item) {
    this.setState((state) => {
      const newBag = state.bag.concat(item);
      const newTotal = (state.total += item.price);
      return {
        bag: newBag,
        total: newTotal,
      };
    });
  }

  addAdditionalsToItem(additionals, id) {
    let itemToUpdate = this.state.bag.filter((item) => item.id == id);

    itemToUpdate.additionals = additionals;

    let items = this.state.bag.map((item) => {
      if ((item.id = id)) item = itemToUpdate;
      return item;
    });
  }
  removeFromBag(itemToRemove) {
    this.setState((state) => {
      const newBag = state.bag.filter((item) => item.id != itemToRemove.id);
      const newTotal = (state.total -= itemToRemove.price);
      return {
        bag: newBag,
        total: newTotal,
      };
    });
  }
  clearOrder() {
    this.setState({
      bag: [],
      orderOwner: "",
      orderDetails: "",
      addressPlaceholder: "Adicione o endereço de entrega..",
    });
  }

  setOrderDetails(orderDetails) {
    this.setState({ orderDetails });
  }
  setOrderOwner(orderOwner) {
    this.setState({ orderOwner });
  }
  setCep(cep) {
    this.setState({ cep });
  }
  setComplemento(complemento) {
    this.setState({ complemento });
  }
  setNumero(numero) {
    this.setState({ numero });
  }
  setLogradouro(logradouro) {
    this.setState({ logradouro });
  }
  setBairro(bairro) {
    this.setState({ bairro });
  }
  setCidade(cidade) {
    this.setState({ cidade });
  }
  isEnderecoPreenchido() {
    return (
      this.state.complemento &&
      this.state.numero &&
      this.state.logradouro &&
      this.state.bairro &&
      this.state.cidade
    );
  }
  formatAdditionals(additionals) {
    let textoFormatado = "";

    if (additionals) {
      textoFormatado = " com adicionais de: ";
      additionals.forEach((add) => {
        textoFormatado += add.name + ", ";
      });
    }
    return textoFormatado;
  }

  getTotalOrder() {
    let totalOrder = 0;
    this.state.bag.forEach((item) => {
      totalOrder += item.price;
      item.additionals.forEach((add) => {
        totalOrder += add.price * add.qtt;
      });
    });
    return totalOrder;
  }

  getOrderLink() {
    let itens = "";

    this.state.bag.forEach(
      (item) => (itens += item.name + this.formatAdditionals(item.additionals))
    );
    return (
      "https://wa.me/" +
      this.state.companyContact +
      `?text=Pedido para *${this.state.orderOwner}*: ` +
      itens +
      "%0a" +
      `*Endereço*%0a` +
      `*CEP*: ${this.state.cep}%0a` +
      `*Cidade*: ${this.state.cidade}%0a` +
      `*Logradouro*: ${this.state.logradouro}%0a` +
      `*Bairro*: ${this.state.bairro}%0a` +
      `*Número*: ${this.state.numero}%0a` +
      `*Complemento*: ${this.state.complemento}%0a` +
      `*Pedido as*: ${new Date(
        new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
      )}%0a` +
      `*Total*: R$ ${this.getTotalOrder()}%0a` +
      `*OBS*: ${this.state.orderDetails}%0a`
    );
  }
}

export default OrderContainer;
