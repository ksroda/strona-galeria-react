import React from 'react'
import PropTypes from 'prop-types'

// import translate from '../../translate'

import Title from '../../../components/Title/Title'
import ImageZoom from '../../../components/ImageZoom/ImageZoom'
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

    const allImgs = []
    allImgs.push(item.img.main)
    allImgs.push(...otherImgs)

    this.state = {
      path,
      item,
      directory: `/img/${path}_img/${item.id}/`,
      img: `${item.img.main}`,
      otherImgs,
      showZoom: false,
      zoomedImg: `${item.img.main}`,
      next: true,
      prev: true,
      allImgs
    }

    this.handleImgChange = this.handleImgChange.bind(this)
    this.handleImgZoom = this.handleImgZoom.bind(this)
    this.handleImgNext = this.handleImgNext.bind(this)
  }

  handleImgChange (img) {
    const otherImgs = this.state.otherImgs
    const imgIndex = otherImgs.indexOf(img)
    otherImgs.splice(imgIndex, 1)
    otherImgs.push(this.state.img)

    this.setState({
      img,
      otherImgs,
      zoomedImg: img
    })
  }

  handleImgZoom () {
    if (this.state.showZoom === false) { // to be opened
      const zoomedIndex = this.state.allImgs.indexOf(this.state.zoomedImg)
      if (zoomedIndex === 0) {
        this.setState({
          showZoom: !this.state.showZoom,
          prev: false,
          next: true
        })
      } else if (zoomedIndex === this.state.allImgs.length - 1) {
        this.setState({
          showZoom: !this.state.showZoom,
          prev: true,
          next: false
        })
      } else {
        this.setState({
          showZoom: !this.state.showZoom,
          prev: true,
          next: true
        })
      }
    } else { // to be closed
      this.setState({
        showZoom: !this.state.showZoom
      })
    }
  }

  handleImgNext (move) {

    const otherImgs = this.state.allImgs
    const imgIndex = otherImgs.indexOf(this.state.zoomedImg)

    if (imgIndex === 1 && move === 'prev') {
      this.setState({
        prev: false
      })

      if (otherImgs.length === 2) {
        this.setState({
          next: true
        })
      }
    } else if (imgIndex === otherImgs.length - 2 && move === 'next') {
      this.setState({
        next: false
      })

      if (otherImgs.length === 2) {
        this.setState({
          prev: true
        })
      }
    } else {
      this.setState({
        prev: true,
        next: true
      })
    }

    if ((move === 'next' && imgIndex !== otherImgs.length - 1)) {
      this.setState({
        zoomedImg: otherImgs[imgIndex + 1]
      })
    } else if (move === 'prev' && imgIndex >= 1) {
      this.setState({
        zoomedImg: otherImgs[imgIndex - 1]
      })
    }
  }

  render () {
    return (
      <div>
        <Title name={this.state.item.title} />
        <div className={style.detailed}>
          <div className={style.imgBack} onClick={() => this.handleImgZoom()}>
            <img
              src={`${this.state.directory}${this.state.img}`}

            />
          </div>

          <div className={style.descr}>
            Author: {this.state.item.author}
          </div>
        </div>
        <div className={style.otherImg}>
          {
            this.state.otherImgs.map( image =>
              <div className={style.smallImgBack} key={image}>
                <img
                  src={`${this.state.directory}${image}`}
                  onClick={() => this.handleImgChange(image)}
                />
              </div>
            )
          }
        </div>
        {
          this.state.showZoom
            ? <ImageZoom image={`${this.state.directory}${this.state.zoomedImg}`} />
            : null
        }
        {
          this.state.showZoom
            ? <div>
                <img
                  src="/img/icons/ic_close_white_36dp.png"
                  className={style.closeIcon}
                  onClick={() => this.handleImgZoom()}
                />
              {
                this.state.next
                  ? <img
                      src="/img/icons/ic_chevron_right_white_36dp.png"
                      className={style.nextIcon}
                      onClick={() => this.handleImgNext('next')}
                  />
                  : null
              }
              {
                this.state.prev ?
                  <img src="/img/icons/ic_chevron_left_white_36dp.png"
                       className={style.prevIcon}
                       onClick={() => this.handleImgNext('prev')}
                  />
                  : null
              }
              </div>
            : null
        }
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
