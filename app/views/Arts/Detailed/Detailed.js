import React from 'react'
import PropTypes from 'prop-types'

//import translate from '../../translate'

import Title from '../../../components/Title/Title'

const Detailed = (props) => {

  const path = props.location.pathname.replace(/\/\w*/g,'')
  let item = ''

  if (path === 'sculptures') {
    const data = require('../../../data/sculptures_data')
    item = data.default.find(obj => obj.id === props.params.id)
  }
  const directory = `img/${path}_img/${item.id}/${item.img.main}`

  return (
    <div>
      <Title name={item.title} />
      <img src={directory} />
      Author: {item.author}
    </div>
  )
}

Detailed.defaultProps = {
  params: {}
}

Detailed.propTypes = {
  params: PropTypes.object
}

//export default translate('Detailed')(Detailed)
export default Detailed
