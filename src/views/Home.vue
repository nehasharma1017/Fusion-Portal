<template>
  <div class="home">
    <drag-and-drop-upload/>
  </div>
</template>

<script>
// @ is an alias to /src
import dragAndDropUpload from "@/components/dragAndDropUpload.vue";

export default {
  name: "home",
  components: {
    dragAndDropUpload
  }
};
</script>
