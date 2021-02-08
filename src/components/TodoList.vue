<template>
  <div class="q-pt-mt q-mt-sm todo-list">
    <div>
      <q-list>
        <todo-item
          v-for="(todo, key) in todos"
          :key="key"
          :number="key"
          :uid="todo.ref['@ref'].id"
          :title="todo.data.title"
          :completed="todo.data.completed"
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
      return this.$store.state.todoItem.list;
    },
  },
  methods: {
    getAllTodo() {
      this.$store.dispatch("todoItem/readAll");
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
