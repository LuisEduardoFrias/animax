
interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

interface Images {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

interface Aired {
  string: string;
}

interface AnimeData {
  mal_id: number;
  images: Images;
  title: string;
  title_english: string;
  title_japanese: string;
  episodes: number;
  status: string;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  synopsis: string;
}

export interface Anime {
  pagination: Pagination;
  data: AnimeData[];
}