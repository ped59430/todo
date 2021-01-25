<template>
  <div class="q-pt-mt q-mt-sm todo-list">
    <div>
      <q-list>
        <todo-item
          v-for="(todo, key) in todos"
          :key="key"
          :number="key"
          :uid="todo.uid"
          :description="todo.description"
          :done="todo.done"
        />
      </q-list>
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
.todo-list {
  width: 450px;
}
</style>
