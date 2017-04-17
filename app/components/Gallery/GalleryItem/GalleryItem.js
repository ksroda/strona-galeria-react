import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

import style from './GalleryItem.scss'

class GalleryItem extends React.Component {

  constructor (props) {
    super(props)
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  handleMenuItemClick (item) {
    browserHistory.push(item)
  }

  render () {
    const directory = `img/${this.props.type}_img/${this.props.data.id}/`

    return (
      <div className={style.item}>
        <img
          src={`${directory}${this.props.data.img.small}`}
          onClick={() => this.handleMenuItemClick(`/${this.props.type}/${this.props.data.id}`)}
        />
        <div className={style.descr}>
          <div className={style.title}>{ this.props.data.title }</div>
        </div>
      </div>
    )
  }
}

GalleryItem.defaultProps = {
  data: {},
  type: ''
}

GalleryItem.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string
}

//export default translate('GalleryItem')(GalleryItem)
export default GalleryItem
