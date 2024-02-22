export interface Category {
  _id?: string;
  categoryName: string;
  description?: string;
}

export interface CategoryState {
  list: Category[] | []; //null | any
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selected: Category | null;
}
