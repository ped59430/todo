<template>
  <q-page class="row justify-center q-px-lg">
    <div class="q-pt-xl q-mt-xl col-xs-12 col-sm-6 col-md-4">
      <todo-title />
      <todo-list />
    </div>
  </q-page>
</template>

<style></style>

<script>
import TodoList from "../components/TodoList.vue";
import TodoTitle from "../components/TodoTitle.vue";

export default {
  name: "PageIndex",
  components: { TodoList, TodoTitle },
};
</script>
