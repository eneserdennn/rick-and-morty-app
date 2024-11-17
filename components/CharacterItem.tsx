import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import HighlightedText from "./HighlightedText";
import { CharacterType } from "@/types/types";

type CharacterItemProps = {
  character: CharacterType;
  query: string;
  onSelect: (character: CharacterType) => void;
};

const CharacterItem: React.FC<CharacterItemProps> = ({
  character,
  query,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={() => onSelect(character)}
      className="flex-row items-center bg-card p-4 mb-2 rounded-2xl shadow"
    >
      <Image
        source={{ uri: character.image }}
        className="w-12 h-12 rounded-full mr-4"
      />
      <View>
        <Text className="text-text">
          <HighlightedText text={character.name} highlight={query} />
        </Text>
        <Text className="text-secondary">
          Episodes: {character.episode.length}
        </Text>
      </View>
    </Pressable>
  );
};

export default CharacterItem;
