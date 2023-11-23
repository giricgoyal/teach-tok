import React, { useCallback } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { MCQOption } from "src/common/endpoints/types";
import TouchableOption from "src/components/touchable-option";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import ActionBar from "src/components/action-bar";
import { Props } from "./types";

export default function MCQ(props: Props) {
  const { data, onOptionPress } = props;
  const { t } = useTranslation();

  const handleOptionPress = useCallback(
    (optionId: string) => {
      onOptionPress(data.id, optionId);
    },
    [data, onOptionPress]
  );

  return (
    <ImageBackground source={{ uri: data?.image }} resizeMode="cover">
      <View style={styles.overlay}>
        <View style={styles.screen}>
          <View style={styles.container}>
            <View style={styles.mainContainer}>
              <View style={styles.qaContainer}>
                <View style={styles.questionContainer}>
                  <Text style={styles.questionText}>{data?.question}</Text>
                </View>
                <View style={styles.optionsContainer}>
                  {data?.options?.map((option: MCQOption) => (
                    <TouchableOption
                      label={option.answer}
                      id={option.id}
                      isPressed={option.id === data.pressedAnswer}
                      isCorrect={
                        !!data.pressedAnswer &&
                        option.id === data.correctAnswer?.[0]?.id
                      }
                      allowPress={!data.pressedAnswer}
                      key={`answerOption-${option.id}`}
                      onPress={handleOptionPress}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.name}>{data?.user?.name}</Text>
                <Text style={styles.description}>{data?.description}</Text>
              </View>
            </View>
            <ActionBar avatar={data.user.avatar} />
          </View>
          <View style={styles.playlistFooter}>
            <View style={styles.playlistInfo}>
              <Image
                source={require("src/assets/playlist.png")}
                style={styles.playlistImage}
              />
              <Text style={styles.playlistText}>
                {`${t("home.playlist")} • `}
                {data?.playlist}
              </Text>
            </View>
            <Image
              source={require("src/assets/chevron-right.png")}
              style={styles.chevronRightImage}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
