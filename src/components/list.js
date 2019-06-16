import React from "react"

class List extends React.Component {
    render() {
     
      return (
        <div className="shopping-list">
          <h1>Список покупок для {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
     }
    
  }
  
  export default List