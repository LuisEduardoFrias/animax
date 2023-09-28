
export default function Icon({iconName}:string) {
 return (
  <i className="material-symbols-outlined"
     style={{userSelect: 'none'}}>{iconName}</i>)
}