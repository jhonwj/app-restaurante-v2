(self["webpackChunkrestaurante_ionic"] = self["webpackChunkrestaurante_ionic"] || []).push([["default-src_app_services_impresora_service_ts"],{

/***/ 6577:
/*!*********************************************************************************!*\
  !*** ./node_modules/@mineminemine/esc-pos-encoder-ionic/src/esc-pos-encoder.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const linewrap = __webpack_require__(/*! linewrap */ 7135);
const {createCanvas} = __webpack_require__(/*! canvas */ 7101);
const Dither = __webpack_require__(/*! canvas-dither */ 4520);
const Flatten = __webpack_require__(/*! canvas-flatten */ 759);
const CodepageEncoder = __webpack_require__(/*! codepage-encoder */ 4250);


const codepageMappings = {
  epson: {
    'cp437': 0x00,
    'shiftjis': 0x01,
    'cp850': 0x02,
    'cp860': 0x03,
    'cp863': 0x04,
    'cp865': 0x05,
    'cp851': 0x0b,
    'cp853': 0x0c,
    'cp857': 0x0d,
    'cp737': 0x0e,
    'iso88597': 0x0f,
    'windows1252': 0x10,
    'cp866': 0x11,
    'cp852': 0x12,
    'cp858': 0x13,
    'cp720': 0x20,
    'cp775': 0x21,
    'cp855': 0x22,
    'cp861': 0x23,
    'cp862': 0x24,
    'cp864': 0x25,
    'cp869': 0x26,
    'iso88592': 0x27,
    'iso885915': 0x28,
    'cp1098': 0x29,
    'cp1118': 0x2a,
    'cp1119': 0x2b,
    'cp1125': 0x2c,
    'windows1250': 0x2d,
    'windows1251': 0x2e,
    'windows1253': 0x2f,
    'windows1254': 0x30,
    'windows1255': 0x31,
    'windows1256': 0x32,
    'windows1257': 0x33,
    'windows1258': 0x34,
    'rk1048': 0x35,
  },

  zjiang: {
    'cp437': 0x00,
    'shiftjis': 0x01,
    'cp850': 0x02,
    'cp860': 0x03,
    'cp863': 0x04,
    'cp865': 0x05,
    'windows1252': 0x10,
    'cp866': 0x11,
    'cp852': 0x12,
    'cp858': 0x13,
    'windows1255': 0x20,
    'cp861': 0x38,
    'cp855': 0x3c,
    'cp857': 0x3d,
    'cp862': 0x3e,
    'cp864': 0x3f,
    'cp737': 0x40,
    'cp851': 0x41,
    'cp869': 0x42,
    'cp1119': 0x44,
    'cp1118': 0x45,
    'windows1250': 0x48,
    'windows1251': 0x49,
    'cp3840': 0x4a,
    'cp3843': 0x4c,
    'cp3844': 0x4d,
    'cp3845': 0x4e,
    'cp3846': 0x4f,
    'cp3847': 0x50,
    'cp3848': 0x51,
    'cp2001': 0x53,
    'cp3001': 0x54,
    'cp3002': 0x55,
    'cp3011': 0x56,
    'cp3012': 0x57,
    'cp3021': 0x58,
    'cp3041': 0x59,
    'windows1253': 0x5a,
    'windows1254': 0x5b,
    'windows1256': 0x5c,
    'cp720': 0x5d,
    'windows1258': 0x5e,
    'cp775': 0x5f,
  },

  bixolon: {
    'cp437': 0x00,
    'shiftjis': 0x01,
    'cp850': 0x02,
    'cp860': 0x03,
    'cp863': 0x04,
    'cp865': 0x05,
    'cp851': 0x0b,
    'cp858': 0x13,
  },

  star: {
    'cp437': 0x00,
    'shiftjis': 0x01,
    'cp850': 0x02,
    'cp860': 0x03,
    'cp863': 0x04,
    'cp865': 0x05,
    'windows1252': 0x10,
    'cp866': 0x11,
    'cp852': 0x12,
    'cp858': 0x13,
  },

  legacy: {
    'cp437': 0x00,
    'cp737': 0x40,
    'cp850': 0x02,
    'cp775': 0x5f,
    'cp852': 0x12,
    'cp855': 0x3c,
    'cp857': 0x3d,
    'cp858': 0x13,
    'cp860': 0x03,
    'cp861': 0x38,
    'cp862': 0x3e,
    'cp863': 0x04,
    'cp864': 0x1c,
    'cp865': 0x05,
    'cp866': 0x11,
    'cp869': 0x42,
    'cp936': 0xff,
    'cp949': 0xfd,
    'cp950': 0xfe,
    'cp1252': 0x10,
    'iso88596': 0x16,
    'shiftjis': 0xfc,
    'windows874': 0x1e,
    'windows1250': 0x48,
    'windows1251': 0x49,
    'windows1252': 0x47,
    'windows1253': 0x5a,
    'windows1254': 0x5b,
    'windows1255': 0x20,
    'windows1256': 0x5c,
    'windows1257': 0x19,
    'windows1258': 0x5e,
  },
};


/**
 * Create a byte stream based on commands for ESC/POS printers
 */
class EscPosEncoder {
  /**
     * Create a new object
     *
     * @param  {object}   options   Object containing configuration options
    */
  constructor(options) {
    this._reset(options);
  }

  /**
     * Reset the state of the object
     *
     * @param  {object}   options   Object containing configuration options
    */
  _reset(options) {
    this._options = Object.assign({
      width: null,
      embedded: false,
      wordWrap: true,
      imageMode: 'column',
      codepageMapping: 'epson',
      codepageCandidates: [
        'cp437', 'cp858', 'cp860', 'cp861', 'cp863', 'cp865',
        'cp852', 'cp857', 'cp855', 'cp866', 'cp869',
      ],
    }, options);

    this._embedded = this._options.width && this._options.embedded;

    this._buffer = [];
    this._queued = [];
    this._cursor = 0;
    this._codepage = 'ascii';

    this._state = {
      'codepage': 0,
      'align': 'left',
      'bold': false,
      'italic': false,
      'underline': false,
      'invert': false,
      'width': 1,
      'height': 1,
    };
  }

  /**
     * Encode a string with the current code page
     *
     * @param  {string}   value  String to encode
     * @return {object}          Encoded string as a ArrayBuffer
     *
    */
  _encode(value) {
    if (this._codepage != 'auto') {
      return CodepageEncoder.encode(this._codepage, value);
    }

    let codepages;

    if (typeof this._options.codepageMapping == 'string') {
      codepages = codepageMappings[this._options.codepageMapping];
    } else {
      codepages = this._options.codepageMapping;
    }

    const fragments = CodepageEncoder.autoEncode(value, this._options.codepageCandidates);

    let length = 0;
    for (let f = 0; f < fragments.length; f++) {
      length += 3 + fragments[f].bytes.byteLength;
    }

    const buffer = new Uint8Array(length);
    let i = 0;

    for (let f = 0; f < fragments.length; f++) {
      buffer.set([0x1b, 0x74, codepages[fragments[f].codepage]], i);
      buffer.set(fragments[f].bytes, i + 3);
      i += 3 + fragments[f].bytes.byteLength;

      this._state.codepage = codepages[fragments[f].codepage];
    }

    return buffer;
  }

  /**
     * Add commands to the queue
     *
     * @param  {array}   value  Add array of numbers, arrays, buffers or Uint8Arrays to add to the buffer
     *
    */
  _queue(value) {
    value.forEach((item) => this._queued.push(item));
  }

  /**
     * Flush current queue to the buffer
     *
    */
  _flush() {
    if (this._embedded) {
      let indent = this._options.width - this._cursor;

      if (this._state.align == 'left') {
        this._queued.push((new Array(indent)).fill(0x20));
      }

      if (this._state.align == 'center') {
        const remainder = indent % 2;
        indent = indent >> 1;

        if (indent > 0) {
          this._queued.push((new Array(indent)).fill(0x20));
        }

        if (indent + remainder > 0) {
          this._queued.unshift((new Array(indent + remainder)).fill(0x20));
        }
      }

      if (this._state.align == 'right') {
        this._queued.unshift((new Array(indent)).fill(0x20));
      }
    }

    this._buffer = this._buffer.concat(this._queued);

    this._queued = [];
    this._cursor = 0;
  }

  /**
     * Wrap the text while respecting the position of the cursor
     *
     * @param  {string}   value     String to wrap after the width of the paper has been reached
     * @param  {number}   position  Position on which to force a wrap
     * @return {array}              Array with each line
    */
  _wrap(value, position) {
    if (position || (this._options.wordWrap && this._options.width)) {
      const indent = '-'.repeat(this._cursor);
      const w = linewrap(position || this._options.width, {lineBreak: '\n', whitespace: 'all'});
      const result = w(indent + value).substring(this._cursor).split('\n');

      return result;
    }

    return [value];
  }

  /**
     * Restore styles and codepages after drawing boxes or lines
    */
  _restoreState() {
    this.bold(this._state.bold);
    this.italic(this._state.italic);
    this.underline(this._state.underline);
    this.invert(this._state.invert);

    this._queue([
      0x1b, 0x74, this._state.codepage,
    ]);
  }

  /**
     * Get code page identifier for the specified code page and mapping
     *
     * @param  {string}   codepage  Required code page
     * @return {number}             Identifier for the current printer according to the specified mapping
    */
  _getCodepageIdentifier(codepage) {
    let codepages;

    if (typeof this._options.codepageMapping == 'string') {
      codepages = codepageMappings[this._options.codepageMapping];
    } else {
      codepages = this._options.codepageMapping;
    }

    return codepages[codepage];
  }



  
  /**
     * Initialize the printer
     *
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  initialize() {
    this._queue([
      0x1b, 0x40,
    ]);

    this._flush();

    return this;
  }

  /**
     * Change the code page
     *
     * @param  {string}   codepage  The codepage that we set the printer to
     * @return {object}             Return the object, for easy chaining commands
     *
     */
  codepage(codepage) {
    if (codepage === 'auto') {
      this._codepage = codepage;
      return this;
    }

    if (!CodepageEncoder.supports(codepage)) {
      throw new Error('Unknown codepage');
    }

    let codepages;

    if (typeof this._options.codepageMapping == 'string') {
      codepages = codepageMappings[this._options.codepageMapping];
    } else {
      codepages = this._options.codepageMapping;
    }

    if (typeof codepages[codepage] !== 'undefined') {
      this._codepage = codepage;
      this._state.codepage = codepages[codepage];

      this._queue([
        0x1b, 0x74, codepages[codepage],
      ]);
    } else {
      throw new Error('Codepage not supported by printer');
    }

    return this;
  }

  /**
     * Print text
     *
     * @param  {string}   value  Text that needs to be printed
     * @param  {number}   wrap   Wrap text after this many positions
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  text(value, wrap) {
    const lines = this._wrap(value, wrap);

    for (let l = 0; l < lines.length; l++) {
      const bytes = this._encode(lines[l]);

      this._queue([
        bytes,
      ]);

      this._cursor += (lines[l].length * this._state.width);

      if (this._options.width && !this._embedded) {
        this._cursor = this._cursor % this._options.width;
      }

      if (l < lines.length - 1) {
        this.newline();
      }
    }

    return this;
  }

  /**
     * Print a newline
     *
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  newline() {
    this._flush();

    this._queue([
      0x0a, 0x0d,
    ]);

    if (this._embedded) {
      this._restoreState();
    }

    return this;
  }

  /**
     * Print text, followed by a newline
     *
     * @param  {string}   value  Text that needs to be printed
     * @param  {number}   wrap   Wrap text after this many positions
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  line(value, wrap) {
    this.text(value, wrap);
    this.newline();

    return this;
  }

  /**
     * Underline text
     *
     * @param  {boolean|number}   value  true to turn on underline, false to turn off, or 2 for double underline
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  underline(value) {
    if (typeof value === 'undefined') {
      value = ! this._state.underline;
    }

    this._state.underline = value;

    this._queue([
      0x1b, 0x2d, Number(value),
    ]);

    return this;
  }

  /**
     * Italic text
     *
     * @param  {boolean}          value  true to turn on italic, false to turn off
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  italic(value) {
    if (typeof value === 'undefined') {
      value = ! this._state.italic;
    }

    this._state.italic = value;

    this._queue([
      0x1b, 0x34, Number(value),
    ]);

    return this;
  }

  /**
     * Bold text
     *
     * @param  {boolean}          value  true to turn on bold, false to turn off
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  bold(value) {
    if (typeof value === 'undefined') {
      value = ! this._state.bold;
    }

    this._state.bold = value;

    this._queue([
      0x1b, 0x45, Number(value),
    ]);

    return this;
  }

  /**
     * Change width of text
     *
     * @param  {number}          width    The width of the text, 1 - 8
     * @return {object}                   Return the object, for easy chaining commands
     *
     */
  width(width) {
    if (typeof width === 'undefined') {
      width = 1;
    }

    if (typeof width !== 'number') {
      throw new Error('Width must be a number');
    }

    if (width < 1 || width > 8) {
      throw new Error('Width must be between 1 and 8');
    }

    this._state.width = width;

    this._queue([
      0x1d, 0x21, (this._state.height - 1) | (this._state.width - 1) << 4,
    ]);

    return this;
  }

  /**
     * Change height of text
     *
     * @param  {number}          height  The height of the text, 1 - 8
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  height(height) {
    if (typeof height === 'undefined') {
      height = 1;
    }

    if (typeof height !== 'number') {
      throw new Error('Height must be a number');
    }

    if (height < 1 || height > 8) {
      throw new Error('Height must be between 1 and 8');
    }

    this._state.height = height;

    this._queue([
      0x1d, 0x21, (this._state.height - 1) | (this._state.width - 1) << 4,
    ]);

    return this;
  }

  /**
     * Invert text
     *
     * @param  {boolean}          value  true to turn on white text on black, false to turn off
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  invert(value) {
    if (typeof value === 'undefined') {
      value = ! this._state.invert;
    }

    this._state.invert = value;

    this._queue([
      0x1d, 0x42, Number(value),
    ]);

    return this;
  }

  /**
     * Change text size
     *
     * @param  {string}          value   small or normal
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  size(value) {
    if (value === 'small') {
      value = 0x01;
    } else {
      value = 0x00;
    }

    this._queue([
      0x1b, 0x4d, value,
    ]);

    return this;
  }

  /**
     * Change text alignment
     *
     * @param  {string}          value   left, center or right
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  align(value) {
    const alignments = {
      'left': 0x00,
      'center': 0x01,
      'right': 0x02,
    };

    if (value in alignments) {
      this._state.align = value;

      if (!this._embedded) {
        this._queue([
          0x1b, 0x61, alignments[value],
        ]);
      }
    } else {
      throw new Error('Unknown alignment');
    }

    return this;
  }

  /**
     * Insert a table
     *
     * @param  {array}           columns  The column definitions
     * @param  {array}           data     Array containing rows. Each row is an array containing cells.
     *                                    Each cell can be a string value, or a callback function.
     *                                    The first parameter of the callback is the encoder object on
     *                                    which the function can call its methods.
     * @return {object}                   Return the object, for easy chaining commands
     *
     */
  table(columns, data) {
    if (this._cursor != 0) {
      this.newline();
    }

    for (let r = 0; r < data.length; r++) {
      const lines = [];
      let maxLines = 0;

      for (let c = 0; c < columns.length; c++) {
        const cell = [];

        if (typeof data[r][c] === 'string') {
          const w = linewrap(columns[c].width, {lineBreak: '\n'});
          const fragments = w(data[r][c]).split('\n');

          for (let f = 0; f < fragments.length; f++) {
            if (columns[c].align == 'right') {
              cell[f] = this._encode(fragments[f].padStart(columns[c].width));
            } else {
              cell[f] = this._encode(fragments[f].padEnd(columns[c].width));
            }
          }
        }

        if (typeof data[r][c] === 'function') {
          const columnEncoder = new EscPosEncoder(Object.assign({}, this._options, {
            width: columns[c].width,
            embedded: true,
          }));

          columnEncoder._codepage = this._codepage;
          columnEncoder.align(columns[c].align);
          data[r][c](columnEncoder);
          const encoded = columnEncoder.encode();

          let fragment = [];

          for (let e = 0; e < encoded.byteLength; e++) {
            if (e < encoded.byteLength - 1) {
              if (encoded[e] === 0x0a && encoded[e + 1] === 0x0d) {
                cell.push(fragment);
                fragment = [];

                e++;
                continue;
              }
            }

            fragment.push(encoded[e]);
          }

          if (fragment.length) {
            cell.push(fragment);
          }
        }

        maxLines = Math.max(maxLines, cell.length);
        lines[c] = cell;
      }

      for (let c = 0; c < columns.length; c++) {
        if (lines[c].length < maxLines) {
          for (let p = lines[c].length; p < maxLines; p++) {
            let verticalAlign = 'top';
            if (typeof columns[c].verticalAlign !== 'undefined') {
              verticalAlign = columns[c].verticalAlign;
            }

            if (verticalAlign == 'bottom') {
              lines[c].unshift((new Array(columns[c].width)).fill(0x20));
            } else {
              lines[c].push((new Array(columns[c].width)).fill(0x20));
            }
          }
        }
      }

      for (let l = 0; l < maxLines; l++) {
        for (let c = 0; c < columns.length; c++) {
          if (typeof columns[c].marginLeft !== 'undefined') {
            this.raw((new Array(columns[c].marginLeft)).fill(0x20));
          }

          this.raw(lines[c][l]);

          if (typeof columns[c].marginRight !== 'undefined') {
            this.raw((new Array(columns[c].marginRight)).fill(0x20));
          }
        }

        this.newline();
      }
    }

    return this;
  }

  /**
     * Insert a horizontal rule
     *
     * @param  {object}          options  And object with the following properties:
     *                                    - style: The style of the line, either single or double
     *                                    - width: The width of the line, by default the width of the paper
     * @return {object}                   Return the object, for easy chaining commands
     *
     */
  rule(options) {
    options = Object.assign({
      style: 'single',
      width: this._options.width || 10,
    }, options || {});

    this._queue([
      0x1b, 0x74, this._getCodepageIdentifier('cp437'),
      (new Array(options.width)).fill(options.style === 'double' ? 0xcd : 0xc4),
    ]);

    this._queue([
      0x1b, 0x74, this._state.codepage,
    ]);

    this.newline();

    return this;
  }

  /**
     * Insert a horizontal rule
     *
     * @param  {object}           options   And object with the following properties:
     *                                      - style: The style of the border, either single or double
     *                                      - width: The width of the box, by default the width of the paper, if specified
     *                                      - marginLeft: Space between the left border and the left side of the paper
     *                                      - marginRight: Space between the right border and the right side of the paper
     *                                      - paddingLeft: Space between the contents and the left border of the box
     *                                      - paddingRight: Space between the contents and the right border of the box
     * @param  {string|function}  contents  A string value, or a callback function.
     *                                      The first parameter of the callback is the encoder object on
     *                                      which the function can call its methods.
     * @return {object}                     Return the object, for easy chaining commands
     *
     */
  box(options, contents) {
    options = Object.assign({
      style: 'single',
      width: this._options.width || 30,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    }, options || {});

    let elements;

    if (options.style == 'double') {
      elements = [0xc9, 0xbb, 0xc8, 0xbc, 0xcd, 0xba]; // ╔╗╚╝═║
    } else {
      elements = [0xda, 0xbf, 0xc0, 0xd9, 0xc4, 0xb3]; // ┌┐└┘─│
    }

    if (this._cursor != 0) {
      this.newline();
    }

    this._restoreState();

    this._queue([
      0x1b, 0x74, this._getCodepageIdentifier('cp437'),
    ]);

    this._queue([
      new Array(options.marginLeft).fill(0x20),
      elements[0],
      new Array(options.width - 2).fill(elements[4]),
      elements[1],
      new Array(options.marginRight).fill(0x20),
    ]);

    this.newline();

    const cell = [];

    if (typeof contents === 'string') {
      const w = linewrap(options.width - 2 - options.paddingLeft - options.paddingRight, {lineBreak: '\n'});
      const fragments = w(contents).split('\n');

      for (let f = 0; f < fragments.length; f++) {
        if (options.align == 'right') {
          cell[f] = this._encode(fragments[f].padStart(options.width - 2 - options.paddingLeft - options.paddingRight));
        } else {
          cell[f] = this._encode(fragments[f].padEnd(options.width - 2 - options.paddingLeft - options.paddingRight));
        }
      }
    }

    if (typeof contents === 'function') {
      const columnEncoder = new EscPosEncoder(Object.assign({}, this._options, {
        width: options.width - 2 - options.paddingLeft - options.paddingRight,
        embedded: true,
      }));

      columnEncoder._codepage = this._codepage;
      columnEncoder.align(options.align);
      contents(columnEncoder);
      const encoded = columnEncoder.encode();

      let fragment = [];

      for (let e = 0; e < encoded.byteLength; e++) {
        if (e < encoded.byteLength - 1) {
          if (encoded[e] === 0x0a && encoded[e + 1] === 0x0d) {
            cell.push(fragment);
            fragment = [];

            e++;
            continue;
          }
        }

        fragment.push(encoded[e]);
      }

      if (fragment.length) {
        cell.push(fragment);
      }
    }

    for (let c = 0; c < cell.length; c++) {
      this._queue([
        new Array(options.marginLeft).fill(0x20),
        elements[5],
        new Array(options.paddingLeft).fill(0x20),
      ]);

      this._queue([
        cell[c],
      ]);

      this._restoreState();

      this._queue([
        0x1b, 0x74, this._getCodepageIdentifier('cp437'),
      ]);

      this._queue([
        new Array(options.paddingRight).fill(0x20),
        elements[5],
        new Array(options.marginRight).fill(0x20),
      ]);

      this.newline();
    }

    this._queue([
      new Array(options.marginLeft).fill(0x20),
      elements[2],
      new Array(options.width - 2).fill(elements[4]),
      elements[3],
      new Array(options.marginRight).fill(0x20),
    ]);

    this._restoreState();

    this.newline();

    return this;
  }

  /**
     * Barcode
     *
     * @param  {string}           value  the value of the barcode
     * @param  {string}           symbology  the type of the barcode
     * @param  {number}           height  height of the barcode
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  barcode(value, symbology, height) {
    if (this._embedded) {
      throw new Error('Barcodes are not supported in table cells or boxes');
    }

    const symbologies = {
      'upca': 0x00,
      'upce': 0x01,
      'ean13': 0x02,
      'ean8': 0x03,
      'code39': 0x04,
      'coda39': 0x04, /* typo, leave here for backwards compatibility */
      'itf': 0x05,
      'codabar': 0x06,
      'code93': 0x48,
      'code128': 0x49,
      'gs1-128': 0x50,
      'gs1-databar-omni': 0x51,
      'gs1-databar-truncated': 0x52,
      'gs1-databar-limited': 0x53,
      'gs1-databar-expanded': 0x54,
      'code128-auto': 0x55,
    };

    if (symbology in symbologies) {
      const bytes = CodepageEncoder.encode('ascii', value);

      if (this._cursor != 0) {
        this.newline();
      }

      this._queue([
        0x1d, 0x68, height,
        0x1d, 0x77, symbology === 'code39' ? 0x02 : 0x03,
      ]);

      if (symbology == 'code128' && bytes[0] !== 0x7b) {
        /* Not yet encodeded Code 128, assume data is Code B, which is similar to ASCII without control chars */

        this._queue([
          0x1d, 0x6b, symbologies[symbology],
          bytes.length + 2,
          0x7b, 0x42,
          bytes,
        ]);
      } else if (symbologies[symbology] > 0x40) {
        /* Function B symbologies */

        this._queue([
          0x1d, 0x6b, symbologies[symbology],
          bytes.length,
          bytes,
        ]);
      } else {
        /* Function A symbologies */

        this._queue([
          0x1d, 0x6b, symbologies[symbology],
          bytes,
          0x00,
        ]);
      }
    } else {
      throw new Error('Symbology not supported by printer');
    }

    this._flush();

    return this;
  }

  /**
     * QR code
     *
     * @param  {string}           value  the value of the qr code
     * @param  {number}           model  model of the qrcode, either 1 or 2
     * @param  {number}           size   size of the qrcode, a value between 1 and 8
     * @param  {string}           errorlevel  the amount of error correction used, either 'l', 'm', 'q', 'h'
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  qrcode(value, model, size, errorlevel) {
    if (this._embedded) {
      throw new Error('QR codes are not supported in table cells or boxes');
    }

    /* Force printing the print buffer and moving to a new line */

    this._queue([
      0x0a,
    ]);

    /* Model */

    const models = {
      1: 0x31,
      2: 0x32,
    };

    if (typeof model === 'undefined') {
      model = 2;
    }

    if (model in models) {
      this._queue([
        0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, models[model], 0x00,
      ]);
    } else {
      throw new Error('Model must be 1 or 2');
    }

    /* Size */

    if (typeof size === 'undefined') {
      size = 6;
    }

    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }

    if (size < 1 || size > 8) {
      throw new Error('Size must be between 1 and 8');
    }

    this._queue([
      0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, size,
    ]);

    /* Error level */

    const errorlevels = {
      'l': 0x30,
      'm': 0x31,
      'q': 0x32,
      'h': 0x33,
    };

    if (typeof errorlevel === 'undefined') {
      errorlevel = 'm';
    }

    if (errorlevel in errorlevels) {
      this._queue([
        0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, errorlevels[errorlevel],
      ]);
    } else {
      throw new Error('Error level must be l, m, q or h');
    }

    /* Data */

    const bytes = CodepageEncoder.encode('iso88591', value);
    const length = bytes.length + 3;

    this._queue([
      0x1d, 0x28, 0x6b, length % 0xff, length / 0xff, 0x31, 0x50, 0x30, bytes,
    ]);

    /* Print QR code */

    this._queue([
      0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x51, 0x30,
    ]);

    this._flush();

    return this;
  }

  /**
     * Image
     *
     * @param  {object}         element  an element, like a canvas or image that needs to be printed
     * @param  {number}         width  width of the image on the printer
     * @param  {number}         height  height of the image on the printer
     * @param  {string}         algorithm  the dithering algorithm for making the image black and white
     * @param  {number}         threshold  threshold for the dithering algorithm
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  image(element, width, height, algorithm, threshold) {
    if (this._embedded) {
      throw new Error('Images are not supported in table cells or boxes');
    }

    if (width % 8 !== 0) {
      throw new Error('Width must be a multiple of 8');
    }

    if (height % 8 !== 0) {
      throw new Error('Height must be a multiple of 8');
    }

    if (typeof algorithm === 'undefined') {
      algorithm = 'threshold';
    }

    if (typeof threshold === 'undefined') {
      threshold = 128;
    }

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    context.drawImage(element, 0, 0, width, height);
    let image = context.getImageData(0, 0, width, height);

    image = Flatten.flatten(image, [0xff, 0xff, 0xff]);

    switch (algorithm) {
      case 'threshold': image = Dither.threshold(image, threshold); break;
      case 'bayer': image = Dither.bayer(image, threshold); break;
      case 'floydsteinberg': image = Dither.floydsteinberg(image); break;
      case 'atkinson': image = Dither.atkinson(image); break;
    }

    const getPixel = (x, y) => x < width && y < height ? (image.data[((width * y) + x) * 4] > 0 ? 0 : 1) : 0;

    const getColumnData = (width, height) => {
      const data = [];

      for (let s = 0; s < Math.ceil(height / 24); s++) {
        const bytes = new Uint8Array(width * 3);

        for (let x = 0; x < width; x++) {
          for (let c = 0; c < 3; c++) {
            for (let b = 0; b < 8; b++) {
              bytes[(x * 3) + c] |= getPixel(x, (s * 24) + b + (8 * c)) << (7 - b);
            }
          }
        }

        data.push(bytes);
      }

      return data;
    };

    const getRowData = (width, height) => {
      const bytes = new Uint8Array((width * height) >> 3);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x = x + 8) {
          for (let b = 0; b < 8; b++) {
            bytes[(y * (width >> 3)) + (x >> 3)] |= getPixel(x + b, y) << (7 - b);
          }
        }
      }

      return bytes;
    };


    if (this._cursor != 0) {
      this.newline();
    }

    /* Encode images with ESC * */

    if (this._options.imageMode == 'column') {
      this._queue([
        0x1b, 0x33, 0x24,
      ]);

      getColumnData(width, height).forEach((bytes) => {
        this._queue([
          0x1b, 0x2a, 0x21,
          (width) & 0xff, (((width) >> 8) & 0xff),
          bytes,
          0x0a,
        ]);
      });

      this._queue([
        0x1b, 0x32,
      ]);
    }

    /* Encode images with GS v */

    if (this._options.imageMode == 'raster') {
      this._queue([
        0x1d, 0x76, 0x30, 0x00,
        (width >> 3) & 0xff, (((width >> 3) >> 8) & 0xff),
        height & 0xff, ((height >> 8) & 0xff),
        getRowData(width, height),
      ]);
    }

    this._flush();

    return this;
  }

  /**
     * Cut paper
     *
     * @param  {string}          value   full or partial. When not specified a full cut will be assumed
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  cut(value) {
    if (this._embedded) {
      throw new Error('Cut is not supported in table cells or boxes');
    }

    let data = 0x00;

    if (value == 'partial') {
      data = 0x01;
    }

    this._queue([
      0x1d, 0x56, data,
    ]);

    return this;
  }

  /**
     * Pulse
     *
     * @param  {number}          device  0 or 1 for on which pin the device is connected, default of 0
     * @param  {number}          on      Time the pulse is on in milliseconds, default of 100
     * @param  {number}          off     Time the pulse is off in milliseconds, default of 500
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
  pulse(device, on, off) {
    if (this._embedded) {
      throw new Error('Pulse is not supported in table cells or boxes');
    }

    if (typeof device === 'undefined') {
      device = 0;
    }

    if (typeof on === 'undefined') {
      on = 100;
    }

    if (typeof off === 'undefined') {
      off = 500;
    }

    on = Math.min(500, Math.round(on / 2));
    off = Math.min(500, Math.round(off / 2));

    this._queue([
      0x1b, 0x70, device ? 1 : 0, on & 0xff, off & 0xff,
    ]);

    return this;
  }

  /**
     * Add raw printer commands
     *
     * @param  {array}           data   raw bytes to be included
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  raw(data) {
    this._queue(data);

    return this;
  }

  /**
     * Encode all previous commands
     *
     * @return {Uint8Array}         Return the encoded bytes
     *
     */
  encode() {
    this._flush();

    let length = 0;

    this._buffer.forEach((item) => {
      if (typeof item === 'number') {
        length++;
      } else {
        length += item.length;
      }
    });

    const result = new Uint8Array(length);

    let index = 0;

    this._buffer.forEach((item) => {
      if (typeof item === 'number') {
        result[index] = item;
        index++;
      } else {
        result.set(item, index);
        index += item.length;
      }
    });

    this._reset();

    return result;
  }
}

module.exports = EscPosEncoder;

/***/ }),

/***/ 4520:
/*!*********************************************************!*\
  !*** ./node_modules/canvas-dither/src/canvas-dither.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Use the ImageData from a Canvas and turn the image in a 1-bit black and white image using dithering
 */
class CanvasDither {
  /**
     * Change the image to grayscale
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @return {object}                 The resulting imageData
     *
     */
  grayscale(image) {
    for (let i = 0; i < image.data.length; i += 4) {
      const luminance = (image.data[i] * 0.299) + (image.data[i + 1] * 0.587) + (image.data[i + 2] * 0.114);
      image.data.fill(luminance, i, i + 3);
    }

    return image;
  }

  /**
     * Change the image to blank and white using a simple threshold
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @param  {number}   threshold     Threshold value (0-255)
     * @return {object}                 The resulting imageData
     *
     */
  threshold(image, threshold) {
    for (let i = 0; i < image.data.length; i += 4) {
      const luminance = (image.data[i] * 0.299) + (image.data[i + 1] * 0.587) + (image.data[i + 2] * 0.114);

      const value = luminance < threshold ? 0 : 255;
      image.data.fill(value, i, i + 3);
    }

    return image;
  }

  /**
     * Change the image to blank and white using the Bayer algorithm
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @param  {number}   threshold     Threshold value (0-255)
     * @return {object}                 The resulting imageData
     *
     */
  bayer(image, threshold) {
    const thresholdMap = [
      [15, 135, 45, 165],
      [195, 75, 225, 105],
      [60, 180, 30, 150],
      [240, 120, 210, 90],
    ];

    for (let i = 0; i < image.data.length; i += 4) {
      const luminance = (image.data[i] * 0.299) + (image.data[i + 1] * 0.587) + (image.data[i + 2] * 0.114);

      const x = i / 4 % image.width;
      const y = Math.floor(i / 4 / image.width);
      const map = Math.floor((luminance + thresholdMap[x % 4][y % 4]) / 2);
      const value = map < threshold ? 0 : 255;
      image.data.fill(value, i, i + 3);
    }

    return image;
  }

  /**
     * Change the image to blank and white using the Floyd-Steinberg algorithm
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @return {object}                 The resulting imageData
     *
     */
  floydsteinberg(image) {
    const width = image.width;
    const luminance = new Uint8ClampedArray(image.width * image.height);

    for (let l = 0, i = 0; i < image.data.length; l++, i += 4) {
      luminance[l] = (image.data[i] * 0.299) + (image.data[i + 1] * 0.587) + (image.data[i + 2] * 0.114);
    }

    for (let l = 0, i = 0; i < image.data.length; l++, i += 4) {
      const value = luminance[l] < 129 ? 0 : 255;
      const error = Math.floor((luminance[l] - value) / 16);
      image.data.fill(value, i, i + 3);

      luminance[l + 1] += error * 7;
      luminance[l + width - 1] += error * 3;
      luminance[l + width] += error * 5;
      luminance[l + width + 1] += error * 1;
    }

    return image;
  }

  /**
     * Change the image to blank and white using the Atkinson algorithm
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @return {object}                 The resulting imageData
     *
     */
  atkinson(image) {
    const width = image.width;
    const luminance = new Uint8ClampedArray(image.width * image.height);

    for (let l = 0, i = 0; i < image.data.length; l++, i += 4) {
      luminance[l] = (image.data[i] * 0.299) + (image.data[i + 1] * 0.587) + (image.data[i + 2] * 0.114);
    }

    for (let l = 0, i = 0; i < image.data.length; l++, i += 4) {
      const value = luminance[l] < 129 ? 0 : 255;
      const error = Math.floor((luminance[l] - value) / 8);
      image.data.fill(value, i, i + 3);

      luminance[l + 1] += error;
      luminance[l + 2] += error;
      luminance[l + width - 1] += error;
      luminance[l + width] += error;
      luminance[l + width + 1] += error;
      luminance[l + 2 * width] += error;
    }

    return image;
  }
}

module.exports = new CanvasDither();


/***/ }),

/***/ 759:
/*!***********************************************************!*\
  !*** ./node_modules/canvas-flatten/src/canvas-flatten.js ***!
  \***********************************************************/
/***/ ((module) => {

/**
 * Use the ImageData from a Canvas and flatten the image on a solid background
 */
class CanvasFlatten {
  /**
     * Change the image to grayscale
     *
     * @param  {object}   image         The imageData of a Canvas 2d context
     * @param  {array}    background    Three values consisting of the r, g, b of the background
     * @return {object}                 The resulting imageData
     *
     */
  flatten(image, background) {
    for (let i = 0; i < image.data.length; i += 4) {
      const alpha = image.data[i + 3];
      const invAlpha = 255 - alpha;

      image.data[i] = (alpha * image.data[i] + invAlpha * background[0]) / 255;
      image.data[i + 1] = (alpha * image.data[i + 1] + invAlpha * background[1]) / 255;
      image.data[i + 2] = (alpha * image.data[i + 2] + invAlpha * background[2]) / 255;
      image.data[i + 3] = 0xff;
    }

    return image;
  }
}

module.exports = new CanvasFlatten();


/***/ }),

/***/ 7101:
/*!****************************************!*\
  !*** ./node_modules/canvas/browser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* globals document, ImageData */

const parseFont = __webpack_require__(/*! ./lib/parse-font */ 8744)

exports.parseFont = parseFont

exports.createCanvas = function (width, height) {
  return Object.assign(document.createElement('canvas'), { width: width, height: height })
}

exports.createImageData = function (array, width, height) {
  // Browser implementation of ImageData looks at the number of arguments passed
  switch (arguments.length) {
    case 0: return new ImageData()
    case 1: return new ImageData(array)
    case 2: return new ImageData(array, width)
    default: return new ImageData(array, width, height)
  }
}

exports.loadImage = function (src, options) {
  return new Promise(function (resolve, reject) {
    const image = Object.assign(document.createElement('img'), options)

    function cleanup () {
      image.onload = null
      image.onerror = null
    }

    image.onload = function () { cleanup(); resolve(image) }
    image.onerror = function () { cleanup(); reject(new Error('Failed to load the image "' + src + '"')) }

    image.src = src
  })
}


/***/ }),

/***/ 8744:
/*!***********************************************!*\
  !*** ./node_modules/canvas/lib/parse-font.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00'
const styles = 'italic|oblique'
const variants = 'small-caps'
const stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
const units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
const string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp(`(${weights}) +`, 'i')
const styleRe = new RegExp(`(${styles}) +`, 'i')
const variantRe = new RegExp(`(${variants}) +`, 'i')
const stretchRe = new RegExp(`(${stretches}) +`, 'i')
const sizeFamilyRe = new RegExp(
  `([\\d\\.]+)(${units}) *((?:${string})( *, *(?:${string}))*)`)

/**
 * Cache font parsing.
 */

const cache = {}

const defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = str => {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  let weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  const substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),

/***/ 4250:
/*!***************************************************************!*\
  !*** ./node_modules/codepage-encoder/src/codepage-encoder.js ***!
  \***************************************************************/
/***/ ((module) => {

const definitions = {
  'cp437': {
    name: 'USA, Standard Europe',
    languages: ['en'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp720': {
    name: 'Arabic',
    languages: ['ar'],
    offset: 128,
    chars: '\x80\x81éâ\x84à\x86çêëèïî\x8d\x8e\x8f\x90\u0651\u0652ô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡\u064b\u064c\u064d\u064e\u064f\u0650≈°∙·√ⁿ²■\u00a0',
  },
  'cp737': {
    name: 'Greek',
    languages: ['el'],
    offset: 128,
    chars: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ',
  },
  'cp775': {
    name: 'Baltic Rim',
    languages: ['et', 'lt'],
    offset: 128,
    chars: 'ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ ',
  },
  'cp850': {
    name: 'Multilingual',
    languages: ['en'],
    offset: 128,
    chars: 'ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ',
  },
  'cp851': {
    name: 'Greek',
    languages: ['el'],
    offset: 128,
    chars: 'ÇüéâäàΆçêëèïîΈÄΉΊ ΌôöΎûùΏÖÜά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ´­±υφχ§ψ¸°¨ωϋΰώ■ ',
  },
  'cp852': {
    name: 'Latin 2',
    languages: ['hu', 'pl', 'cz'],
    offset: 128,
    chars: 'ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ',
  },
  'cp853': {
    name: 'Turkish',
    languages: ['tr'],
    offset: 128,
    chars: 'ÇüéâäàĉçêëèïîìÄĈÉċĊôöòûùİÖÜĝ£Ĝ×ĵáíóúñÑĞğĤĥ�½Ĵş«»░▒▓│┤ÁÂÀŞ╣║╗╝Żż┐└┴┬├─┼Ŝŝ╚╔╩╦╠═╬¤��ÊËÈıÍÎÏ┘┌█▄�Ì▀ÓßÔÒĠġµĦħÚÛÙŬŭ�´­�ℓŉ˘§÷¸°¨˙�³²■ ',
  },
  'cp855': {
    name: 'Cyrillic',
    languages: ['bg'],
    offset: 128,
    chars: 'ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ ',
  },
  'cp857': {
    name: 'Turkish',
    languages: ['tr'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ',
  },
  'cp858': {
    name: 'Euro',
    languages: ['en'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ',
  },
  'cp860': {
    name: 'Portuguese',
    languages: ['pt'],
    offset: 128,
    chars: 'ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp861': {
    name: 'Icelandic',
    languages: ['is'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp862': {
    name: 'Hebrew',
    languages: ['he'],
    offset: 128,
    chars: 'אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp863': {
    name: 'Canadian French',
    languages: ['fr'],
    offset: 128,
    chars: 'ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp864': {
    name: 'Arabic',
    languages: ['ar'],
    offset: 0,
    chars: '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !"#$٪&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�',
  },
  'cp865': {
    name: 'Nordic',
    languages: ['sv', 'dk'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp866': {
    name: 'Cyrillic 2',
    languages: ['ru'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ',
  },
  'cp869': {
    name: 'Greek',
    languages: ['el'],
    offset: 128,
    chars: '������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ ',
  },
  'cp874': {
    name: 'Thai',
    languages: ['th'],
    offset: 128,
    chars: '€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����',
  },
  'cp1098': {
    name: 'Farsi',
    languages: ['fa'],
    offset: 128,
    chars: '\u0020\u0020\u060c\u061b\u061f\u064b\u0622\ufe82\uf8fa\u0627\ufe8e\uf8fb\u0621\u0623\ufe84\uf8f9\u0624\ufe8b\u0628\ufe91\ufb56\ufb58\u062a\ufe97\u062b\ufe9b\u062c\ufe9f\ufb7a\ufb7c\u00d7\u062d\ufea3\u062e\ufea7\u062f\u0630\u0631\u0632\ufb8a\u0633\ufeb3\u0634\ufeb7\u0635\ufebb\u00ab\u00bb\u2591\u2592\u2593\u2502\u2524\u0636\ufebf\ufec1\ufec3\u2563\u2551\u2557\u255d\u00a4\ufec5\u2510\u2514\u2534\u252c\u251c\u2500\u253c\ufec7\u0639\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u0020\ufeca\ufecb\ufecc\u063a\ufece\ufecf\ufed0\u0641\ufed3\u2518\u250c\u2588\u2584\u0642\ufed7\u2580\ufb8e\ufedb\ufb92\ufb94\u0644\ufedf\u0645\ufee3\u0646\ufee7\u0648\u0647\ufeeb\ufeec\ufba4\ufbfc\u00ad\ufbfd\ufbfe\u0640\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u25a0\u00a0',
  },
  'cp1118': {
    name: 'Lithuanian',
    languages: ['lt'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀αβΓπΣσµτΦΘΩδ∞φε⋂≡±≥≤„“÷≈°∙˙√ⁿ²■ ',
  },
  'cp1119': {
    name: 'Lithuanian',
    languages: ['lt'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁё≥≤„“÷≈°∙·√ⁿ²■ ',
  },
  'cp1125': {
    name: 'Ukrainian',
    languages: ['uk'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ ',
  },
  'cp1162': {
    name: 'Thai',
    languages: ['th'],
    offset: 128,
    chars: '€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����',
  },
  'cp2001': {
    name: 'Lithuanian KBL or 771',
    languages: ['lt'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█ĄąČčрстуфхцчшщъыьэюяĘęĖėĮįŠšŲųŪūŽž■ ',
  },
  'cp3001': {
    name: 'Estonian 1 or 1116',
    languages: ['et'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤šŠÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµžŽÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ',
  },
  'cp3002': {
    name: 'Estonian 2',
    languages: ['et'],
    offset: 128,
    chars: ' ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ',
  },
  'cp3011': {
    name: 'Latvian 1',
    languages: ['lv'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤Ā╢ņ╕╣║╗╝╜╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀αßΓπΣσµτΦΘΩδ∞φε∩ĒēĢķĶļĻžŽ∙·√Ņš■ ',
  },
  'cp3012': {
    name: 'Latvian 2 (modified 866)',
    languages: ['lv'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤Ā╢ņ╕╣║╗╝Ō╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀рстуфхцчшщъыьэюяĒēĢķĶļĻžŽō·√Ņš■ ',
  },
  'cp3021': {
    name: 'Bulgarian (MIK)',
    languages: ['bg'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3041': {
    name: 'Maltese ISO 646',
    languages: ['mt'],
    offset: 0,
    chars: '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZġżħ^_ċabcdefghijklmnopqrstuvwxyzĠŻĦĊ\u007F',
  },
  'cp3840': {
    name: 'Russian (modified 866)',
    languages: ['ru'],
    offset: 128,
    chars: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюя≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3841': {
    name: 'Ghost',
    languages: ['ru'],
    offset: 128,
    chars: 'ғәёіїјҝөўүӽӈҹҷє£ҒӘЁІЇЈҜӨЎҮӼӇҸҶЄЪ !"#$%&\'()*+,-./0123456789:;<=>?юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧ∅',
  },
  'cp3843': {
    name: 'Polish (Mazovia)',
    languages: ['pl'],
    offset: 128,
    chars: 'ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3844': {
    name: 'Czech (Kamenický)',
    languages: ['cz'],
    offset: 128,
    chars: 'ČüéďäĎŤčěĚĹÍľĺÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3845': {
    name: 'Hungarian (CWI-2)',
    languages: ['hu'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîÍÄÁÉæÆőöÓűÚŰÖÜ¢£¥₧ƒáíóúñÑªŐ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3846': {
    name: 'Turkish',
    languages: ['tr'],
    offset: 128,
    chars: 'ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜ¢£¥ŞşáíóúñÑĞğ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ',
  },
  'cp3847': {
    name: 'Brazil ABNT',
    languages: ['pt'],
    offset: 256,
    chars: '',
  },
  'cp3848': {
    name: 'Brazil ABICOMP',
    languages: ['pt'],
    offset: 160,
    chars: ' ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖŒÙÚÛÜŸ¨£¦§°¡àáâãäçèéêëìíîïñòóôõöœùúûüÿßªº¿±',
  },
  'iso88591': {
    name: 'Latin 1',
    languages: ['en'],
    offset: 128,
    chars: ' ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ',
  },
  'iso88592': {
    name: 'Latin 2',
    languages: ['hu', 'pl', 'cz'],
    offset: 128,
    chars: ' Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙',
  },
  'iso88597': {
    name: 'Greek',
    languages: ['el'],
    offset: 128,
    chars: ' ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�',
  },
  'iso885915': {
    name: 'Latin 9',
    languages: ['fr'],
    offset: 128,
    chars: ' ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ',
  },
  'rk1048': {
    name: 'Kazakh',
    languages: ['kk'],
    offset: 128,
    chars: 'ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя',
  },
  'windows1250': {
    name: 'Latin 2',
    languages: ['hu', 'pl', 'cz'],
    offset: 128,
    chars: '€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙',
  },
  'windows1251': {
    name: 'Cyrillic',
    languages: ['ru'],
    offset: 128,
    chars: 'ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя',
  },
  'windows1252': {
    name: 'Latin',
    languages: ['fr'],
    offset: 128,
    chars: '€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ',
  },
  'windows1253': {
    name: 'Greek',
    languages: ['el'],
    offset: 128,
    chars: '€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�',
  },
  'windows1254': {
    name: 'Turkish',
    languages: ['tr'],
    offset: 128,
    chars: '€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ',
  },
  'windows1255': {
    name: 'Hebrew',
    languages: ['he'],
    offset: 128,
    chars: '€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�',
  },
  'windows1256': {
    name: 'Arabic',
    languages: ['ar'],
    offset: 128,
    chars: '€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے',
  },
  'windows1257': {
    name: 'Baltic Rim',
    languages: ['et', 'lt'],
    offset: 128,
    chars: '€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙',
  },
  'windows1258': {
    name: 'Vietnamese',
    languages: ['vi'],
    offset: 128,
    chars: '€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ',
  },
};

const strings = {
  en: 'The quick brown fox jumps over the lazy dog.',
  jp: 'イロハニホヘト チリヌルヲ ワカヨタレソ ツネナラム',
  pt: 'O próximo vôo à noite sobre o Atlântico, põe freqüentemente o único médico.',
  fr: 'Les naïfs ægithales hâtifs pondant à Noël où il gèle sont sûrs d\'être déçus en voyant leurs drôles d\'œufs abîmés.',
  sv: 'Flygande bäckasiner söka strax hwila på mjuka tuvor.',
  dk: 'Quizdeltagerne spiste jordbær med fløde',
  el: 'ξεσκεπάζω την ψυχοφθόρα βδελυγμία',
  tr: 'Pijamalı hasta, yağız şoföre çabucak güvendi.',
  ru: 'Съешь же ещё этих мягких французских булок да выпей чаю',
  hu: 'Árvíztűrő tükörfúrógép',
  pl: 'Pchnąć w tę łódź jeża lub ośm skrzyń fig',
  cz: 'Mohu jíst sklo, neublíží mi.',
  ar: 'أنا قادر على أكل الزجاج و هذا لا يؤلمني.',
  et: 'Ma võin klaasi süüa, see ei tee mulle midagi.',
  lt: 'Aš galiu valgyti stiklą ir jis manęs nežeidžia.',
  bg: 'Мога да ям стъкло, то не ми вреди.',
  is: 'Ég get etið gler án þess að meiða mig.',
  he: 'אני יכול לאכול זכוכית וזה לא מזיק לי.',
  fa: '.من می توانم بدونِ احساس درد شيشه بخورم',
  uk: 'Я можу їсти скло, і воно мені не зашкодить.',
  vi: 'Tôi có thể ăn thủy tinh mà không hại gì.',
  kk: 'қазақша',
  lv: 'Es varu ēst stiklu, tas man nekaitē.',
  mt: 'Nista\' niekol il-ħġieġ u ma jagħmilli xejn.',
  th: 'ฉันกินกระจกได้ แต่มันไม่ทำให้ฉันเจ็บ',
};

/**
 * A library for converting Unicode to obscure single byte codepage for use with thermal printers
 */
class CodepageEncoder {
  /**
     * Get list of supported codepages
     *
     * @return {object}          Return the object, for easy chaining commands
     *
     */
  static getEncodings() {
    return Object.keys(definitions);
  }

  /**
     * Get test strings for the specified codepage
     *
     * @param  {string}   codepage  The codepage
     * @return {array}              Return an array with one or more objects
     *                              containing a property for the language of
     *                              the string and a property for the string itself
     *
     */
  static getTestStrings(codepage) {
    if (typeof definitions[codepage] !== 'undefined' &&
            typeof definitions[codepage].languages !== 'undefined') {
      return definitions[codepage].languages.map((i) => ({language: i, string: strings[i]}));
    }

    return [];
  }

  /**
     * Determine if the specified codepage is supported
     *
     * @param  {string}   codepage  The codepage
     * @return {boolean}            Return a boolean, true if the encoding is supported,
     *                              otherwise false
     *
     */
  static supports(codepage) {
    if (typeof definitions[codepage] === 'undefined') {
      return false;
    }

    if (typeof definitions[codepage].chars === 'undefined') {
      return false;
    }

    return true;
  }

  /**
     * Encode a string in the specified codepage
     *
     * @param  {string}   codepage  The codepage
     * @param  {string}   input     Text that needs encoded to the specified codepage
     * @return {Uint8Array}         Return an array of bytes with the encoded string
     *
     */
  static encode(codepage, input) {
    const output = new Uint8Array(input.length);

    let chars = '\u0000'.repeat(128);
    let offset = 128;

    if (typeof definitions[codepage] !== 'undefined' &&
            typeof definitions[codepage].chars !== 'undefined') {
      chars = definitions[codepage].chars;
      offset = definitions[codepage].offset;
    }

    for (let c = 0; c < input.length; c++) {
      const codepoint = input.codePointAt(c);

      if (codepoint < 128) {
        output[c] = codepoint;
      } else {
        const position = chars.indexOf(input[c]);

        if (position !== -1) {
          output[c] = offset + position;
        } else if (codepoint < 256 && (codepoint < offset || codepoint >= offset + chars.length)) {
          output[c] = codepoint;
        } else {
          output[c] = 0x3f;
        }
      }
    }

    return output;
  }
}

module.exports = CodepageEncoder;


/***/ }),

/***/ 7135:
/*!****************************************!*\
  !*** ./node_modules/linewrap/index.js ***!
  \****************************************/
/***/ ((module) => {


// Presets
var presetMap = {
    'html': {
        skipScheme: 'html',
        lineBreakScheme: 'html',
        whitespace: 'collapse'
    }
};

// lineBreak Schemes
var brPat = /<\s*br(?:[\s/]*|\s[^>]*)>/gi;
var lineBreakSchemeMap = {
    'unix': [/\n/g, '\n'],
    'dos': [/\r\n/g, '\r\n'],
    'mac': [/\r/g, '\r'],
    'html': [brPat, '<br>'],
    'xhtml': [brPat, '<br/>']
};

// skip Schemes
var skipSchemeMap = {
    'ansi-color': /\x1B\[[^m]*m/g,
    'html': /<[^>]*>/g,
    'bbcode': /\[[^]]*\]/g
};

var modeMap = {
    'soft': 1,
    'hard': 1
};

var wsMap = {
    'collapse': 1,
    'default': 1,
    'line': 1,
    'all': 1
};

var rlbMap = {
    'all': 1,
    'multi': 1,
    'none': 1
};
var rlbSMPat = /([sm])(\d+)/;

var escapePat = /[-/\\^$*+?.()|[\]{}]/g;
function escapeRegExp(s) {
    return s.replace(escapePat, '\\$&');
}

var linewrap = module.exports = function (start, stop, params) {
    if (typeof start === 'object') {
        params = start;
        start = params.start;
        stop = params.stop;
    }

    if (typeof stop === 'object') {
        params = stop;
        start = start || params.start;
        stop = undefined;
    }

    if (!stop) {
        stop = start;
        start = 0;
    }

    if (!params) { params = {}; }
    // Supported options and default values.
    var preset,
        mode = 'soft',
        whitespace = 'default',
        tabWidth = 4,
        skip, skipScheme, lineBreak, lineBreakScheme,
        respectLineBreaks = 'all',
        respectNum,
        preservedLineIndent,
        wrapLineIndent, wrapLineIndentBase;

    var skipPat;
    var lineBreakPat, lineBreakStr;
    var multiLineBreakPat;
    var preservedLinePrefix = '';
    var wrapLineIndentPat, wrapLineInitPrefix = '';
    var tabRepl;
    var item, flags;
    var i;

    // First process presets, because these settings can be overwritten later.
    preset = params.preset;
    if (preset) {
        if (!(preset instanceof Array)) {
            preset = [preset];
        }
        for (i = 0; i < preset.length; i++) {
            item = presetMap[preset[i]];
            if (item) {
                if (item.mode) {
                    mode = item.mode;
                }
                if (item.whitespace) {
                    whitespace = item.whitespace;
                }
                if (item.tabWidth !== undefined) {
                    tabWidth = item.tabWidth;
                }
                if (item.skip) {
                    skip = item.skip;
                }
                if (item.skipScheme) {
                    skipScheme = item.skipScheme;
                }
                if (item.lineBreak) {
                    lineBreak = item.lineBreak;
                }
                if (item.lineBreakScheme) {
                    lineBreakScheme = item.lineBreakScheme;
                }
                if (item.respectLineBreaks) {
                    respectLineBreaks = item.respectLineBreaks;
                }
                if (item.preservedLineIndent !== undefined) {
                    preservedLineIndent = item.preservedLineIndent;
                }
                if (item.wrapLineIndent !== undefined) {
                    wrapLineIndent = item.wrapLineIndent;
                }
                if (item.wrapLineIndentBase) {
                    wrapLineIndentBase = item.wrapLineIndentBase;
                }
            } else {
                throw new TypeError('preset must be one of "' + Object.keys(presetMap).join('", "') + '"');
            }
        }
    }

    if (params.mode) {
        if (modeMap[params.mode]) {
            mode = params.mode;
        } else {
            throw new TypeError('mode must be one of "' + Object.keys(modeMap).join('", "') + '"');
        }
    }
    // Available options: 'collapse', 'default', 'line', and 'all'
    if (params.whitespace) {
        if (wsMap[params.whitespace]) {
            whitespace = params.whitespace;
        } else {
            throw new TypeError('whitespace must be one of "' + Object.keys(wsMap).join('", "') + '"');
        }
    }

    if (params.tabWidth !== undefined) {
        if (parseInt(params.tabWidth, 10) >= 0) {
            tabWidth = parseInt(params.tabWidth, 10);
        } else {
            throw new TypeError('tabWidth must be a non-negative integer');
        }
    }
    tabRepl = new Array(tabWidth + 1).join(' ');

    // Available options: 'all', 'multi', 'm\d+', 's\d+', 'none'
    if (params.respectLineBreaks) {
        if (rlbMap[params.respectLineBreaks] || rlbSMPat.test(params.respectLineBreaks)) {
            respectLineBreaks = params.respectLineBreaks;
        } else {
            throw new TypeError('respectLineBreaks must be one of "' + Object.keys(rlbMap).join('", "') +
                                '", "m<num>", "s<num>"');
        }
    }
    // After these conversions, now we have 4 options in `respectLineBreaks`:
    // 'all', 'none', 'm' and 's'.
    // `respectNum` is applicable iff `respectLineBreaks` is either 'm' or 's'.
    if (respectLineBreaks === 'multi') {
        respectLineBreaks = 'm';
        respectNum = 2;
    } else if (!rlbMap[respectLineBreaks]) {
        var match = rlbSMPat.exec(respectLineBreaks);
        respectLineBreaks = match[1];
        respectNum = parseInt(match[2], 10);
    }

    if (params.preservedLineIndent !== undefined) {
        if (parseInt(params.preservedLineIndent, 10) >= 0) {
            preservedLineIndent = parseInt(params.preservedLineIndent, 10);
        } else {
            throw new TypeError('preservedLineIndent must be a non-negative integer');
        }
    }

    if (preservedLineIndent > 0) {
        preservedLinePrefix = new Array(preservedLineIndent + 1).join(' ');
    }

    if (params.wrapLineIndent !== undefined) {
        if (!isNaN(parseInt(params.wrapLineIndent, 10))) {
            wrapLineIndent = parseInt(params.wrapLineIndent, 10);
        } else {
            throw new TypeError('wrapLineIndent must be an integer');
        }
    }
    if (params.wrapLineIndentBase) {
        wrapLineIndentBase = params.wrapLineIndentBase;
    }

    if (wrapLineIndentBase) {
        if (wrapLineIndent === undefined) {
            throw new TypeError('wrapLineIndent must be specified when wrapLineIndentBase is specified');
        }
        if (wrapLineIndentBase instanceof RegExp) {
            wrapLineIndentPat = wrapLineIndentBase;
        } else if (typeof wrapLineIndentBase === 'string') {
            wrapLineIndentPat = new RegExp(escapeRegExp(wrapLineIndentBase));
        } else {
            throw new TypeError('wrapLineIndentBase must be either a RegExp object or a string');
        }
    } else if (wrapLineIndent > 0) {
        wrapLineInitPrefix = new Array(wrapLineIndent + 1).join(' ');
    } else if (wrapLineIndent < 0) {
        throw new TypeError('wrapLineIndent must be non-negative when a base is not specified');
    }

    // NOTE: For the two RegExps `skipPat` and `lineBreakPat` that can be specified
    //       by the user:
    //       1. We require them to be "global", so we have to convert them to global
    //          if the user specifies a non-global regex.
    //       2. We cannot call `split()` on them, because they may or may not contain
    //          capturing parentheses which affect the output of `split()`.

    // Precedence: Regex = Str > Scheme
    if (params.skipScheme) {
        if (skipSchemeMap[params.skipScheme]) {
            skipScheme = params.skipScheme;
        } else {
            throw new TypeError('skipScheme must be one of "' + Object.keys(skipSchemeMap).join('", "') + '"');
        }
    }
    if (params.skip) {
        skip = params.skip;
    }

    if (skip) {
        if (skip instanceof RegExp) {
            skipPat = skip;
            if (!skipPat.global) {
                flags = 'g';
                if (skipPat.ignoreCase) { flags += 'i'; }
                if (skipPat.multiline) { flags += 'm'; }
                skipPat = new RegExp(skipPat.source, flags);
            }
        } else if (typeof skip === 'string') {
            skipPat = new RegExp(escapeRegExp(skip), 'g');
        } else {
            throw new TypeError('skip must be either a RegExp object or a string');
        }
    }
    if (!skipPat && skipScheme) {
        skipPat = skipSchemeMap[skipScheme];
    }

    // Precedence:
    // - for lineBreakPat: Regex > Scheme > Str
    // - for lineBreakStr: Str > Scheme > Regex
    if (params.lineBreakScheme) {
        if (lineBreakSchemeMap[params.lineBreakScheme]) {
            lineBreakScheme = params.lineBreakScheme;
        } else {
            throw new TypeError('lineBreakScheme must be one of "' + Object.keys(lineBreakSchemeMap).join('", "') + '"');
        }
    }
    if (params.lineBreak) {
        lineBreak = params.lineBreak;
    }

    if (lineBreakScheme) {
        // Supported schemes: 'unix', 'dos', 'mac', 'html', 'xhtml'
        item = lineBreakSchemeMap[lineBreakScheme];
        if (item) {
            lineBreakPat = item[0];
            lineBreakStr = item[1];
        }
    }
    if (lineBreak) {
        if (lineBreak instanceof Array) {
            if (lineBreak.length === 1) {
                lineBreak = lineBreak[0];
            } else if (lineBreak.length >= 2) {
                if (lineBreak[0] instanceof RegExp) {
                    lineBreakPat = lineBreak[0];
                    if (typeof lineBreak[1] === 'string') {
                        lineBreakStr = lineBreak[1];
                    }
                } else if (lineBreak[1] instanceof RegExp) {
                    lineBreakPat = lineBreak[1];
                    if (typeof lineBreak[0] === 'string') {
                        lineBreakStr = lineBreak[0];
                    }
                } else if (typeof lineBreak[0] === 'string' && typeof lineBreak[1] === 'string') {
                    lineBreakPat = new RegExp(escapeRegExp(lineBreak[0]), 'g');
                    lineBreakStr = lineBreak[1];
                } else {
                    lineBreak = lineBreak[0];
                }
            }
        }
        if (typeof lineBreak === 'string') {
            lineBreakStr = lineBreak;
            if (!lineBreakPat) {
                lineBreakPat = new RegExp(escapeRegExp(lineBreak), 'g');
            }
        } else if (lineBreak instanceof RegExp) {
            lineBreakPat = lineBreak;
        } else if (!(lineBreak instanceof Array)) {
            throw new TypeError('lineBreak must be a RegExp object, a string, or an array consisted of a RegExp object and a string');
        }
    }
    // Only assign defaults when `lineBreakPat` is not assigned.
    // So if `params.lineBreak` is a RegExp, we don't have a value in `lineBreakStr`
    // yet. We will try to get the value from the input string, and if failed, we
    // will throw an exception.
    if (!lineBreakPat) {
        lineBreakPat = /\n/g;
        lineBreakStr = '\n';
    }

    // Create `multiLineBreakPat` based on `lineBreakPat`, that matches strings
    // consisted of one or more line breaks and zero or more whitespaces.
    // Also convert `lineBreakPat` to global if not already so.
    flags = 'g';
    if (lineBreakPat.ignoreCase) { flags += 'i'; }
    if (lineBreakPat.multiline) { flags += 'm'; }
    multiLineBreakPat = new RegExp('\\s*(?:' + lineBreakPat.source + ')(?:' +
                                   lineBreakPat.source + '|\\s)*', flags);
    if (!lineBreakPat.global) {
        lineBreakPat = new RegExp(lineBreakPat.source, flags);
    }

    // Initialize other useful variables.
    var re = mode === 'hard' ? /\b/ : /(\S+\s+)/;
    var prefix = new Array(start + 1).join(' ');
    var wsStrip = (whitespace === 'default' || whitespace === 'collapse'),
        wsCollapse = (whitespace === 'collapse'),
        wsLine = (whitespace === 'line'),
        wsAll = (whitespace === 'all');
    var tabPat = /\t/g,
        collapsePat = /  +/g,
        pPat = /^\s+/,
        tPat = /\s+$/,
        nonWsPat = /\S/,
        wsPat = /\s/;
    var wrapLen = stop - start;

    return function (text) {
        text = text.toString().replace(tabPat, tabRepl);

        var match;
        if (!lineBreakStr) {
            // Try to get lineBreakStr from `text`
            lineBreakPat.lastIndex = 0;
            match = lineBreakPat.exec(text);
            if (match) {
                lineBreakStr = match[0];
            } else {
                throw new TypeError('Line break string for the output not specified');
            }
        }

        // text -> blocks; each bloc -> segments; each segment -> chunks
        var blocks, base = 0;
        var mo, arr, b, res;
        // Split `text` by line breaks.
        blocks = [];
        multiLineBreakPat.lastIndex = 0;
        match = multiLineBreakPat.exec(text);
        while(match) {
            blocks.push(text.substring(base, match.index));

            if (respectLineBreaks !== 'none') {
                arr = [];
                b = 0;
                lineBreakPat.lastIndex = 0;
                mo = lineBreakPat.exec(match[0]);
                while(mo) {
                    arr.push(match[0].substring(b, mo.index));
                    b = mo.index + mo[0].length;
                    mo = lineBreakPat.exec(match[0]);
                }
                arr.push(match[0].substring(b));
                blocks.push({type: 'break', breaks: arr});
            } else {
                // Strip line breaks and insert spaces when necessary.
                if (wsCollapse) {
                    res = ' ';
                } else {
                    res = match[0].replace(lineBreakPat, '');
                }
                blocks.push({type: 'break', remaining: res});
            }

            base = match.index + match[0].length;
            match = multiLineBreakPat.exec(text);
        }
        blocks.push(text.substring(base));

        var i, j, k;
        var segments;
        if (skipPat) {
            segments = [];
            for (i = 0; i < blocks.length; i++) {
                var bloc = blocks[i];
                if (typeof bloc !== 'string') {
                    // This is an object.
                    segments.push(bloc);
                } else {
                    base = 0;
                    skipPat.lastIndex = 0;
                    match = skipPat.exec(bloc);
                    while(match) {
                        segments.push(bloc.substring(base, match.index));
                        segments.push({type: 'skip', value: match[0]});
                        base = match.index + match[0].length;
                        match = skipPat.exec(bloc);
                    }
                    segments.push(bloc.substring(base));
                }
            }
        } else {
            segments = blocks;
        }

        var chunks = [];
        for (i = 0; i < segments.length; i++) {
            var segment = segments[i];
            if (typeof segment !== 'string') {
                // This is an object.
                chunks.push(segment);
            } else {
                if (wsCollapse) {
                    segment = segment.replace(collapsePat, ' ');
                }

                var parts = segment.split(re),
                    acc = [];

                for (j = 0; j < parts.length; j++) {
                    var x = parts[j];
                    if (mode === 'hard') {
                        for (k = 0; k < x.length; k += wrapLen) {
                            acc.push(x.slice(k, k + wrapLen));
                        }
                    }
                    else { acc.push(x); }
                }
                chunks = chunks.concat(acc);
            }
        }

        var curLine = 0,
            curLineLength = start + preservedLinePrefix.length,
            lines = [ prefix + preservedLinePrefix ],
            // Holds the "real length" (excluding trailing whitespaces) of the
            // current line if it exceeds `stop`, otherwise 0.
            // ONLY USED when `wsAll` is true, in `finishOffCurLine()`.
            bulge = 0,
            // `cleanLine` is true iff we are at the beginning of an output line. By
            // "beginning" we mean it doesn't contain any non-whitespace char yet.
            // But its `curLineLength` can be greater than `start`, or even possibly
            // be greater than `stop`, if `wsStrip` is false.
            //
            // Note that a "clean" line can still contain skip strings, in addition
            // to whitespaces.
            //
            // This variable is used to allow us strip preceding whitespaces when
            // `wsStrip` is true, or `wsLine` is true and `preservedLine` is false.
            cleanLine = true,
            // `preservedLine` is true iff we are in a preserved input line.
            //
            // It's used when `wsLine` is true to (combined with `cleanLine`) decide
            // whether a whitespace is at the beginning of a preserved input line and
            // should not be stripped.
            preservedLine = true,
            // The current indent prefix for wrapped lines.
            wrapLinePrefix = wrapLineInitPrefix,
            remnant;

        // Always returns '' if `beforeHardBreak` is true.
        //
        // Assumption: Each call of this function is always followed by a `lines.push()` call.
        //
        // This function can change the status of `cleanLine`, but we don't modify the value of
        // `cleanLine` in this function. It's fine because `cleanLine` will be set to the correct
        // value after the `lines.push()` call following this function call. We also don't update
        // `curLineLength` when pushing a new line and it's safe for the same reason.
        function finishOffCurLine(beforeHardBreak) {
            var str = lines[curLine],
                idx, ln, rBase;

            if (!wsAll) {
                // Strip all trailing whitespaces past `start`.
                idx = str.length - 1;
                while (idx >= start && str[idx] === ' ') { idx--; }
                while (idx >= start && wsPat.test(str[idx])) { idx--; }
                idx++;

                if (idx !== str.length) {
                    lines[curLine] = str.substring(0, idx);
                }

                if (preservedLine && cleanLine && wsLine && curLineLength > stop) {
                    // Add the remnants to the next line, just like when `wsAll` is true.
                    rBase = str.length - (curLineLength - stop);
                    if (rBase < idx) {
                        // We didn't reach `stop` when stripping due to a bulge.
                        rBase = idx;
                    }
                }
            } else {
                // Strip trailing whitespaces exceeding stop.
                if (curLineLength > stop) {
                    bulge = bulge || stop;
                    rBase = str.length - (curLineLength - bulge);
                    lines[curLine] = str.substring(0,  rBase);
                }
                bulge = 0;
            }

            // Bug: the current implementation of `wrapLineIndent` is buggy: we are not
            // taking the extra space occupied by the additional indentation into account
            // when wrapping the line. For example, in "hard" mode, we should hard-wrap
            // long words at `wrapLen - wrapLinePrefix.length` instead of `wrapLen`;
            // and remnants should also be wrapped at `wrapLen - wrapLinePrefix.length`.
            if (preservedLine) {
                // This is a preserved line, and the next output line isn't a
                // preserved line.
                preservedLine = false;
                if (wrapLineIndentPat) {
                    idx = lines[curLine].substring(start).search(wrapLineIndentPat);
                    if (idx >= 0 && idx + wrapLineIndent > 0) {
                        wrapLinePrefix = new Array(idx + wrapLineIndent + 1).join(' ');
                    } else {
                        wrapLinePrefix = '';
                    }
                }
            }

            // Some remnants are left to the next line.
            if (rBase) {
                while (rBase + wrapLen < str.length) {
                    if (wsAll) {
                        ln = str.substring(rBase, rBase + wrapLen);
                        lines.push(prefix + wrapLinePrefix + ln);
                    } else {
                        lines.push(prefix + wrapLinePrefix);
                    }
                    rBase += wrapLen;
                    curLine++;
                }
                if (beforeHardBreak) {
                    if (wsAll) {
                        ln = str.substring(rBase);
                        lines.push(prefix + wrapLinePrefix + ln);
                    } else {
                        lines.push(prefix + wrapLinePrefix);
                    }
                    curLine++;
                } else {
                    ln = str.substring(rBase);
                    return wrapLinePrefix + ln;
                }
            }

            return '';
        }

        for (i = 0; i < chunks.length; i++) {
            var chunk = chunks[i];

            if (chunk === '') { continue; }

            if (typeof chunk !== 'string') {
                if (chunk.type === 'break') {
                    // This is one or more line breaks.
                    // Each entry in `breaks` is just zero or more whitespaces.
                    if (respectLineBreaks !== 'none') {
                        // Note that if `whitespace` is "collapse", we still need
                        // to collapse whitespaces in entries of `breaks`.
                        var breaks = chunk.breaks;
                        var num = breaks.length - 1;

                        if (respectLineBreaks === 's') {
                            // This is the most complex scenario. We have to check
                            // the line breaks one by one.
                            for (j = 0; j < num; j++) {
                                if (breaks[j+1].length < respectNum) {
                                    // This line break should be stripped.
                                    if (wsCollapse) {
                                        breaks[j+1] = ' ';
                                    } else {
                                        breaks[j+1] = breaks[j] + breaks[j+1];
                                    }
                                } else {
                                    // This line break should be preserved.
                                    // First finish off the current line.
                                    if (wsAll) {
                                        lines[curLine] += breaks[j];
                                        curLineLength += breaks[j].length;
                                    }
                                    finishOffCurLine(true);

                                    lines.push(prefix + preservedLinePrefix);
                                    curLine++;
                                    curLineLength = start + preservedLinePrefix.length;

                                    preservedLine = cleanLine = true;
                                }
                            }
                            // We are adding to either the existing line (if no line break
                            // is qualified for preservance) or a "new" line.
                            if (!cleanLine || wsAll || (wsLine && preservedLine)) {
                                if (wsCollapse || (!cleanLine && breaks[num] === '')) {
                                    breaks[num] = ' ';
                                }
                                lines[curLine] += breaks[num];
                                curLineLength += breaks[num].length;
                            }
                        } else if (respectLineBreaks === 'm' && num < respectNum) {
                            // These line breaks should be stripped.
                            if (!cleanLine || wsAll || (wsLine && preservedLine)) {
                                if (wsCollapse) {
                                    chunk = ' ';
                                } else {
                                    chunk = breaks.join('');
                                    if (!cleanLine && chunk === '') {
                                        chunk = ' ';
                                    }
                                }
                                lines[curLine] += chunk;
                                curLineLength += chunk.length;
                            }
                        } else {    // 'all' || ('m' && num >= respectNum)
                            // These line breaks should be preserved.
                            if (wsStrip) {
                                // Finish off the current line.
                                finishOffCurLine(true);

                                for (j = 0; j < num; j++) {
                                    lines.push(prefix + preservedLinePrefix);
                                    curLine++;
                                }

                                curLineLength = start + preservedLinePrefix.length;
                                preservedLine = cleanLine = true;

                            } else {
                                if (wsAll || (preservedLine && cleanLine)) {
                                    lines[curLine] += breaks[0];
                                    curLineLength += breaks[0].length;
                                }

                                for (j = 0; j < num; j++) {
                                    // Finish off the current line.
                                    finishOffCurLine(true);

                                    lines.push(prefix + preservedLinePrefix + breaks[j+1]);
                                    curLine++;
                                    curLineLength = start + preservedLinePrefix.length + breaks[j+1].length;

                                    preservedLine = cleanLine = true;
                                }
                            }
                        }
                    } else {
                        // These line breaks should be stripped.
                        if (!cleanLine || wsAll || (wsLine && preservedLine)) {
                            chunk = chunk.remaining;

                            // Bug: If `wsAll` is true, `cleanLine` is false, and `chunk`
                            // is '', we insert a space to replace the line break. This
                            // space will be preserved even if we are at the end of an
                            // output line, which is wrong behavior. However, I'm not
                            // sure it's worth it to fix this edge case.
                            if (wsCollapse || (!cleanLine && chunk === '')) {
                                chunk = ' ';
                            }
                            lines[curLine] += chunk;
                            curLineLength += chunk.length;
                        }
                    }
                } else if (chunk.type === 'skip') {
                    // This is a skip string.
                    // Assumption: skip strings don't end with whitespaces.
                    if (curLineLength > stop) {
                        remnant = finishOffCurLine(false);

                        lines.push(prefix + wrapLinePrefix);
                        curLine++;
                        curLineLength = start + wrapLinePrefix.length;

                        if (remnant) {
                            lines[curLine] += remnant;
                            curLineLength += remnant.length;
                        }

                        cleanLine = true;
                    }
                    lines[curLine] += chunk.value;
                }
                continue;
            }

            var chunk2;
            while (1) {
                chunk2 = undefined;
                if (curLineLength + chunk.length > stop &&
                        curLineLength + (chunk2 = chunk.replace(tPat, '')).length > stop &&
                        chunk2 !== '' &&
                        curLineLength > start) {
                    // This line is full, add `chunk` to the next line
                    remnant = finishOffCurLine(false);

                    lines.push(prefix + wrapLinePrefix);
                    curLine++;
                    curLineLength = start + wrapLinePrefix.length;

                    if (remnant) {
                        lines[curLine] += remnant;
                        curLineLength += remnant.length;
                        cleanLine = true;
                        continue;
                    }

                    if (wsStrip || (wsLine && !(preservedLine && cleanLine))) {
                        chunk = chunk.replace(pPat, '');
                    }
                    cleanLine = false;

                } else {
                    // Add `chunk` to this line
                    if (cleanLine) {
                        if (wsStrip || (wsLine && !(preservedLine && cleanLine))) {
                            chunk = chunk.replace(pPat, '');
                            if (chunk !== '') {
                                cleanLine = false;
                            }
                        } else {
                            if (nonWsPat.test(chunk)) {
                                cleanLine = false;
                            }
                        }
                    }
                }
                break;
            }
            if (wsAll && chunk2 && curLineLength + chunk2.length > stop) {
                bulge = curLineLength + chunk2.length;
            }
            lines[curLine] += chunk;
            curLineLength += chunk.length;
        }
        // Finally, finish off the last line.
        finishOffCurLine(true);
        return lines.join(lineBreakStr);
    };
};

linewrap.soft = linewrap;

linewrap.hard = function (/*start, stop, params*/) {
    var args = [].slice.call(arguments);
    var last = args.length - 1;
    if (typeof args[last] === 'object') {
        args[last].mode = 'hard';
    } else {
        args.push({ mode : 'hard' });
    }
    return linewrap.apply(null, args);
};

linewrap.wrap = function(text/*, start, stop, params*/) {
    var args = [].slice.call(arguments);
    args.shift();
    return linewrap.apply(null, args)(text);
};


/***/ }),

/***/ 5399:
/*!***********************************************!*\
  !*** ./src/app/services/impresora.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpresoraService": () => (/* binding */ ImpresoraService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mineminemine/esc-pos-encoder-ionic */ 6577);
/* harmony import */ var _mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);




let ImpresoraService = class ImpresoraService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    testImpresora(impresora) {
        let date = new Date();
        let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
        let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let date_time = current_date + " " + current_time;
        const socket = new Socket();
        // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
        const encoder = new (_mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0___default())();
        const result = encoder.initialize();
        result
            .width(2)
            .height(2)
            .align('center')
            .newline()
            .bold(true)
            .width(2)
            .height(2)
            .line(date_time)
            .line('Prueba realizada con la impresora ' + impresora.NombreImpresora)
            .line('IP : ' + impresora.Ip)
            .line('Port : ' + impresora.Puerto)
            .bold(false)
            .text('Este es un mensaje de prueba', 40)
            .newline()
            .underline(true)
            .text('Subrayado')
            .underline(false)
            .newline()
            .text('This is ')
            .bold(true)
            .text('bold')
            .bold(false)
            .align('right')
            .width(2)
            .height(2)
            .line('This line is aligned to the right')
            .align('center')
            .width(2)
            .height(2)
            .line('This line is centered')
            .align('left')
            .line('This line is aligned to the left')
            .newline()
            .newline()
            .newline()
            .newline()
            .newline()
            .cut();
        const resultByte = result.encode();
        // send byte code into the printer
        socket.open(impresora.Ip, impresora.Puerto, () => {
            socket.write(resultByte, () => {
                socket.shutdownWrite();
            });
        }, (err) => {
            console.error(err);
        });
    }
    imprimirComanda(opcComanda, idMesa, nombreMesa, mesero, cliente, productos, NombreImpresora, IP, puerto) {
        let date = new Date();
        let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
        let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let date_time = current_date + " " + current_time;
        const socket = new Socket();
        // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
        const encoder = new (_mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0___default())();
        const result = encoder.initialize();
        result.align('right')
            .size('normal')
            .line('ID ORDEN: ' + idMesa)
            .align('center')
            .line(opcComanda != 3 ? date_time : '')
            .line(NombreImpresora)
            .bold(true);
        switch (opcComanda) {
            case 1:
                result
                    .width(2)
                    .height(2)
                    .line("NUEVO PEDIDO A MESA: " + nombreMesa);
                break;
            case 2:
                result
                    .width(2)
                    .height(2)
                    .line("AGREGAR PEDIDO A MESA: " + nombreMesa);
                break;
            case 3:
                result
                    .width(2)
                    .height(2)
                    .line("REIMPRESO DEL PEDIDO DE LA MESA: " + nombreMesa);
                break;
            case 4:
                result
                    .width(2)
                    .height(2)
                    .line("PEDIDO GENERAL DEL CLIENTE: " + nombreMesa);
                break;
            default:
                break;
        }
        result
            .width(2)
            .height(2)
            .line("CLIENTE: " + cliente)
            .line("ATENDIDO POR: " + mesero.toUpperCase())
            .bold(false)
            .newline()
            .bold(true)
            .line('-------------------------------------------------------')
            .bold(false);
        productos.map((pro) => {
            result
                .align('left')
                .text('PRODUCTO: ')
                .bold(true)
                .text(pro.Producto)
                .bold(false)
                .newline()
                .text('CANTIDAD: ')
                .bold(true)
                .text(pro.Cantidad.toString())
                .bold(false);
            if (!(('' + pro.Indicacion).trim() == '' || pro.Indicacion == null)) {
                result
                    .newline()
                    .width(2)
                    .height(2)
                    .line('INDICACIONES:')
                    .bold(true)
                    .line(pro.Indicacion)
                    .bold(false);
            }
            else {
                result.newline();
            }
            result
                .align('center')
                .bold(true)
                .line('-------------------------------------------------------')
                .bold(false);
        });
        result.newline()
            .bold(true);
        if (opcComanda == 3) {
            result
                .width(2)
                .height(2)
                .line('ESTO ES UN REIMPRESO DE LOS PRODUCTOS SOLICITADOS POR LA MESA')
                .line('POR FAVOR VERIFICAR LOS PRODUCTOS Y EL CLIENTE');
        }
        result.bold(false)
            .newline()
            .newline()
            .newline()
            .newline()
            .cut();
        const resultByte = result.encode();
        // send byte code into the printer
        socket.open(IP, puerto, () => {
            socket.write(resultByte, () => {
                socket.shutdownWrite();
            });
        }, (err) => {
            console.error(err);
        });
    }
    imprimirPreOrden(opcComanda, idMesa, nombreMesa, mesero, cliente, productos, NombreImpresora, IP, puerto) {
        let date = new Date();
        let current_date = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getDate();
        let current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let date_time = current_date + " " + current_time;
        let total = 0;
        // socket receive bytecode, therefore we need to create a byte stream by using esc-pos-encoder-ionic
        const encoder = new (_mineminemine_esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_0___default())();
        const result = encoder.initialize();
        //result.size(3).align('center').line('TRADICIONES HUANUQUENAS');
        result
            .align('right')
            .width(2)
            .height(2)
            .line(`ID ORDEN: ${idMesa} - Mesa: ${nombreMesa}`)
            .align('center')
            .line(opcComanda != 3 ? date_time : '')
            .line(NombreImpresora)
            .bold(true);
        result
            .width(2)
            .height(2)
            .line('CLIENTE: ' + cliente)
            .line('ATENDIDO POR' + mesero.toUpperCase())
            .bold(false)
            .newline()
            .bold(true)
            .line('-------------------------------------------------------')
            .bold(false);
        result
            .align('left')
            .line('Producto           ' + '  Cant  ' + '  PU  ' + '  Total  ')
            .bold(true);
        const maxProductoLength = 20;
        const maxCantidadLength = 6;
        const maxPrecioUnitarioLength = 2;
        const maxTotalLength = 8;
        productos.map((pro) => {
            total += pro.Cantidad * pro.Precio;
            const subT = (pro.Cantidad * pro.Precio).toFixed(2);
            const nombreProd = pro.Producto.length >
                maxProductoLength ? pro.Producto.substring(0, 20)
                : this.formatColumn(pro.Producto, maxProductoLength);
            const cantidad = pro.Cantidad.length > maxCantidadLength
                ? pro.Cantidad.substring(0, 20)
                : this.formatColumn(pro.Cantidad, maxCantidadLength);
            const precio = pro.Precio.length > maxPrecioUnitarioLength
                ? pro.Precio.substring(0, 20)
                : this.formatColumn(pro.Precio, maxPrecioUnitarioLength);
            const subTotal = subT.length > maxTotalLength
                ? subT.substring(0, 20)
                : this.formatColumn(subT, maxTotalLength);
            result
                .align('left').line(`${nombreProd}  ${cantidad}       ${precio}       ${subTotal}`);
            if (!!pro.Indicacion) {
                result.newline();
                result.align('center').line(`(Indicacaciones: ${pro.Indicacion})`);
            }
            result.newline();
        });
        //console.log(total);
        result
            .align('left')
            .width(2)
            .height(2)
            .line('                    TOTAL' + ' S/. ' + total.toFixed(2))
            .bold(true)
            .line("").bold(true)
            .line("").bold(true)
            .bold(true);
        result.newline()
            .bold(true);
        result.bold(false)
            .newline()
            .newline()
            .newline()
            .newline()
            .cut();
        const resultByte = result.encode();
        const socket = new Socket();
        // send byte code into the printer
        socket.open(IP, puerto, () => {
            socket.write(resultByte, () => {
                socket.shutdownWrite();
            });
        }, (err) => {
            console.error(err);
        });
    }
    formatColumn(text, maxLength) {
        const espacio = ' ';
        const vecesARellenar = maxLength - text.length;
        return text + espacio.repeat(vecesARellenar);
    }
};
ImpresoraService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
ImpresoraService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ImpresoraService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_impresora_service_ts.js.map