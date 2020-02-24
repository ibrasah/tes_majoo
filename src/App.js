import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoad: false,
    }
  }

  componentDidMount() {
    fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
      .then(res => res.json(1))
      .then(json => {
        this.setState({
            isLoad: true,
            items: json,
        })
      });  
  }

  render() {

    var { isLoad, items } = this.state;

    if (!isLoad) {
      return <div>Loading...</div>
    }
    else {
    return (
    <div className="App">
       <ul>
         {items.map(item => (
           <li key={item.id}>
             Title : {item.title}
           </li>
         ))}
       </ul>
    </div>
    )}
  };

}

export default App;
