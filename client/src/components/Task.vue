<template>
  <div class="task">
    <p>{{taskData.title}}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"]
};
</script>