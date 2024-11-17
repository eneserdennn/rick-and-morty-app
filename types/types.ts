export type CharacterType = {
  id: number;
  name: string;
  image: string;
  episode: string[];
};

export type CharacterStore = {
  characters: CharacterType[];
  query: string;
  selectedCharacters: CharacterType[];
  setCharacters: (characters: CharacterType[]) => void;
  setQuery: (query: string) => void;
  addSelectedCharacter: (character: CharacterType) => void;
  removeSelectedCharacter: (character: CharacterType) => void;
};
