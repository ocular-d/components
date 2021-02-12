<template>
<div>
  <h2>Changelog</h2>
  <h4>These are the most recent updates</h4>
	<div class="article" v-for="post in recentFiles">
    <a v-bind:href="post.path">{{post.title}}</a> - {{ post.frontmatter.description }}
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	computed:{
		recentFiles() {
			let files = this.$site.pages.filter(p => {
				return p.path.indexOf('/changelog/') >= 0;
			}).sort((a,b) => {
				let aDate = new Date(a.frontmatter.published).getTime();
				let bDate = new Date(b.frontmatter.published).getTime();
				let diff = aDate - bDate;
				if(diff < 0) return 1;
				if(diff > 0) return -1;
				return 0;
			}).slice(0,3);

			return files;
		}
	}
}
</script>
<style scoped>
.article {
  margin-bottom: 20px;
  /* border-left: solid 5px #3eaf7c; */
  /* padding: 20px; */
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