export type CatType = 
  | "BLACK" 
  | "ORANGE" 
  | "RAGDOLL" 
  | "SIAMESE" 
  | "MAINE" 
  | "CALICO" 
  | "COW" 
  | "BRITISH";

export interface CatResult {
  id: CatType;
  name: string;
  subtitle: string;
  tags: string[];
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestMatch: string[];
  shareText: string;
  color: string;
}

export interface Option {
  text: string;
  scores: Partial<Record<CatType, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}
