export interface SubmissionRecord {
  id: string;
  [key: string]: string | number;
}

export interface SubmissionResponse {
  columns: string[];
  data: SubmissionRecord[];
}

export type InsuranceRow = {
  id: string;
  "Full Name": string;
  Age: number;
  Gender: string;
  "Insurance Type": string;
  City: string;
};
