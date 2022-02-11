<template>
  <div>
    <h3>Add Todo</h3>
    <form @submit.prevent="createTask">
      <div class="mb-3 mt-3">
        <input type="text" class="form-control" v-model="text" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useStore } from "@/store";
import { MutationTypes } from "@/store/types";
import { TodoItem } from "@/store/state";
import { ActionTypes } from "@/store/types";

export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();

    const createTask = () => {
      if (text.value === "") return;

      const item: TodoItem = {
        id: null,
        name: text.value,
        completed: "",
      };
      store.dispatch(ActionTypes.AddTodoItems);
      text.value = "";
    };
    return { createTask, text };
  },
});
</script>
