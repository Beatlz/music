var music = {
  
  diff(arrays) {
    var items = [].concat.apply(this, arguments);
    var diff = [].slice.call(items), i, l, x, pos;

    for (x = 0, i = 0, l = items.length; i < l; x = 0, i++) {
      while ((pos = diff.indexOf(items[i])) > -1) {
          diff.splice(pos, 1) && x++;
      }
      if (x === 1) diff.push(items[i]);
    }
    return diff;
  },
  
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
    
  },
  
  scales: {
    
    chromatic: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
    maj : [ 2, 4, 5, 7, 9, 11 ],
    m: [ 2, 3, 5, 7, 8, 10 ],
    blues: [ 3, 5, 6, 7, 10 ],
    harmonic: {
      M: [ 2, 3, 5, 7, 8, 11 ],
      m: [ 2, 3, 5, 7, 8, 11 ]
    },
    melodic: {
      M: [ 2, 3, 5, 7, 8, 11 ],
      m: [ 2, 3, 5, 7, 9, 11 ]
    },
    pentatonic: {
      maj: [ 2, 4, 5, 9 ],
      m: [ 3, 5, 7, 10 ]
    },
    greek: {
      ionian: [ 2, 4, 5, 7, 9, 11 ],
      dorian: [ 2, 3, 5, 7, 9, 10 ],
      phrygian: [ 1, 3, 5, 7, 8, 10 ],
      lydian: [ 2, 4, 6, 7, 9, 11 ],
      mixolydian: [ 2, 4, 5, 7, 9, 10 ],
      aeolian: [ 2, 3, 5, 7, 8, 10 ],
      locrian: [ 1, 3, 5, 6, 8, 10 ]
    }
    
  },
  
  redraw(note, prog) {
    let root = this.notes.indexOf(note);
    let a = [];
    prog.forEach((val, key) => {
      let t = val;
      if(val + root > 11) {
        t = val + root - 12;
        t -= root;
        a.push(t);
      } else {
        a.push(t);
      }
    });
    return a;
  },
  
  chord(note, chord) {
    
    let root = this.notes.indexOf(note);
    let result = [note];
    let prog = this.redraw(note, chord);
    prog.forEach((val, key) => { result.push(this.notes[root + val]) });
    return result;
    
  },
  
  scale(note, scale) {
    let root = this.notes.indexOf(note);
    let result = [note];
    let prog = this.redraw(note, scale);
    prog.forEach((val, key) => { result.push(this.notes[root + val]) });
    return result;
  },
  
  tritone(note) {
    let root = this.notes.indexOf(note);
    let result = [note];
    let tritone = this.redraw(note, [6]);
    result.push(this.notes[root + tritone[0]]);
    return result;
  },
  
  connect(note, chord) {
    let that = this;
    let ck = Object.keys(this.chords);
    let c = this.chord(note, chord);
    this.notes.forEach((val, key) => {
      if(c[0] !== val) {
        
      }
    });
  }
  
}

var x = music.connect('C', music.chords.maj);
console.log(x);