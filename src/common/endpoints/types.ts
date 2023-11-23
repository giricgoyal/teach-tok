export type MCQOption = {
  answer: string;
  id: string;
};

export type MCQData = {
  description: string;
  id: number;
  image: string;
  playlist: string;
  question: string;
  options: MCQOption[];
  user: {
    name: string;
    avatar: string;
  };
};

export type MCQAnwser = {
  id: string;
  correct_options: MCQOption[];
};
