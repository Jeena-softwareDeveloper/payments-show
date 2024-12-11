
import React from 'react';
import './trans.scss'

const transactions = [
  { id: 1, description: 'Grocery', amount: '$120.50' },
  { id: 2, description: 'Rent', amount: '$950.00' },
  { id: 3, description: 'Electricity', amount: '$75.30' },

];

const TransactionList = () => {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
