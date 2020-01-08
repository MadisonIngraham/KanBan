<template>
  <div class="commment">
    <p>{{ comData.content }}</p>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: ["comData"]
};
</script>

<style scoped>
p {
  border: 1px solid black;
  margin: 5%;
  height: 40px;
  justify-content: center;
  padding: 1%;
}
</style>
