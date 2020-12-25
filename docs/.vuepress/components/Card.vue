<template>
<div>
    <h1>Responsive column card Example</h1>
<h2>Resize the screen to see the below cards resize themselves</h2>
<div class="cardContainer">
<div class="card" style="background-color:rgb(12, 126, 120);">
<h2>First card</h2>
<p>Some text</p>
</div>
<div class="card" style="background-color:rgb(207, 41, 91);">
<h2>Second card</h2>
<p>Some text</p>
</div>
</div>
</div>
</template>

<style scoped>
.card {
      color: white;
      float: left;
      /* width: calc(25% - 20px); */
      width: 40%;
      padding: 10px;
      border-radius: 10px;
      margin: 10px;
      height: 200px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.cardContainer:after {
      content: "";
      display: table;
      clear: both;
   }

@media screen and (max-width: 900px) {
      .card {
         width: 100%;
      }
   }

</style>