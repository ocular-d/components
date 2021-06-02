<template>
  <footer>
    <div v-if="texto != null" class="footer">{{ texto }}</div>
    <div v-if="texto == null" class="footer">
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img
          alt="Licencia de Creative Commons"
          style="border-width:0"
          src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
        />
      </a>
      <br />

      <span
        xmlns:cc="http://creativecommons.org/ns#"
        property="cc:attributionName"
      >
      </span>
      <br />
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >Creative Commons 4.0
      </a
      >
    </div>
  </footer>
</template>

<script>
//import book from "../../../docs/book.json";
export default {
  props: {
    texto: String,
  },
  data() {
    return {
      book: book.variables,
    };
  },
  computed: {
    autores() {
      let texto = "Equipo CATEDU";
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/RegExp
      let regex = /(.*),(.*)/i;
      console.log(this.book.authors.toString());
      if (this.book.authors) {
        this.book.authors.length > 1
          ? (texto = this.book.authors.join(", ").replace(regex, "$1 y$2"))
          : (texto = this.book.authors);
      }
      return texto;
    },
  },
};
</script>

<style lang="stylus" scoped>
.footer {
  padding: 2.5rem;
  border-top: 1px solid $borderColor;
  text-align: right;
  color: lighten($textColor, 25%);
}
</style>
