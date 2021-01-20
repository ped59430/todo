<template>
  <div>
    <q-item v-if="isDone" v-touch-swipe.mouse.left.right="handler">
      <div class="flex content-back justify-end">
        <div class="flex content-front-done">
          <q-item-section side class="content-front-number">
            <q-icon
              :size="'35px'"
              :color="'white'"
              name="check_circle_outline"
            />
          </q-item-section>
          <q-item-section
            no-wrap
            class="text-weight-light content-front-text-done"
          >
            {{ description }}
          </q-item-section>
        </div>
      </div>
    </q-item>
    <q-item v-else v-touch-swipe.mouse.left.right="handler">
      <div class="content-back">
        <div class="flex content-front">
          <q-item-section side class="content-front-number">
            <q-avatar
              size="35px"
              font-size="14px"
              color="primary"
              text-color="white"
            >
              {{ number + 1 }}
            </q-avatar>
          </q-item-section>
          <q-item-section no-wrap class="text-weight-light content-front-text">
            {{ description }}
          </q-item-section>
        </div>
      </div>
    </q-item>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    done: { type: Boolean, required: true },
    number: { type: Number, required: true },
    uid: { type: Number, required: true },
    description: { type: String, required: true },
  },
  data() {
    return {
      editMode: false,
      isDone: true,
    };
  },
  watch: {
    done: function (newValue, old) {
      this.isDone = newValue;
    },
  },
  methods: {
    handler(obj) {
      if (obj.direction === "right") {
        this.isDone = true;
      }
      if (obj.direction === "left") {
        this.isDone = false;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.content-back {
  background-color: #F1E5E5;
  border-radius: 50px;
  height: 90px;
  width: 100%;
}

.content-front {
  background-color: white;
  border-radius: 50px;
  margin-top: 7.5px;
  margin-left: 2%;
  height: 75px;
  width: 70%;
}

.content-front-done {
  background-color: $primary;
  border-radius: 50px;
  margin-top: 7.5px;
  margin-right: 2%;
  height: 75px;
  width: 70%;
}

.content-front-text-done {
  margin-left: 15px;
  font-weight: 500;
  font-size: 13px;
  color: white;
}

.content-front-text {
  margin-left: 15px;
  font-weight: 500;
  font-size: 13px;
  color: #6B6565;
}

.content-front-number {
  margin-left: 15px;
}
</style>
