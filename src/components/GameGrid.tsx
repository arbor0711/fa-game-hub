import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "../services/api-client";

// to make FetchGameResponse I need to make Game interface for the result object. So first look at documentation of API to understand the structure of result object.
interface Game {
  // Now I only need id and name and I will add any other property that I will need later
  id: number;
  name: string;
}

interface FetchGamesResponse {
  // first look at API documents and see the response schema
  // Now I only need the count and results(NOT previous or next)
  count: number;
  //   results are array of objects, So first I should define a separate interface for that object and I call it Game.
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      // This is where we need to use typescript to define interface that will represent the shape of our response object
      .get<FetchGamesResponse>("/games")
      //   solve the compilation error with adding <Game[]> to useState hook because I set it to an empty array
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
