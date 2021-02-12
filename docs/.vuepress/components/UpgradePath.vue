<script>
export default {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  render (h, { props, slots }) {
    return h('div',
      {
        class: ['upgrade-path']
      },
      [
        h('h4', props.title || 'Upgrade Path'),
        slots().default
      ]
    )
  }
}
</script>

<style lang="stylus">
  .upgrade-path
    margin-top: 2em
    padding: 2em
    background-color: #d6ecff;
    border-radius: 0.4rem
    > h4
      margin-top: 0
    > p:last-child
      margin-bottom: 0
      padding-bottom: 0
</style>