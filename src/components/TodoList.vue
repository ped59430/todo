<template>
  <div class="text-center q-pt-lg q-mt-lg">
    <div>
      <q-list>
        <todo-item
          v-for="(todo, key) in todos"
          :key="key"
          :uid="todo.uid"
          :description="todo.description"
          :done="todo.done"
        />
      </q-list>
      <q-item v-if="todos.length === 0" class="flex-center">
        <h5 class="text-grey-8">No todotoudous</h5>
      </q-item>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {};
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    getAllTodo() {
      this.$store.dispatch("todo/serverGetAllTodos");
    },
  },
  mounted() {
    this.getAllTodo();
  },
};
</script>

<style scoped>
</style>
