import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import DsRemixIcon from './DsRemixIcon'
import DsTypography from './DsTypography'
import DsBox from './DsBox'
import DsIconButton from './DsIconButton'
import DsDrawer from './DsDrawer'

export class DsBottomStagger extends PureComponent {
  static propTypes = {
    kicker: PropTypes.node,
    title: PropTypes.node,
    buttonGroup: PropTypes.element,
    showClose: PropTypes.bool
  }

  static defaultProps = {
    showClose: true
  }

  render () {
    const {
      kicker,
      title,
      buttonGroup,
      flushedButtonGroup,
      showClose,

      children,
      ...restProps
    } = this.props

    const { onClose } = restProps
    const padded = !!buttonGroup?.props?.noPadding
    const drawerButtonGroup = buttonGroup && React.cloneElement(buttonGroup, { size: 'large', fullWidth: true })

    return (
      <>
        <DsDrawer
          anchor='bottom'
          elevation={0}
          {...restProps}
        >
          {showClose && (
            <DsBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 'var(--ds-spacing-bitterCold)'
              }}
            >
              <DsIconButton
                onClick={onClose}
                sx={{
                  backgroundColor: 'var(--ds-color-iconDefault)',
                  color: 'var(--ds-color-iconDisabled)',
                  borderRadius: '50%',
                  p: 'var(--ds-spacing-glacial)'
                }}
              >
                <DsRemixIcon className='ri-close-line' />
              </DsIconButton>
            </DsBox>
          )}
          <DsBox
            sx={{
              boxShadow: 'var(--ds-elevation-0)',
              borderRadius: '16px 16px 0px 0px',
              backgroundColor: 'var(--ds-color-surfacePrimary)',
              pt: 'var(--ds-spacing-mild)'
            }}
          >
            <DsBox
              sx={{
                px: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {kicker && (
                <DsTypography
                  variant='subheadingSemiboldDefault'
                  color='text.tertiary'
                  component='div'
                  sx={{
                    mb: 'var(--ds-spacing-quickFreeze)',
                    textTransform: 'var(--ds-typo-casingUppercase)'
                  }}
                >
                  {kicker}
                </DsTypography>
              )}
              {title && (
                <DsTypography
                  variant='headingBoldMedium'
                  component='div'
                  sx={{
                    mb: 'var(--ds-spacing-mild)'
                  }}
                >
                  {title}
                </DsTypography>
              )}
            </DsBox>
            <DsBox
              sx={{
                maxHeight: 'var(--ds-rules-bottomStaggerWorkingAreaHeight)',
                overflow: 'auto',
                mb: padded ? 'var(--ds-spacing-mild)' : 'var(--ds-spacing-glacial)'
              }}
            >
              <DsBox
                sx={{
                  px: 'var(--ds-spacing-bitterCold)'
                }}
              >
                {children}
              </DsBox>
            </DsBox>
            {drawerButtonGroup}
          </DsBox>
        </DsDrawer>
      </>
    )
  }
}

export default DsBottomStagger