<template>
  <div>
    <q-item>
      <div class="fit row wrap justify-center items-start content-start q-mt-lg q-mb-xl">
        <q-btn
          size="md"
          padding="xl"
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
import todoItem from 'src/api/todo-item'

export default {
  data() {
    return {
      value: "",
      errorMessage: ""
    };
  },
  methods: {
    async submit() {
      const todoInfo = {
        title: "",
        completed: false,
      }
      await this.addTodo(todoInfo);
    },
    async addTodo(todo) {
      new Promise((resolve, reject) => {
        todoItem.create(todo).then(() =>{
          this.$store.dispatch("todoItem/readAll");
          resolve()
        }).catch((e) => {
          reject(e)
        })
      })
    }
  }
};
</script>
