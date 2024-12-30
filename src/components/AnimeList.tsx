import { AnimeProps } from "@/types";
import Image from "next/image";

const AnimeList = (anime: AnimeProps) => {
  return (
    <div className="relative w-full rounded-md shadow-md overflow-hidden">
      <span className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-md">
        {anime.score}
      </span>

      <Image
        width={500}
        height={500}
        src={anime.images.webp.image_url}
        alt={anime.title}
        className="h-4/5 object-cover rounded-md"
      />

      <div className="p-2">
        <h3 className="mt-2 text-xs font-semibold">{anime.title}</h3>
      </div>
    </div>
  );
};

export default AnimeList;
