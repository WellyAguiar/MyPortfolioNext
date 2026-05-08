export interface Project {
  name: string;
  stack: string;
  description?: string;
  url: string;
}

export interface StackData {
  [category: string]: string[];
}
