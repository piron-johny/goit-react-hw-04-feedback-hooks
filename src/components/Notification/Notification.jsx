import { Paragraph } from "components/Statistics/Statistics.styles"
import PropeTypes from 'prop-types'

const Notification = ({message}) => {
  return (
    <Paragraph fz='22px' fw='500'>{message}</Paragraph>
  )
}

Notification.propeTypes = {
  message: PropeTypes.string.isRequired
}

export default Notification