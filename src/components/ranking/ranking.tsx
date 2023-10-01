'use client'

import Icon from '../icon/icon'

interface IRankingProps {
 score:number
}

export default function Ranking(props: IRankingProps)  : React.FC<Props> {
 
  const renderIcons = () => {
    const icons = [];
    const ranking = Math.round(props.score * 2) / 2;

    for (let i = 1; i <= 10; i++) {
      if (i <= ranking) {
        icons.push(<Icon iconName="star_rate" key={i} />);
      } else if (i === Math.ceil(ranking) && ranking % 1 !== 0) {
        icons.push(<Icon iconName="star_rate_half" style={{opacity: '0.8'}} key={i} />);
      } else {
        icons.push(<Icon iconName="star" style={{opacity: '0.3'}} key={i} />);
      }
    }

    return icons;
  }
  
  return (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBlock: '10px 10px'}}>
    <label>Score</label>
    <span>{renderIcons()}</span>
  </div>
);
}