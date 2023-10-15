
import { CSSProperties } from 'react';

export default function Icon({ iconName, classCss, style }: { iconName: string, classCss: string, style?: CSSProperties }) {
  return (
    <i className={`material-symbols-outlined ${classCss}`} style={{ userSelect: 'none', ...style }}>
      {iconName}
    </i>
  );
}