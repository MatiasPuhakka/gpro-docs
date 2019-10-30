import React from 'react'
import Heading from './heading'
import AnchorTag from './anchor'

export default {
  h1: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h1" fontSize={[5, 6]} />,
  h2: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h2" fontSize={[4]} />,
  h3: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h3" fontSize={3} />,
  h4: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h4" fontSize={2} />,
  h5: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h5" fontSize={1} />,
  h6: props => <Heading id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} is="h6" fontSize={0} />,
  a: props => <AnchorTag {...props} />
}
