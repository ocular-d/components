
<template>
  <!-- <ClientOnly> -->
  <div class="content beta-banner">
    <p>
      <span class="hide-sm">⚠️ Beta Version:</span>
      This part
      <span class="hide-sm">is</span> in development and subject to change!
    </p>
  </div>
</template>


<script>
export default {
  name: "New"
};
</script>

<style lang="stylus" scoped>
.beta-banner {
  // position: fixed;
  z-index: 21;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fab72d;
  // background-color: #fffedb;
  box-sizing: border-box;
  // border-bottom: 1px solid #eaecef;
  text-align: center;
  padding: 10px 20px;
  box-sizing: border-box;
  margin: 1rem 0;
  padding: 0.1rem 1.5rem;
  border-radius: 0.4rem;

  p {
    margin: 0;
    line-height: 1.4;
    font-size: 0.7rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @include breakpoint(700px) {
      font-size: 0.8rem;
    }
  }

  button {
    position: absolute;
    right: 1.5rem;
    border: #f60 1px solid;
    background: #f60;
    color: #fff;
    -webkit-appearance: none;
    border-radius: 99px;
    cursor: pointer;
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  @media only screen and (max-device-width: 541px) {
    .hide-sm {
      display: none;
    }

    p {
      flex: 1;
      font-size: 0.8rem;
      font-weight: normal;
    }

    button {
      position: relative;
      right: 0;
    }
  }
}
</style>
