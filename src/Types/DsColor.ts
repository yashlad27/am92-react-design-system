export type DsColorTokens =
  | 'actionPrimary'
  | 'actionSecondary'
  | 'actionTertiary'
  | 'surfaceBackground'
  | 'surfacePrimary'
  | 'surfaceSecondary'
  | 'surfaceTertiary'
  | 'typoPrimary'
  | 'typoSecondary'
  | 'typoTertiary'
  | 'typoActionPrimary'
  | 'typoActionSecondary'
  | 'typoActionTertiary'
  | 'typoOnSurface'
  | 'typoDisabled'
  | 'typoTypical'
  | 'neutral1'
  | 'neutral2'
  | 'neutral3'
  | 'neutral4'
  | 'neutral5'
  | 'neutral6'
  | 'iconSupportNegative'
  | 'iconSupportPositive'
  | 'iconSupportWarning'
  | 'iconActionPrimary'
  | 'iconActionSecondary'
  | 'iconActionTertiary'
  | 'iconOnSurface'
  | 'iconDisabled'
  | 'iconDefault'
  | 'iconTypical'
  | 'strokeDefault'
  | 'strokeSelected'
  | 'strokeSecondarySelected'
  | 'strokeHover'
  | 'strokeDisabled'
  | 'strokeActive'
  | 'supportNegative'
  | 'supportPositive'
  | 'supportWarning'
  | 'supportVariable'
  | 'supportTypical'
  | 'supportNegativeNeutral'
  | 'supportPositiveNeutral'
  | 'supportWarningNeutral'
  | 'supportTypicalNeutral'
  | 'stateSelectedPrimaryHover'
  | 'stateSelectedPrimaryPressed'
  | 'stateSelectedSecondaryHover'
  | 'stateSelectedSecondaryPressed'
  | 'stateSelectedVisitedTextLink'
  | 'stateUnselectedDefault'
  | 'stateUnselectedHover'
  | 'stateUnselectedPressed'
  | 'stateDisabledSurface'
  | 'overlay'
  | 'overlayLoader'

export type DsColorClassTokens =
  | 'colorActionPrimary'
  | 'colorActionSecondary'
  | 'colorActionTertiary'
  | 'colorSurfaceBackground'
  | 'colorSurfacePrimary'
  | 'colorSurfaceSecondary'
  | 'colorSurfaceTertiary'
  | 'colorTypoPrimary'
  | 'colorTypoSecondary'
  | 'colorTypoTertiary'
  | 'colorTypoActionPrimary'
  | 'colorTypoActionSecondary'
  | 'colorTypoActionTertiary'
  | 'colorTypoOnSurface'
  | 'colorTypoDisabled'
  | 'colorTypoTypical'
  | 'colorNeutral1'
  | 'colorNeutral2'
  | 'colorNeutral3'
  | 'colorNeutral4'
  | 'colorNeutral5'
  | 'colorNeutral6'
  | 'colorIconSupportNegative'
  | 'colorIconSupportPositive'
  | 'colorIconSupportWarning'
  | 'colorIconActionPrimary'
  | 'colorIconActionSecondary'
  | 'colorIconActionTertiary'
  | 'colorIconOnSurface'
  | 'colorIconDisabled'
  | 'colorIconDefault'
  | 'colorIconTypical'
  | 'colorStrokeDefault'
  | 'colorStrokeSelected'
  | 'colorStrokeSecondarySelected'
  | 'colorStrokeHover'
  | 'colorStrokeDisabled'
  | 'colorStrokeActive'
  | 'colorSupportNegative'
  | 'colorSupportPositive'
  | 'colorSupportWarning'
  | 'colorSupportVariable'
  | 'colorSupportTypical'
  | 'colorSupportNegativeNeutral'
  | 'colorSupportPositiveNeutral'
  | 'colorSupportWarningNeutral'
  | 'colorSupportTypicalNeutral'
  | 'colorStateSelectedPrimaryHover'
  | 'colorStateSelectedPrimaryPressed'
  | 'colorStateSelectedSecondaryHover'
  | 'colorStateSelectedSecondaryPressed'
  | 'colorStateSelectedVisitedTextLink'
  | 'colorStateUnselectedDefault'
  | 'colorStateUnselectedHover'
  | 'colorStateUnselectedPressed'
  | 'colorStateDisabledSurface'
  | 'colorOverlay'
  | 'colorOverlayLoader'

interface DsColorGenerics<T> extends Partial<Record<DsColorTokens, T>> {}
interface DsColorClassGenerics<T>
  extends Partial<Record<DsColorClassTokens, T>> {}

export interface DsColor extends DsColorGenerics<string> {}
export interface DsColorOverides extends DsColorGenerics<true> {}
export interface DsColorClass extends DsColorClassGenerics<string> {}