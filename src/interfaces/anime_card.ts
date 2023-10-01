
interface IImages {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

interface IData {
  mal_id: number;
  images: IImages;
  title: string;
}

export interface IAnime {
  data: IData[];
}