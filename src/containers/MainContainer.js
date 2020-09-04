import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const stocksUrl = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    currentSort: '',
    currentFilter: 'all'
  }

  componentDidMount(){
    fetch(stocksUrl)
      .then(response => response.json())
      .then(stocks => {
        this.setState({stocks: stocks})
      })
  }

  buyStock = (stock) => {
    if (!this.state.portfolio.includes(stock)){
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    }
  }
    
  sellStock = (stock) => {
    const newPortfolio = this.state.portfolio.filter(stock => {
      return stock.id !== stock.id
    })
    this.setState({
      portfolio: newPortfolio
    })
  }

  displayedStocks = () => {
    return this.state.stocks.sort((a, b) => {
      if (!this.state.currentSort) {
        return 0
      } else {
        return a[this.state.currentSort] >= b[this.state.currentSort] ? 1 : -1
      }
    }).filter(stock => {
      if (this.state.currentFilter === 'all'){
        return true
      } else {
        return stock.type === this.state.currentFilter
      }
    })
  }

  updateCurrentFilter = (event) => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  updateCurrentSort = (sortCriterion) => {
    this.setState({
      currentSort: sortCriterion
    })
  }



  render() {
    const displayedStocks = this.displayedStocks()
    return (
      <div>
        <SearchBar
          currentSort={this.state.currentSort}
          updateCurrentSort={this.updateCurrentSort}
          updateCurrentFilter={this.updateCurrentFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                stocks={displayedStocks}
                handleClick={this.buyStock}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                portfolio={this.state.portfolio}
                handleClick={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
