<template>
  <div class="custom-block teaser">
  <p class="custom-block-title">Info</p>
  <p>
  My Awesome Info
  </p>
  </div>
</template>

<script>
export default {
  name: "TeaserBox",
  props: {
    msg: String
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-block .custom-block-title {
	font-weight: 600;
	margin-bottom: -0.4rem;
}

.custom-block.teaser {
	padding: 0.1rem 1.5rem;
  border-radius: 0.4rem;
	border-left-width: 0.5rem;
	border-left-style: solid;
	margin: 1rem 0;
        background-color: #f3f5f7;
}
</style>

