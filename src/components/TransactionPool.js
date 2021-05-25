/** @format */

import React, { Component } from "react";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import history from "../history";

const POOL_INTERVAL_MS = 10000;

class TransactionPool extends Component {
  state = { transactionPoolMap: {} };

  fetchTransactionPoolMap = () => {
    fetch(`${process.env.BLOCKCHAIN_URL}/api/transaction-pool-map`)
      .then((res) => res.json())
      .then((json) => this.setState({ transactionPoolMap: json }));
  };

  fetchMineTransactions = () => {
    fetch(`${process.env.BLOCKCHAIN_URL}/api/mine-transactions`).then((res) => {
      if (res.status === 200) {
        alert("success");
        history.push("./blocks");
      } else {
        alert("The mine-transactions block request did not complete");
      }
    });
  };

  componentDidMount() {
    this.fetchTransactionPoolMap();

    this.fetchTransactionPoolMapInterval = setInterval(
      () => this.fetchTransactionPoolMap(),
      POOL_INTERVAL_MS
    );
  }

  componentWillUnmount() {
    clearInterval(this.fetchTransactionPoolMapInterval);
  }

  render() {
    return (
      <div className='TransactionPool'>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <h3>Transaction Pool</h3>
        {Object.values(this.state.transactionPoolMap).map((transaction) => {
          return (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          );
        })}
        <hr />
        <Button variant='warning' onClick={this.fetchMineTransactions}>
          Mine the Transactions
        </Button>
      </div>
    );
  }
}

export default TransactionPool;
