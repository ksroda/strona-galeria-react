import React from 'react'
import PropTypes from 'prop-types'

import GalleryItem from './GalleryItem/GalleryItem'
import style from './Gallery.scss'

class Gallery extends React.Component {

  render () {
    return (
      <div className={style.gallery}>
        { this.props.data.map(item =>
          <GalleryItem key={item.id} data={item} type={this.props.type} />)
        }
      </div>
    )
  }
}

Gallery.defaultProps = {
  data: [],
  type: ''
}

Gallery.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string
}

// export default translate('Gallery')(Gallery)
export default Gallery

/*
  images convention:
   - folder with a name of id
   - including photo named 'small' - to minature
   - including photo named 'main' - main one
   - others.
 */

