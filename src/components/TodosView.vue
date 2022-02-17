<template>
  <div class="container todos">
    <div v-for="item in items" :key="item.id" class="todo">
      <div>
        {{ item.name }}
      </div>
      <div>
        {{ item.completed }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

import { mapGetters } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const items = computed(() => store.state.items);
    return { items };
  },
});
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  text-align: center;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
