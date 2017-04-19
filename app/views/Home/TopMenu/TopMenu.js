import React from 'react'
import { browserHistory } from 'react-router'


// import { connect } from 'react-redux'
// import { setSearchResults, changeLanguage } from '../../../actions'
// import translate from '../../../translate'

import style from './TopMenu.scss'

class TopMenu extends React.Component {

  constructor (props) {
    super(props)


    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
  }

  handleMenuItemClick (item) {
    browserHistory.push(item)
  }

  render () {
    return (
      <div className={style.topMenu}>
        <div className={style.logo}>
          <img src="/img/logo.PNG" onClick={() => this.handleMenuItemClick('home')} />
          <br/>
          <div>Artistic house</div>
        </div>

        <div className={style.menuItems}>
          <ul>
            <li onClick={() => this.handleMenuItemClick('/sculptures')}>Sculptures</li>
            <li onClick={() => this.handleMenuItemClick('/sculptures')}>Paintings</li>
          </ul>

          <ul>
            <li onClick={() => this.handleMenuItemClick('/sculptures')}>Posters</li>
            <li onClick={() => this.handleMenuItemClick('/sculptures')}>Mosaics</li>
          </ul>
        </div>

        <div className={style.sideMenu}>
          <ul>
            <li onClick={() => this.handleMenuItemClick('/home')}>About</li>
            <li onClick={() => this.handleMenuItemClick('/contact')}>Contact us</li>
          </ul>
        </div>

        <div className={style.lang}>
          lang
        </div>
      </div>
    )
  }
}

// const TopMenuConnect = connect()(TopMenu)
// export default translate('TopMenu')(TopMenuConnect)

export default TopMenu