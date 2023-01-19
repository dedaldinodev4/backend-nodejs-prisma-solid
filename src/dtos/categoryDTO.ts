
export interface ICategory {
  id: string;
  name: string;
  created_at: Date;
}

export interface ICategoryRequest {
  id?: string;
  name: string;
}