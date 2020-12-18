<template>
    <div>
        <a :href="src" target="_blank">Full size PDF</a>
        <object :data="src" type="application/pdf" width="100%" style="min-height:80vh">
            <iframe :src="srcUrlGoogle"></iframe>
            <parm name="view" value="FitH" />
        </object>
    </div>
</template>
<script>
export default {
    props: ['src'],
    computed: {
        srcUrlGoogle() {
            return `https://docs.google.com/viewer?url=${this.src}=true`;
        }
    }
}
</script>
