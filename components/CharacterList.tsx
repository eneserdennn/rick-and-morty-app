import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { useCharacterStore } from "@/store/characterStore";

const CharacterList: React.FC = () => {
  const { characters, query, addSelectedCharacter, selectedCharacters } =
    useCharacterStore();
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterItem
          character={item}
          query={query}
          onSelect={addSelectedCharacter}
        />
      )}
    />
  );
};

export default CharacterList;
