import React from 'react'

import style from './Title.scss'

const Title = props => (
  <div className={style.name}>{ props.name }</div>
)

export default Title
