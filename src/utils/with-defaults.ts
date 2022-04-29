import { ComponentType } from 'react'

const withDefaults = <P, DP>(component: ComponentType<P>, defaultProps: DP) => {
  const componentWithDefaults = component
  type Props = Partial<DP> & Omit<P, keyof DP>
  componentWithDefaults.defaultProps = defaultProps
  return componentWithDefaults as ComponentType<Props>
}

export default withDefaults
