<template>
  <div>
    <div class="palette">
      <div
        class="color"
        v-for="(e, i) in palette"
        :style="{ backgroundColor: e, color: '#fff', padding: 10 + 'px' }"
      >
        {{ e }}
      </div>
    </div>
  </div>
</template>

<script>
import mdColors from "../js/material-colors.json";

export default {
  data() {
    return {
      palette: mdColors,
    };
  },
};
</script>

<style lang="css" scoped>
.palette {
  display: flex;
  flex-wrap: wrap;
}
.palette .color{
    width: 40%;
}
</style>
