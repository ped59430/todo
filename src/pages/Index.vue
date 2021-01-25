<template>
  <q-page class="row justify-center q-px-lg">
    <div class="q-pt-xl q-mt-xl col-xs-auto col-sm-auto col-md-auto">
      <todo-title />
      <todo-list />
      <new-todo-item />
    </div>
  </q-page>
</template>

<style></style>

<script>
import TodoList from "../components/TodoList.vue";
import TodoTitle from "../components/TodoTitle.vue";
import NewTodoItem from "../components/NewTodoItem.vue";

export default {
  name: "PageIndex",
  components: { TodoList, TodoTitle, NewTodoItem },
};
</script>
