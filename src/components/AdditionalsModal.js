import React from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Modal,
  Segment,
  Table,
  TextArea,
} from "semantic-ui-react";
import { Subscribe } from "unstated";
import ProductsContainer from "../containers/ProductsContainer";
import OrderContainer from "../containers/OrderContainer";
import NumberFormat from "react-number-format";

class AdditionalsModal extends React.Component {
  state = {
    open: false,
    qtt: 0,
    additionals: [],
  };

  addToAdditional(additional) {
    let newAddArr = this.state.additionals;

    if (
      newAddArr.length <= 0 ||
      !newAddArr.filter((add) => add.id === additional.id)[0]
    ) {
      additional.qtt += 1;
      newAddArr.push(additional);
    } else {
      newAddArr = this.state.additionals.map((add) => {
        if (add.id === additional.id) add.qtt += 1;
        add.total = add.price * add.qtt;
        return add;
      });
    }

    this.setState({ additionals: newAddArr });
  }

  subtractFromAdditional(id) {
    this.setState({
      additionals: this.state.additionals.map((add) => {
        if (add.id === id && add.qtt > 0) {
          add.qtt -= 1;
        }
        return add;
      }),
    });
  }

  showQuantity(id) {
    let add = this.state.additionals.filter((add) => add.id === id)[0];
    return add ? add.qtt : 0;
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Subscribe to={[ProductsContainer, OrderContainer]}>
        {(productContainer, orderContainer) => (
          <Modal
            className="my-modal"
            size="mini"
            open={this.state.modalOpen}
            onClose={this.handleClose}
            trigger={
              <Button
                basic
                color="green"
                icon="cart plus"
                size="tiny"
                onClick={this.handleOpen}
              />
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Header as="h4">Adicionais</Header>
                <Segment style={{ overflow: "auto", maxHeight: 200 }}>
                  <Table striped textAlign="center" size="small" basic="very">
                    <Table.Body>
                      {productContainer.state.additionals.map((additional) => (
                        <Table.Row>
                          <Table.Cell>{additional.name}</Table.Cell>
                          <Table.Cell>
                            <NumberFormat
                              value={additional.price}
                              displayType={"text"}
                              prefix={"R$ "}
                              thousandSeparator={"."}
                              decimalSeparator={","}
                              fixedDecimalScale={true}
                              decimalScale={2}
                              renderText={(value) => <span>{value}</span>}
                            />
                          </Table.Cell>
                          <Table.Cell>
                            <Button.Group>
                              <Button
                                color="green"
                                size="tiny"
                                onClick={() => {
                                  this.addToAdditional(additional);
                                }}
                              >
                                +
                              </Button>
                              <Button.Or
                                text={this.showQuantity(additional.id)}
                              />
                              <Button
                                color="red"
                                size="tiny"
                                onClick={() => {
                                  this.subtractFromAdditional(additional.id);
                                }}
                              >
                                -
                              </Button>
                            </Button.Group>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                    <br />
                  </Table>
                </Segment>

                <Modal.Actions>
                  <Button
                    content="adicionar"
                    color="green"
                    icon="cart plus"
                    size="tiny"
                    onClick={() => {
                      orderContainer.addToBag({
                        id:
                          orderContainer.state.bag.length +
                          this.props.item.name,
                        name: this.props.item.name,
                        price: this.props.item.price,
                        additionals: this.state.additionals,
                      });
                      this.handleClose();
                      console.log(this.state.additionals);
                      this.props.showAlert(this.props.item.name);
                    }}
                  />
                </Modal.Actions>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        )}
      </Subscribe>
    );
  }
}

export default AdditionalsModal;
