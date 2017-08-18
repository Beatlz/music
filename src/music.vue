<template lang="html">

</template>

<script>
export default {

  data () {
    return {
      
      turn: 0,
      notes: [ 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#' ],
      chords: {
        maj: [ 4, 7 ],
        m: [ 3, 7 ],
        2: [ 2, 4, 7],
        5: [ 7 ],
        6: [ 4, 7, 9 ],
        m6: [ 3, 7, 9 ],
        7: [ 4, 7, 10 ],
        maj7: [ 4, 7, 11 ],
        m7: [ 3, 7, 10 ],
        m7b5: [ 3, 6, 10 ],
        sus: [ 2, 7 ],
        sus4: [ 5, 7 ],
        9: [ 2, 4, 7, 10 ],
        maj9: [ 2, 4, 7, 11 ],
        m9: [ 2, 3, 7, 10 ],
        11: [ 2, 4, 5, 7, 10 ],
        13: [ 2, 4, 5, 7, 9, 10 ],
        dim: [ 3, 6 ],
        aug: [ 4, 8 ]
      }
      
    }
  },

  computed: {},

  mounted () {},

  methods: {},

  components: {}

}
</script>

<style lang="css">
</style>
