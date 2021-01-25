<template>
  <div>
    <q-item>
      <div class="fit row wrap justify-center items-start content-start">
        <q-btn
          size="md"
          padding="lg"
          color="white"
          text-color="primary"
          round
          icon="add"
          :ripple="false"
          unelevated
          @click="submit"
        >
        </q-btn>
      </div>
    </q-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      errorMessage: ""
    };
  },
  methods: {
    async submit() {
      await this.addTodo({
        description: "",
        done: false
      });
    },
    addTodo(todo) {
      return this.$store.dispatch("todo/serverAddTodo", todo);
    }
  }
};
</script>
