import React from 'react';

class ShoppingList extends React.Component {
  render() {
    const products = [
      { title: 'Cabbage', isFruit: false, id: 1 },
      { title: 'Garlic', isFruit: false, id: 2 },
      { title: 'Apple', isFruit: true, id: 3 },
      { title: 'Carrot', isFruit: false, id: 4},
      { title: 'Banana', isFruit: true, id: 5 },
    ];

    const listItems = products.map((product) => (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen',
        }}
      >
        {product.title}
      </li>
    ));

    return (
      <div className='full-width'>
        <div className='container'>
          <h1>Shopping List</h1>
          <div className='flex-center'>
            <ul>{listItems}</ul>
            </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
