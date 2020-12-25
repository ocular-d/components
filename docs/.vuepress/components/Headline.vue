<template>
  <div>
    <div class="relative mt-8 mb-4">
        <h1
          class="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-10"
        >{{$page.frontmatter.headline.text}}</h1>
        <p
          v-if="$page.frontmatter.headline.subtext"
          class="max-w-3xl mx-auto mt-4 text-xl leading-7 text-center text-gray-500"
        >{{$page.frontmatter.headline.subtext}}</p>
      </div>
      <div class="py-8 mb-8 text-center" v-if="$page.frontmatter.headline.pricingLinkText">
        <a href="https://heise.de" class="text-green-500 hover:underline">{{$page.frontmatter.headline.pricingLinkText}}</a>
      </div>
  </div>
</template>