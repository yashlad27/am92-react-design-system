import { DsInputBaseDefaultProps } from './DsInputBase.Types'

export const DsInputBaseOverrides = {
  MuiInputBase: {
    defaultProps: DsInputBaseDefaultProps,
    variants: [
      {
        props: { 'ds-variant': 'otp' },
        style: {
          textAlign: 'center'
        }
      },
      {
        props: { 'ds-variant': 'otp', size: 'medium' },
        style: {
          height: '56px',
          width: '56px',
          '> input': {
            padding: 'var(--ds-spacing-bitterCold)'
          }
        }
      },
      {
        props: { 'ds-variant': 'otp', size: 'small' },
        style: {
          height: '40px',
          width: '40px',
          '> input': {
            padding: 'var(--ds-spacing-glacial)'
          }
        }
      },
      {
        props: { 'ds-variant': 'search' },
        style: {
          borderRadius: 'var(--ds-spacing-pleasant)',
          paddingLeft: 'var(--ds-spacing-frostbite)',
          paddingRight: 'var(--ds-spacing-bitterCold)',
          paddingTop: 'var(--ds-spacing-glacial)',
          paddingBottom: 'var(--ds-spacing-glacial)',
          height: 'var(--ds-rules-searchbarHeight)',
          minWidth: 'var(--ds-rules-searchbarMinWidth)',
          fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
          fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
          lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
          letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
          '> input': {
            padding: 'var(--ds-spacing-zero)',
            ml: 'var(--ds-spacing-frostbite)'
          },
          '> input::placeholder': {
            color: 'var(--ds-color-typoSecondary)',
            opacity: 1
          }
        }
      }
    ],
    styleOverrides: {
      root: {
        background: 'var(--ds-color-surfacePrimary)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--ds-color-strokeDefault)',
        borderRadius: '4px',
        '&.Mui-focused:not(.Mui-disabled)': {
          borderColor: 'var(--ds-color-strokeActive)'
        },
        '&.MuiInputBase-colorSuccess': {
          borderColor: 'var(--ds-color-supportPositive)'
        },
        '&.Mui-focused.MuiInputBase-colorSuccess': {
          borderColor: 'var(--ds-color-supportPositive)'
        },
        '&.Mui-disabled': {
          background: 'var(--ds-color-stateDisabledSurface)',
          borderColor: 'var(--ds-color-strokeDisabled)',
          cursor: 'not-allowed',
          pointerEvents: 'all',
          '> .MuiInputAdornment-root': {
            color: 'var(--ds-color-iconDisabled)',
            cursor: 'not-allowed',
            pointerEvents: 'all'
          }
        },
        '&.Mui-error': {
          borderColor: 'var(--ds-color-supportNegative)'
        },
        '&.Mui-focused.Mui-error': {
          borderColor: 'var(--ds-color-supportNegative)'
        },
        '&.MuiInputBase-readOnly': {
          background: 'var(--ds-color-stateDisabledSurface)',
          borderColor: 'var(--ds-color-strokeDisabled)',
          pointerEvents: 'none',
          '> .MuiInputAdornment-root': {
            color: 'var(--ds-color-iconDisabled)'
          }
        },
        '> .MuiInputAdornment-root': {
          padding: 'var(--ds-spacing-deepFreeze)',
          height: 'auto'
        }
      },
      input: {
        padding: 'var(--ds-spacing-frostbite) var(--ds-spacing-glacial)',
        fontWeight: 'var(--ds-typo-bodyRegularMedium-fontWeight)',
        fontSize: 'var(--ds-typo-bodyRegularMedium-fontSize)',
        lineHeight: 'var(--ds-typo-bodyRegularMedium-lineHeight)',
        letterSpacing: 'var(--ds-typo-bodyRegularMedium-letterSpacing)',
        '&.Mui-disabled': {
          cursor: 'not-allowed',
          pointerEvents: 'all'
        },
        '&::placeholder': {
          color: 'var(--ds-color-typoTertiary)',
          opacity: 1
        }
      },
      adornedStart: {
        paddingLeft: 'var(--ds-spacing-glacial)'
      },
      adornedEnd: {
        paddingRight: 'var(--ds-spacing-glacial)'
      }
    }
  }
}
