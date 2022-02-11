import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";
import { MutationTypes } from "./types";
import { ActionTypes } from "./types";
import { ResponseData } from "./types";
import TutorialDataService from "@/services/dataService";
import { state, State } from "./state";
import { TodoItem } from "./state";
import axios from "axios";

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    paylaod: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.FetchTodoItems](context: ActionAugments): void;
  [ActionTypes.AddTodoItems](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FetchTodoItems]({ commit }) {
    try {
      const { data } = await axios.get("http://localhost:3000/tasks");
      commit(MutationTypes.SetTodoItems, data);
    } catch (e) {
      console.log("error: ", e);
    }
  },

  async [ActionTypes.AddTodoItems]({ commit }) {
    try {
      const { data } = await axios.post("http://localhost:3000/tasks", {});
      commit(MutationTypes.NewTodoItems, data);
    } catch (e) {
      console.log("error:", e);
    }
  },
};
