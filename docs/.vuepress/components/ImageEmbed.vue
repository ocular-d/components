<template>
  <component class="image-embed">
    <figure class="image-embed-wrapper">
      <div class="image-embed-content">
        <div
          class="image"
          :class="{ 'limit-height': maxHeight }"
          :style="{ maxHeight: maxHeight ? `${maxHeight}px` : null }"
        >
          <slot></slot>
        </div>
      </div>
      <figcaption class="caption" v-if="caption">{{ caption }}</figcaption>
    </figure>
  </component>
</template>

<script>
export default {
  props: {
    // caption to be displayed beneath image
    caption: {
      type: String,
      required: false,
      default: ""
    },
    // maximum height, past which any image will be forced to scroll
    maxHeight: {
      type: Number,
      required: false
    }
  }
};
</script>

<style>
.image-embed {
  display: block;
  position: relative;
  margin-top: 2em;
  margin-bottom: 2em;
}

.image-embed-wrapper {
  margin: 0;
}

.image-embed-content {
  display: block;
  position: relative;
  box-shadow: 0 0 48px rgba(74, 124, 246, 0.1);
  background: transparent;
  border-radius: 6px;
}

.image-embed:hover {
  text-decoration: none !important;
}

.image-embed .image {
  margin: 0;
  position: relative;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
  background-color: transparent;
}

.image-embed .image.limit-height {
  overflow-x: hidden;
  overflow-y: auto;
}

.image-embed .image img {
  position: relative;
  display: block;
  max-width: 100%;
  height: auto;
}

.image-embed .caption {
  text-align: center;
  margin-top: 1em;
  font-size: 0.9em;
  color: #637599;
}
</style>
