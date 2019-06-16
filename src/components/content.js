import React from 'react'
import Block from './block'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { dataBlock } = this.props
        return (
            <div className="container">
                {dataBlock.map((item,index)=>(
                <Block itemData={item} key={index}/>
        ))}
            </div>
        )
    }
}