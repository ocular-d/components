<template>
  <div>
    <h2>Round Card</h2>
    <div class="cardContainer">
    <div class="card">
      <img src="/example-image.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>Jane Doe</b></h4>
        <p>Interior Designer</p>
      </div>
    </div>
    <div class="card">
      <img src="/example-image.png" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4><b>Jane Doe</b></h4>
        <p>Interior Designer</p>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  float: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  padding: 0 10px
}

.cardContainer:after {
      content: "";
      display: table;
      clear: both;
   }

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}

@media screen and (max-width: 900px) {
      .card {
         width: 100%;
      }
   }

</style>