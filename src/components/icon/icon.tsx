
import { CSSProperties } from 'react';

export default function Icon({ iconName, style }: { iconName: string, style?: CSSProperties }) {
  return (
    <i className="material-symbols-outlined" style={{ userSelect: 'none', ...style }}>
      {iconName}
    </i>
  );
}