import React from 'react'

import style from './ImageZoom.scss'

class ZoomImage extends React.Component {

  constructor (props) {
    super(props)

  }

  render() {
    return (
      <div className={style.zoom}> <img src={this.props.image} /></div>
    )
  }
}

export default ZoomImage
