import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getMCQ, getMCQAnswer } from "src/common/endpoints/mcq";
import PagerView from "react-native-pager-view";
import MCQ from "src/components/mcq";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

export default function HomeScreen() {
  const { t } = useTranslation();
  const [mcqData, setMCQData] = useState(new Map());

  const fetchMCQData = async (mcqData = new Map()) => {
    try {
      const mcq = await getMCQ();
      const { id } = mcq;
      const mcqAnswer = await getMCQAnswer({
        id,
      });

      const updatedMCQData = new Map(mcqData);
      if (updatedMCQData.has(id)) {
        fetchMCQData(mcqData);
        return;
      }

      updatedMCQData.set(id, {
        ...mcq,
        correctAnswer: mcqAnswer["correct_options"],
      });
      setMCQData(updatedMCQData);
    } catch (error) {
      fetchMCQData(mcqData);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMCQData();
  }, []);

  const handleOptionPress = useCallback(
    (mcqId: number, optionId: string) => {
      fetchMCQData(mcqData);
      const updatedMCQData = new Map(mcqData);
      const currentMCQ = mcqData.get(mcqId);

      currentMCQ.pressedAnswer = optionId;
      updatedMCQData.set(mcqId, currentMCQ);

      setMCQData(updatedMCQData);
    },
    [mcqData]
  );

  return mcqData.size > 0 ? (
    <PagerView initialPage={0} style={styles.pagerView} orientation="vertical">
      {[...mcqData.values()].map((mcq, index) => (
        <MCQ data={mcq} onOptionPress={handleOptionPress} key={index} />
      ))}
    </PagerView>
  ) : (
    <View style={styles.loader}>
      <Text>{t("home.loading")}</Text>
    </View>
  );
}
