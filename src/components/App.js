/** @format */

// import logo from "./logo.svg";
// import "./App.css";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/snailWalk1.png";

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${process.env.BLOCKCHAIN_URL}/api/wallet-info`)
      .then((res) => res.json())
      .then((json) => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;
    return (
      <div className='App'>
        <img className='logo' src={logo} alt='Playcrypto Coin'></img>
        <div>Welcome to the Blockchain...</div>
        <br />
        <div>
          <Link to='/blocks'>Blocks</Link>
        </div>
        <div>
          <Link to='/conduct-transaction'>Conduct a Transaction</Link>
        </div>
        <div>
          <Link to='/transaction-pool'>Transaction Pool</Link>
        </div>
        <br />
        <div className='WalletInfo'>
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

export default App;
