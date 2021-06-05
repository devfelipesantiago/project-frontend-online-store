import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import previous from '../images/previous.png';

const states = ['Rio de Janeiro',
  'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

const InitialState = {
  fullname: '',
  email: '',
  cep: '',
  phone: '',
  address: '',
  complement: '',
  number: '',
  city: '',
  countryState: '',
  Boleto: '',
  Visa: '',
  Master: '',
  Elo: '',
};

class PayForms extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target);

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  inputs(name, type, data, holder) {
    return (
      <label htmlFor={ name }>
        <input
          type={ type }
          name={ name }
          data-testid={ data }
          placeholder={ holder }
          onChange={ this.handleChange.bind(this) }
          required
        />
      </label>
    );
  }

  inputRadio(name, type) {
    return (
      <label htmlFor={ name }>
        { name }
        <input
          type={ type }
          name={ name }
          value={ name }
          onChange={ this.handleChange.bind(this) }
          required
        />
      </label>
    );
  }

  render() {
    return (
      <>
        <Link to="/">
          <img src={ previous } alt="Imagem de uma seta" className="previous-shop" />
        </Link>
        <form>
          <fieldset>
            <legend>Informações do Comprador</legend>
            { this.inputs('Name', 'text', 'checkout-fullname', 'Nome Completo') }
            { this.inputs('email', 'email', 'checkout-email', 'Email@.com') }
            { this.inputs('cep', 'text', 'checkout-cep', 'CEP') }
            { this.inputs('phone', 'text', 'checkout-phone', 'Telefone') }
            { this.inputs('address', 'text', 'checkout-address', 'Endereço') }
            { this.inputs('complement', 'text', 'checkout-complement', 'Complemento') }
            { this.inputs('number', 'text', 'checkout-number', 'Número') }
            { this.inputs('city', 'text', 'checkout-city', 'Cidade') }
            <select
              name="countryState"
              required
              onChange={ this.handleChange.bind(this) }
              defaultValue=""
            >
              <option value="">Estado</option>
              { states.map((value, key) => (<option key={ key }>{ value }</option>)) }
            </select>
          </fieldset>
          <fieldset>
            <legend>Método de Pagamento</legend>
            <div>
              { this.inputRadio('Boleto', 'radio') }
              <span>Cartão de Crédito</span>
              { this.inputRadio('Visa', 'radio') }
              { this.inputRadio('Master', 'radio') }
              { this.inputRadio('Elo', 'radio') }
            </div>
          </fieldset>
        </form>
        <input
          style={ { color: 'black' } }
          type="button"
          value="Comprar"
          data-testid="checkout-products"
          onClick={ this.handleSubmit.bind(this) }
        />
      </>
    );
  }
}

export default PayForms;
