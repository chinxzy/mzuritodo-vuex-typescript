import { Commit } from "vuex";
import { mutations } from "./mutations";
import { MutationTypes } from "./types";
import { ActionTypes } from "./types";
import { ResponseData } from "./types";
import TutorialDataService from "@/services/dataService";
import { state, State } from "./state";
import { TodoItem } from "./state";
import axios from "axios";

// type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
//   commit<K extends keyof Mutations>(
//     key: K,
//     paylaod: Parameters<Mutations[K]>[1]
//   ): ReturnType<Mutations[K]>;
// };

// export type Actions = {
//   [ActionTypes.FetchTodoItems](context: ActionAugments): void;
//   [ActionTypes.AddTodoItems](context: ActionAugments): void;
// };

export const actions = {
  async [ActionTypes.FetchTodoItems]({ commit }: { commit: Commit }) {
    try {
      const { data } = await axios.get("http://localhost:3000/tasks");
      commit(MutationTypes.SetTodoItems, data);
    } catch (e) {
      console.log("error: ", e);
    }
  },

  async [ActionTypes.AddTodoItems](
    { commit }: { commit: Commit },
    payload: TodoItem
  ) {
    console.log(payload);
    try {
      const { data } = await axios.post("http://localhost:3000/tasks", payload);
      commit(MutationTypes.NewTodoItems, data);
    } catch (e) {
      console.log("error:", e);
    }
  },
};
