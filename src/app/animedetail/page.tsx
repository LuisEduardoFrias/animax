import BackButton from '../../components/back_button/backbutton'

export default function AnimeDetail(props) {
  const id = props.searchParams.id;
  
  if (!id) {
    return <p>Cargando...</p>;
  }
  
  return (
    <>
      <h1>Detalle del anime</h1>
      <div>Detalles de la imagen con ID {id}</div>
      <BackButton />
    </>
  );
}