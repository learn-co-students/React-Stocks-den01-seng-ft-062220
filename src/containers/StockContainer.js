import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  showStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock stock={stock} handleClick={this.props.handleClick} />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.showStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
