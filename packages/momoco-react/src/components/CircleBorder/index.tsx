import { FC } from 'react';
import styles from './styles.module.css';
import { PresetColor } from '@/types';

export interface CircleBorderProps {
  size?: 'small' | 'medium' | 'large';
  color?: PresetColor | string;
}

export const CircleBorder: FC<CircleBorderProps> = ({ size = 'medium', color = 'primary' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: '100px', height: '100px' };
      case 'large':
        return { width: '200px', height: '200px' };
      default:
        return { width: '120px', height: '120px' };
    }
  };

  const getColor = (color: PresetColor | string): string => {
    switch (color) {
      case 'primary':
        return '#0ea5e9';
      case 'secondary':
        return '#f97316';
      case 'tertiary':
        return '#84cc16';
      default:
        return color; // 如果不是预设颜色，则直接返回传入的颜色值
    }
  };

  const sizeStyle = getSize();
  const borderColor = getColor(color);

  return (
    <div className={styles['spinner-box']} style={sizeStyle}>
      <div
        className={styles['circle-border']}
        style={{
          ...sizeStyle,
          background: `linear-gradient(0deg, ${borderColor}33 33%, ${borderColor} 100%)`,
        }}
      >
        <div className={styles['circle-core']}></div>
      </div>
    </div>
  );
};


