export interface TodoItem {
  id: null;
  name: string;
  completed: string;
}

export type State = {
  items: TodoItem[];
};

export const state: State = {
  items: [],
};
