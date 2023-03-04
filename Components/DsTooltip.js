import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@mui/material/Tooltip'
import DsTypography from './DsTypography'
import DsLink from './DsLink'

class DsTooltip extends PureComponent {
  static propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
    buttonGroup: PropTypes.element
  }

  static defaultProps = {}

  renderTitle = () => {
    const {
      heading,
      description,
      buttonGroup,
      title
    } = this.props

    if (title) { return title }

    const tooltipButtonGroup = buttonGroup
      ? React.cloneElement(buttonGroup, {
        size: 'small',
        fullWidth: true,
        noPadding: true,
        sx: { bgcolor: 'transparent', mt: 'var(--ds-spacing-bitterCold)' }
      })
      : false

    return (
      <>
        {heading && (
          <DsTypography
            component='div'
            variant='headingBoldExtraSmall'
            sx={{ mb: 'var(--ds-spacing-glacial)' }}
          >
            {heading}
          </DsTypography>
        )}
        {description && (
          <DsTypography
            component='div'
            variant='bodyRegularMedium'
          >
            {description}
          </DsTypography>
        )}
        {tooltipButtonGroup}
      </>
    )
  }

  render () {
    const {
      heading,
      description,
      buttonGroup,
      title,

      children,
      ...tooltipProps
    } = this.props

    return (
      <Tooltip title={this.renderTitle()} {...tooltipProps}>
        <DsLink
          component='span'
          underline='always'
          color='inherit'
          variant='inherit'
          sx={{
            textDecorationColor: 'inherit'
          }}
        >
          {children}
        </DsLink>
      </Tooltip>
    )
  }
}

export default DsTooltip
