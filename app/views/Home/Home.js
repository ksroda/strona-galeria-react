import React, {PropTypes} from 'react'
import { connect } from 'react-redux'


import TopMenu from './TopMenu/TopMenu'
import Footer from './Footer/Footer'
import style from './Home.scss'

class Home extends React.Component {
  // getChildContext () {
  //   return {
  //     currentLanguage: this.props.currentLanguage
  //   }
  // }
  render () {
    return (
      <div className={style.home}>
       <TopMenu />
        <div className={style.body}>
            {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
// Home.propTypes = {
//   currentLanguage: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired
// }
//
// function mapStateToProps (state) {
//   return {
//     currentLanguage: state.language
//   }
// }
// //
// Home.childContextTypes = {
//   currentLanguage: PropTypes.string.isRequired
// }

//export default connect(mapStateToProps)(Home)

export default Home
