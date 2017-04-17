import React from 'react'

const Components = {

}

export default function translate (key) {
  return (Component) => {
    class TranslationComponent extends React.Component {
      render () {
        const obj = Components[key]
        const strings = Object.keys(obj).reduce((acc, string) => ({
          ...acc,
          [string]: obj[string][this.context.currentLanguage]
        }), {})
        return <Component {...this.props} {...this.state} strings={strings} />
      }
    }

    TranslationComponent.contextTypes = {
      currentLanguage: React.PropTypes.string
    }

    return TranslationComponent
  }
}
