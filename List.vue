// List.vue

<template>
  <div>
    <div class="article" v-for="page in files">
      <a v-bind:href="page.path">{{page.title}}</a>
      <div class="keywords">
        <p>{{ page.frontmatter.description }}</p>
        <span class="keyword" v-for="key in page.frontmatter.meta.keywords">{{key}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    files() {
      return this.$site.pages
        .filter(p => { 
          return p.path.indexOf('/changelogs/') >= 0;
        });
    }
  }
}
</script>
<style scoped>
  .article {
    margin-bottom: 20px;
    border-left: solid 5px #3eaf7c;
    padding: 20px;
  }
  .keywords {
    margin-top: 10px;
  }
  .keyword {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #f3f5f7;
    margin-right: 5px;
    color: #001530;
    font-weight: 500;
  }
</style>
