import React, { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

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
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // handle cancelation
    const controller = new AbortController();

    // Before fetching data, isLoading is true. After that(both res or err situations) I should set it to false
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        // The right place to do this is in the final method, But for some reason it does not work with strict mode turned on, So for now I have to do this in my callback. So when I get the result
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []); //without [] I constantly send request to backend and it cause (Number of requests left for the period)

  return { games, error, isLoading };
};
export default useGames;
