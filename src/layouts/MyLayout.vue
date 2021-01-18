<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  computed: {
    isIphoneX: function () {
      const d = window.device || { model: "" };
      return (
        d.model === "x86_64" ||
        d.model === "iPhone10,3" ||
        d.model === "iPhone10,3"
      );
    },
  },
  methods: {
    openURL,
  },
};
</script>

<style lang="stylus" scoped></style>
