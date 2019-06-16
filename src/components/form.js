import React from "react"
import Content from './content'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      urlApi: "https://api.github.com/search/repositories?",
      urlQuery: 'q=es6&per_page=7',
      data: []
    }

  }

  getData() {
    return fetch(this.getUrl())
      .then(response => response.json())
  }

  getUrl() {
    return `${this.state.urlApi}q=${this.state.inputValue}&per_page=7`
  }

  render() {
    return (
      <div className="section">
        <input onChange={e => this.setState({ inputValue: e.target.value })} />
        <button onClick={async _ => {
          let response = await this.getData()
          this.setState({ data: response.items })
        }
        }>Search</button>
        <Content dataBlock={this.state.data} />
      </div>
    );
  }


}

