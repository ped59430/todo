<template>
  <div class="q-pt-xl q-mt-xl col-xs-12 col-sm-6 col-md-4">
    <div></div>
    <div class="title text-center q-pt-xl q-mt-xl">
      <span class="text-weight-medium">todo</span>toudou.
    </div>
    <div>
      <q-list separator>
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
      <new-todo-item />
    </div>
  </div>
</template>

<script>
import TodoItemVue from "./TodoItem.vue";
import NewTodoItemVue from "./NewTodoItem.vue";

export default {
  name: "Todos",
  components: {
    "todo-item": TodoItemVue,
    "new-todo-item": NewTodoItemVue,
  },
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
.title {
  color: white;
  font-size: 2em;
}
</style>
