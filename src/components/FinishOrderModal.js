import React from "react";
import { Button, Form, Icon, Input, Modal, TextArea } from "semantic-ui-react";
import { Subscribe } from "unstated";
import OrderContainer from "../containers/OrderContainer";

class FinishOrderModal extends React.Component {
  state = { open: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Subscribe to={[OrderContainer]}>
        {(orderContainer) => (
          <Modal
            className="my-modal"
            size="mini"
            open={this.state.modalOpen}
            onClose={this.handleClose}
            trigger={
              <Button color="orange" onClick={this.handleOpen}>
                <Icon name="box" /> Fechar sacola
              </Button>
            }
          >
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label>Entrega para:</label>
                    <Input
                      placeholder="insira seu nome"
                      value={orderContainer.state.orderOwner}
                      onChange={(event, { value }) =>
                        orderContainer.setOrderOwner(value)
                      }
                    />
                    <br />
                    <br />
                    <TextArea
                      placeholder="Alguma observação ou detalhe do pedido aqui.."
                      onChange={(event, { value }) =>
                        orderContainer.setOrderDetails(value)
                      }
                    />
                  </Form.Field>
                </Form>
              </Modal.Description>
              <br />
              <Modal.Actions>
                <Button negative onClick={this.handleClose}>
                  Cancelar
                </Button>
                <Button
                  color="green"
                  disabled={
                    !(
                      orderContainer.state.bag.length != 0 &&
                      orderContainer.state.orderOwner &&
                      orderContainer.isEnderecoPreenchido()
                    )
                  }
                  onClick={() => {
                    window.open(orderContainer.getOrderLink(), "_blank");
                    orderContainer.clearOrder();
                    this.handleClose();
                  }}
                >
                  <Icon name="whatsapp" /> Finalizar Pedido
                </Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
        )}
      </Subscribe>
    );
  }
}

export default FinishOrderModal;
