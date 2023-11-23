export type Props = {
  allowPress: boolean;
  label: string;
  id: string;
  isPressed: boolean;
  isCorrect: boolean;
  onPress: (id: string) => void;
};
