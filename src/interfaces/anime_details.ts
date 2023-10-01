
interface IImages {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  }
}

interface ITitles {
  type: string;
  title: string;
}

interface IAiredProp {
  string: string;
}

interface IAired {
  prop: AiredProp;
}

interface IData {
  mal_id: number;
  images: Images;
  trailer: {
    url: string;
  };
  title: string;
  episodes: number;
  status: string;
  aired: Aired;
  duration: string;
  rating: string;
  type: string;
  score: number;
  popularity: number;
  synopsis: string;
  season: string;
}

interface IDetail {
  data: IData;
}