<template>
  <div class="list">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">{{listData.title}}</div>
      <div class="card-body">
        <form>
          <input type="text" placeholder="title" v-model="newTask.title" required />
          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["listData"],
  data() {
    return {
      newTask: {}
    };
  }
};
</script>

<style scoped>
</style>
