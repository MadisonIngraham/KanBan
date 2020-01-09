<template>
  <div class="commment row">
    <div class="col-11">
      <p>{{ comData.content }}</p>
    </div>
    <div class="col-1">
      <i @click="deleteComment(comData)" class="fas fa-trash"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["comData"],
  methods: {
    deleteComment(comData) {
      this.$store.dispatch("deleteComment", comData);
    }
  }
};
</script>

<style scoped>
p {
  border: 1px solid black;
  margin: 3%;
  height: 40px;
  padding: 1%;
  text-align: justify;
}

.col-1 {
  margin: auto;
  margin-left: -20px;
}
</style>
