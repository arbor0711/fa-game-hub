import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  // With "useState(null)" I cannot set selectedGenre to different value other than null. Because the TS compiler doesn't know that this variable can store genre object. So I should add generic type argument to that -> "useState<Genre>(null)"

  // Now I have a Compilation error says: "Argument of type 'null' is not assignable to parameter of type 'Genre | (() => Genre)'." -> So I should say that this variable could have Genre or null type
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
