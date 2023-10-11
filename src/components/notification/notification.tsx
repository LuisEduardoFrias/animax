
interface INotificationProps {
 text: string,
}

const StyleDiv: CSSProperties = {
  margin: '10px', 
  padding: '5px',
  borderRadius: '4px 4px',
  textAlign: 'center',
  width: '100%',
  fontWeight: '900',
  backgroundColor: `rgb(24, 88, 176)`,
   
}

export default function Notification(props:INotificationProps) {
 return ( <span style={StyleDiv}>{props.text}</span> )
}