import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform as PLATFORM } from "./usePlatforms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: string;
}
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: PLATFORM | null
) =>
  // In here I pass selectedGenre as query string parameter to the data hook
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
export default useGames;
