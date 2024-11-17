import { useCharacterStore } from "@/store/characterStore";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const SearchInput: React.FC = () => {
  const { query, setQuery, selectedCharacters, removeSelectedCharacter } =
    useCharacterStore();

  return (
    <View className="bg-card p-4 mb-4 rounded-2xl shadow">
      <View style={styles.container} className="flex items-center">
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search for characters..."
          placeholderTextColor={"#9CA3AF"}
          style={styles.input}
          className="rounded-lg mr-2 text-text "
        />
        {selectedCharacters.map((character) => (
          <View
            key={character.id}
            className="flex flex-row items-center border border-background px-4 p-2 rounded-lg mr-2 mb-2"
          >
            <Text className="text-text text-sm mr-2">{character.name}</Text>
            <Pressable onPress={() => removeSelectedCharacter(character)}>
              <Text className="text-text text-sm">X</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    minWidth: 60,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
});

export default SearchInput;
