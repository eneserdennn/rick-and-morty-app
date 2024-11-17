import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useCharacterSearch } from "@/hooks/useCharacterSearch";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorInfo from "@/components/ErrorInfo";
import SearchInput from "@/components/SearchInput";
import CharacterList from "@/components/CharacterList";
import { useCharacterStore } from "@/store/characterStore";

const HomeScreen = () => {
  const { query, setCharacters } = useCharacterStore();
  const { data: characters, isLoading, error } = useCharacterSearch(query);

  useEffect(() => {
    setCharacters(characters || []);
  }, [characters]);

  return (
    <SafeAreaView className="flex-1 bg-background justify-center">
      <View className="flex-1 p-6 gap-4">
        <Text className="text-3xl font-bold text-text text-center">
          Rick and Morty API Search
        </Text>

        <SearchInput />

        {isLoading && <LoadingIndicator />}
        {error && <ErrorInfo errorMessage={error.message} />}

        <CharacterList />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
