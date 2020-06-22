import React from "react";
import { Button, Header, Grid, Icon, Image, Table } from "semantic-ui-react";
import Toast from "./Toast";
import { toast } from "react-toastify";
import { Subscribe } from "unstated";
import OrderContainer from "../containers/OrderContainer";
import FinishOrderModal from "./FinishOrderModal";
import NumberFormat from "react-number-format";

class Bag extends React.Component {
  state = {
    message: "ovni",
    address: "https://goo.gl/maps/KQ5dSCDLqy2Bv8pU7",
  };

  sumAdditionalsTotal(additionals) {
    let total = 0;
    additionals.forEach((add) => (total += add.qtt + add.price));
    return total;
  }

  render() {
    return (
      <Subscribe to={[OrderContainer]}>
        {(orderContainer) => (
          <div>
            <Header as="h3">
              <Icon name="shopping bag" color="red" /> Sacola
            </Header>
            <Table striped textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pedido</Table.HeaderCell>
                  <Table.HeaderCell>Preço</Table.HeaderCell>
                  <Table.HeaderCell>Adicionais</Table.HeaderCell>
                  <Table.HeaderCell>Remover</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {orderContainer.state.bag.map((item) => (
                  <Table.Row>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>
                      <NumberFormat
                        value={item.price}
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
                      <NumberFormat
                        value={this.sumAdditionalsTotal(item.additionals)}
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
                      <Button
                        icon="close"
                        onClick={() => {
                          orderContainer.removeFromBag(item);
                          toast.info(`${item.name} removido 🍔`, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        }}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
                <Table.Row>
                  <Table.Cell>Total:</Table.Cell>
                  <Table.Cell>
                    <b>
                      <NumberFormat
                        value={orderContainer.state.total}
                        displayType={"text"}
                        prefix={"R$ "}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        fixedDecimalScale={true}
                        decimalScale={2}
                        renderText={(value) => <span>{value}</span>}
                      />
                    </b>
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <FinishOrderModal />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <Toast />
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Bag;
