import { MCQData, MCQOption } from "src/common/endpoints/types";

export type MCQType = MCQData & {
  pressedAnswer: string;
  correctAnswer: MCQOption[];
};

export type Props = {
  data: MCQType;
  onOptionPress: (mcqId: number, optionId: string) => void;
};
