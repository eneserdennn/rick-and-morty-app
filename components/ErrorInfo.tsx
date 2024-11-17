import { View, Text } from "react-native";
import React from "react";

type ErrorInfoProps = {
  errorMessage: string;
};

const ErrorInfo = ({ errorMessage }: ErrorInfoProps) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl text-text mb-2">
        An error occurred, please try again.
      </Text>
      <Text className="text-error">Error: {errorMessage}</Text>
    </View>
  );
};

export default ErrorInfo;
