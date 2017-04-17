import React from 'react'

import Title from '../../../components/Title/Title'
import Gallery from '../../../components/Gallery/Gallery'
import sculptures_data from '../../../data/sculptures_data'

const Sculptures = props => (

  <div>
    <Title name="Sculptures" />
    <Gallery data={sculptures_data} type="sculptures" />
  </div>
)

//export default translate('Sculptures')(Sculptures)
export default Sculptures