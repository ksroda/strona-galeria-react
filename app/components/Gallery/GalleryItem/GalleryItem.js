import React from 'react'
import PropTypes from 'prop-types'

import style from './GalleryItem.scss'

const GalleryItem = (props) => {
  const directory = `img/${props.type}_img/${props.data.id}/`

  return (
    <div className={style.item}>
      <img src={`${directory}${props.data.img.small}`} />
      <div className={style.descr}>
        <div className={style.title}>{ props.data.title }</div>
      </div>
    </div>
  )
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
