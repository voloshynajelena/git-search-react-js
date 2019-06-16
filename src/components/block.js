import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {itemData} = this.props
        return (<>
            <h2><a href={itemData.html_url}>{itemData.name}</a></h2>
            <p>{itemData.description}</p>
            </>
            )
    }
}