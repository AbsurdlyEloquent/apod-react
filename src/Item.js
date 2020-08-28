import React, { Component } from 'react'
import './Item.css'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state ={
      src: props.src,
      index: props.index,
      hidden: "hidden"
    }
  }
  componentDidMount() {
    let that = this
    setTimeout(()=>{
      that.show()
    }, 250*that.state.index)
  }
  show() {
    this.setState({hidden: ""})
  }
  render = () => {
    return (
      <div id={this.state.hidden} style={{background: `url('${this.state.src}')`}} className='box'></div>
    )
  }
}

export default Item
