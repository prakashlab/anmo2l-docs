/** @jsx jsx */
import { jsx } from 'theme-ui'

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </Tag>
  )
}

const tag = (Tag) => (props) => (
  <Tag {...props}>
    {props.children}
  </Tag>
)

const components = {
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  figure: tag('figure'),
  sup: tag('sup'),
}

export default components
