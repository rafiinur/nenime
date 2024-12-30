export interface AnimeProps {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  score: number;
  scored_by: number;
  rank: number;
  members: number;
  episodes: number;
}
