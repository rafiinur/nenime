import { getTopAnimes } from "@/actions/fetchAnimeApi";
import AnimeList from "@/components/AnimeList";
import SectionHeader from "@/components/SectionHeader";
import { AnimeProps } from "@/types";

export default async function Home() {
  const { data } = await getTopAnimes("limit=25");

  return (
    <main className="w-full min-h-screen px-10 pt-28">
      <section className="flex flex-col gap-10 overflow-y-scroll h-full">
        {/* Section Header */}
        <SectionHeader title="Top Animes" />

        {/* Anime List */}
        <div className="flex flex-col items-center justify-center gap-5 mt-2">
          <div className="grid grid-cols-5 gap-5 w-full">
            {data.map((anime: AnimeProps) => (
              <AnimeList key={anime.mal_id} {...anime} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
