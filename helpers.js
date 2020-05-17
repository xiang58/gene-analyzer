/**
 * Project: Gene Analyzer
 * Author: Daniel Xiang
 * Version: 2.0.0
 * Since: 2020-05-16
 */

module.exports = {
  returnRandBase(baseType) {
    /**
     * Returns a single DNA or RNA base 
     * depending on given `baseType`.
     */
    baseType = this.validate('b', baseType);
    if (baseType === 'DNA') {
      const dnaBases = ['A', 'T', 'C', 'G'];
      return dnaBases[Math.floor(Math.random() * 4)];
    } 
    else {
      const rnaBases = ['A', 'U', 'C', 'G'];
      return rnaBases[Math.floor(Math.random() * 4)];
    }
  },

  strandGenerator(baseType, numBases) {
    /**
     * Returns a random single strand of DNA or RNA,
     * depending on given `baseType`.
     */
    baseType = baseType = this.validate('b', baseType);
    numBases = this.validate('n', numBases);
    const newStrand = [];
    for (let i = 0; i < numBases; i++) 
      newStrand.push(this.returnRandBase(baseType));
    return newStrand;
  },

  validate(mode, arg) {
    /**
     * Validate argument `arg` in given `mode`. 
     * Mode 'b' is for `baseType`; mode 'n' is for `numBases`.
     */
    switch (mode) {
      case 'b':
        if (typeof arg === 'undefined')
          throw Error("No argument found: you must provide argument `baseType`");
        if (typeof arg !== 'string') 
          throw Error("Invalid argument type: `baseType` must be type of 'string'");
        arg = arg.toUpperCase();
        if (arg !== 'DNA' && arg !== 'RNA')
          throw Error("Invalid argument value: `baseType` must be either 'DNA' or 'RNA'");
        return arg;
      
      case 'n':
        if (typeof arg === 'undefined')
          throw Error("No argument found: you must provide argument `numBases`"); 
        arg = Number(arg);
        if (isNaN(arg))
          throw Error("Invalid argument type: `numBases` must be of type 'number'");
        if (! Number.isInteger(arg))
          throw Error("Invalid argument value: `numBases` must be an integer");
        if (arg < 1)
          throw Error("Invalid argument value: `numBases` must be no less than 1");
        if (arg > Number.MAX_SAFE_INTEGER)
          throw Error("Invalid argument value: `numBases` is too large and is not supported by this program");
        return arg;

      default:
        throw Error("Invalid validation mode: mode can either be 'b' or 'n'");
    }
  }
};
