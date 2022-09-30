import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    payment: 'cash',
    tag: 'food',
  };

  async componentDidMount() {
    // const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
    // let data = [];
    // try {
    //   data = await fetch(END_POINT);
    //   delete data.USDT;
    // } catch (error) {
    //   data = ['failed request'];
    // }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { value, description, payment, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor($):
          {' '}
          <input
            type="text"
            data-testid="value-input"
            id="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <textarea
            data-testid="description-input"
            id="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda:
          {' '}
          <select
            name="currency"
            // value={ currency }
            data-testid="currency-input"
            id="currency-input"
            // onChange={ this.handleChange }
          >
            { currencies.map((e) => (<option key="" value="cash">{e}</option>))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          {' '}
          <select
            name="payment"
            value={ payment }
            data-testid="method-input"
            id="method-input"
            onChange={ this.handleChange }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tipo de gasto:
          {' '}
          <select
            name="tag"
            value={ tag }
            data-testid="tag-input"
            id="tag-input"
            onChange={ this.handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
