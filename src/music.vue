<template lang="html">
  <div id="music">
    <div class="main">
      
      <div class="row">
        <!-- Board -->          
        <div class="half">
          <div class="board">
            <div class="octave" style="width: 30px;">
              <p class="centered">♪</p>
              <div class="centered note" id="noteName" v-for="note in notes">{{ note }}</div>
            </div>
            <div class="octave" v-for="(pitch, octave) in 6" :id="'octave'+(octave + 3)">
              <p class="centered">{{ octave + 3 }}</p>
              <div class="note"
                   v-for="(note, key) in 12"
                   :id="notes[key].toLowerCase() + '/' + (octave + 3)"
                   @click="write(notes[key].toLowerCase() + '/' + (octave + 3))"></div>
            </div>
          </div>
        </div>

        <!-- Song -->
        <div class="half">
          <div class="row margin1">
            <span class="delete clickable" v-for="(item, index) in song" @click="song.splice(index, 1)">{{ item }}<span v-show="song.length > 0 && index < song.length - 1">,&nbsp;</span></span>
            <br><br>
            <button class="btn dark" @click="draw">Print sheet</button>
          </div>
        </div>
      </div>
      
      <!-- Guitar -->
      <div class="whole" id="guitar">
        <svg height="210" width="100%">
          <line x1="0" :y1="string * 30" x2="1280" :y2="string * 30" style="stroke: #454545; stroke-width: 1" v-for="string in 6" />
          <line x1="2" y1="0" x2="2" y2="200" style="stroke: #454545; stroke-width: 4" />
          <line :x1="200*Math.pow(fret, 0.2)" y1="0" :x2="200*Math.pow(fret, 0.2)" y2="200" style="stroke: #454545; stroke-width: 2" v-for="fret in 22"/>
        </svg>
      </div>
      
      <!-- Music sheet -->
      <div class="quarterMargin half">
        <div id="boo"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
const Vex = require('vexflow');
  
export default {

  data () {
    return {
      
      notes: [ 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', ],
      song: []
      
    }
  },

  computed: {},

  mounted () {},

  methods: {
    
    write(note) {
      this.song.push(note);
    },
    
    draw() {
      document.getElementById('boo').innerHTML = '';
      this.vex();
    },
    
    vex() {
      var VF = Vex.Flow;

      // Create an SVG renderer and attach it to the DIV element named "boo".
      var div = document.getElementById("boo")
      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

      // Configure the rendering context.
      renderer.resize(500, 500);
      var context = renderer.getContext();
      context.setFont("Helvetica", 10, "").setBackgroundFillStyle("#eed");

      // Create a stave of width 400 at position 10, 40 on the canvas.
      var stave = new VF.Stave(10, 40, 400);

      // Add a clef and time signature.
      stave.addClef("treble").addTimeSignature('4/4');

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();
      
      var notes = [];
      this.song.forEach((val, key) => {
        notes.push(new VF.StaveNote({ keys: [val], duration: 'q'}));
      });
      
      /*
      // Create the notes
      var notes = [
        // A quarter-note C.
        new VF.StaveNote({ keys: ["a/4"], duration: "q" }),

        // A quarter-note D.
        new VF.StaveNote({ keys: ["d/4"], duration: "q" }),

        // A quarter-note rest. Note that the key (b/4) specifies the vertical
        // position of the rest.
        new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),

        // A C-Major chord.
        new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
      ];*/

      // Create a voice in 4/4 and add above notes
      var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      voice.addTickables(notes);

      // Format and justify the notes to 400 pixels.
      var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

      // Render voice
      voice.draw(context, stave);
    }
    
  },

  components: {}

}
</script>

<style lang="css">
  
  #menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    color: #fff;
    font-size: 3em;
    background: rgba(48,48,48,1);
    z-index: -1;
    overflow-x: hidden;
  }
  
  #header {
    color: #fff;
    line-height: 60px;
    width: 100%;
    background: silver;
  }
  
  #guitar {
    overflow-x: scroll;
  }
  
  .board {
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 10px;
  }
  
  .octave {
    float: left;
    width: 20px;
    padding: 2px;
    overflow: auto;
    box-sizing: border-box;
  }
  
  .note {
    width: 18px;
    height: 18px;
    background: #e1e1e1;
    margin-top: 2px;
    cursor: pointer;
    transition: linear background 0.2s;
  }
  
  #noteName {
    line-height: 18px;
    text-align: center;
    background: transparent;
  }
  
</style>
