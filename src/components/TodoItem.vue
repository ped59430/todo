<template>
  <div>
    <q-item>
      {{ description }}
    </q-item>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    uid: { type: Number, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, required: true },
  },
  data() {
    return {
      editMode: false,
    };
  },
};
</script>

<style lang="stylus">
.q-item {
  margin: 6px;
  background-color: #DDBDBD;
}

.q-slide-item__content {
  margin: 6px;
}
</style>
