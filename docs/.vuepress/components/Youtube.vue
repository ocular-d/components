<template>

<div class="video-block">
    <iframe max-width=100% height=auto
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
</div>
</template>
<script>
export default {
  name: "Video",
  props: {
    src: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-block {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  width: 100%; height: auto;}

.video-block iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;}
</style>