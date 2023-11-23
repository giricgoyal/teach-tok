import { API_BASE } from "src/common/constants";
import { fetchData } from "src/common/endpoints/helper";
import { MCQAnwser, MCQData } from "src/common/endpoints/types";

export function getMCQ(): Promise<MCQData> {
  return fetchData<MCQData>(`${API_BASE}/for_you`);
}

export function getMCQAnswer(params?: { id: any }): Promise<MCQAnwser> {
  return fetchData<MCQAnwser>(`${API_BASE}/reveal?id=${params?.id}`);
}
