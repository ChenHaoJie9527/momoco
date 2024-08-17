import { FC } from 'react';
import CircleBorder from '../common/CircleBorder';
export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary';
  type: 'circleBorder' | 'orbit' | 'pulse' | 'solar' | 'quarter';
}

export const Spinner: FC<SpinnerProps> = ({
  type = 'circleBorder',
  size = 'medium',
  color = 'primary',
}) => {
  switch (type) {
    case 'circleBorder':
      return <CircleBorder size={size} color={color} />;
    // case 'orbit':
    //   return <OrbitSpinner size={size} color={color} />;
    // case 'pulse':
    //   return <PulseSpinner size={size} color={color} />;
    // case 'solar':
    //   return <SolarSpinner size={size} color={color} />;
    // case 'quarter':
    //   return <QuarterSpinner size={size} color={color} />;
    default:
      throw new Error(`Invalid spinner type: ${type}`);
  }
};
