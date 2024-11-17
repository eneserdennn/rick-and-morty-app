import { CharacterStore } from "@/types/types";
import { create } from "zustand";

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  query: "",
  selectedCharacters: [],
  setCharacters: (characters) => set({ characters }),
  setQuery: (query) => set({ query }),
  addSelectedCharacter: (character) =>
    set((state) => ({
      selectedCharacters: state.selectedCharacters.some(
        (selectedCharacter) => selectedCharacter.id === character.id
      )
        ? state.selectedCharacters.filter(
            (selectedCharacter) => selectedCharacter.id !== character.id
          )
        : [...state.selectedCharacters, character],
    })),
  removeSelectedCharacter: (character) =>
    set((state) => ({
      selectedCharacters: state.selectedCharacters.filter(
        (selectedCharacter) => selectedCharacter.id !== character.id
      ),
    })),
}));
