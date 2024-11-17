import React from "react";
import { Text } from "react-native";

type HighlightedTextProps = {
  text: string;
  highlight: string;
};

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  highlight,
}) => {
  if (!highlight) return <Text>{text}</Text>;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Text key={index} className="font-extrabold">
            {part}
          </Text>
        ) : (
          part
        )
      )}
    </>
  );
};

export default HighlightedText;
