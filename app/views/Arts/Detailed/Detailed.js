import React from 'react'
import PropTypes from 'prop-types'

//import translate from '../../translate'

import Title from '../../../components/Title/Title'
import style from './Detailed.scss'

class Detailed extends React.Component {

  constructor (props) {
    super(props)

    let item = ''
    let data = ''
    const path = props.location.pathname.replace(/\/\w*$/g, '')

    if (path === '/sculptures') {
      data = require('../../../data/sculptures_data')
      item = data.default.find(obj => obj.id === props.params.id)
    }
    const otherImgs = item.img.other

    this.state = {
      path,
      item,
      directory: `/img/${path}_img/${item.id}/`,
      img: `${item.img.main}`,
      otherImgs
    }

    this.handleImgChange = this.handleImgChange.bind(this)
  }

  handleImgChange (img) {
    const otherImgs = this.state.otherImgs
    const imgIndex = otherImgs.indexOf(img)
    otherImgs.splice(imgIndex, 1)
    otherImgs.push(this.state.img)

    this.setState({
      img,
      otherImgs
    })
  }

  render () {
    return (
      <div>
        <Title name={this.state.item.title} />
        <div className={style.detailed}>
          <img src={`${this.state.directory}${this.state.img}`} />

          <div className={style.descr}>
            Author: {this.state.item.author}
          </div>
        </div>
        <div className={style.otherImg}>
          {
            this.state.otherImgs.map( image =>
              <img src={`${this.state.directory}${image}`} onClick={() => this.handleImgChange(image)}/> )
          }
        </div>
      </div>
    )
  }
}

Detailed.defaultProps = {
  params: {}
}

Detailed.propTypes = {
  params: PropTypes.object
}

//export default translate('Detailed')(Detailed)
export default Detailed

