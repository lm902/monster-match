import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

interface Props {
  img: ImageSourcePropType
}

export default class Monster extends React.PureComponent {
  props: Props

  render () {
    return <Image source={this.props.img} style={{height: 150, width: 450}} />
  }
}
