import React from "react";
import { Checkbox, Icon, Input, Header, Form } from "semantic-ui-react";
import OrderContainer from "../containers/OrderContainer";
import { Subscribe } from "unstated";

class AddressLoader extends React.Component {
  state = {
    preencherPeloCep: false,
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
  };

  async findAddressByCep(cep, state) {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    let endereco = await response.json();

    state.setCep(endereco.cep);
    state.setLogradouro(endereco.logradouro);
    state.setBairro(endereco.bairro);
    state.setCidade(endereco.localidade);
  }

  onChangeCheckbox = (evt, data) => {
    this.setState({ preencherPeloCep: data.checked });
  };

  render() {
    return (
      <Subscribe to={[OrderContainer]}>
        {(orderContainer) => (
          <div>
            <Header as="h3">
              <Icon name="truck" color="brown" /> Endereço de Entrega
            </Header>
            <Form>
              <Form.Field>
                <Form.Field>
                  <Checkbox
                    label="Preencher automaticamente pelo CEP"
                    onClick={(evt, data) => this.onChangeCheckbox(evt, data)}
                  />
                </Form.Field>
                <label>CEP</label>
                <Input
                  icon={
                    <Icon
                      name="search"
                      inverted
                      circular
                      link
                      onClick={(e) =>
                        this.findAddressByCep(
                          orderContainer.state.cep,
                          orderContainer
                        )
                      }
                    />
                  }
                  placeholder="Pesquise pelo CEP..."
                  onChange={(e) => orderContainer.setCep(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter")
                      this.findAddressByCep(e.target.value, orderContainer);
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Logradouro</label>
                <input
                  value={orderContainer.state.logradouro}
                  disabled={this.state.preencherPeloCep}
                  onChange={(e) => orderContainer.setLogradouro(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Cidade</label>
                <input
                  value={orderContainer.state.cidade}
                  disabled={this.state.preencherPeloCep}
                  onChange={(e) => orderContainer.setCidade(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Bairro</label>
                <input
                  value={orderContainer.state.bairro}
                  disabled={this.state.preencherPeloCep}
                  onChange={(e) => orderContainer.setBairro(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Número</label>
                <input
                  value={orderContainer.state.numero}
                  onChange={(e) => orderContainer.setNumero(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Complemento</label>
                <input
                  value={orderContainer.state.complemento}
                  onChange={(e) =>
                    orderContainer.setComplemento(e.target.value)
                  }
                />
              </Form.Field>
            </Form>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default AddressLoader;
