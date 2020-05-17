/**
 * Project: Gene Analyzer
 * Author: Daniel Xiang
 * Version: 2.0.0
 * Since: 2020-05-16
 */

const helpers = require('./helpers');

const specimenFactory = (id, name, gene, type) => {
  /** 
   * Factory to produce certain virtual 
   * specimen with given DNA/RNA strand.
   */
  return {
    id,    // An int to uniquely identify the specimen
    name,  // Name of this specimen
    gene,  // An array of strings that contains this specimen's gene info
    type,  // DNA or RNA
    
    mutate() {
      /**
       * Responsible for randomly selecting a base in 
       * the virtual specimen's DNA/RNA, and changing   
       * the current base to a different random base.   
       * It returns an array with first element being
       * the index of the selected base and second
       * element the new mutated base.
       */
      let r = Math.floor(Math.random() * this.gene.length);
      let baseToBeMutated = this.gene[r];
      let mutation = baseToBeMutated;

      while (mutation === baseToBeMutated)
        mutation = helpers.returnRandBase(this.type);
      this.gene[r] = mutation;
      
      return [r, mutation];
    },

    commonGeneRatio(others) {
      /**
       * Compare the current specimen's gene with another
       * specimen's gene. Returns the ratio of DNA/RNA the
       * two specimens have in common.
       */
      if (this.gene.length !== others.gene.length)
        throw Error('Invalid gene comparison: the two genes being compared are of different length');

      let numCommonBases = 0;
      for (let i = 0; i < this.gene.length; i++) 
        if (this.gene[i] === others.gene[i])
          numCommonBases ++;

      let ratio = numCommonBases / this.gene.length;
      console.log(`Specimen #${this.id} and specimen #${others.id} have ${ratio*100}% gene in common.`);
      return ratio;
    },

    complement() {
      /**
       * Returns the complement DNA/RNA strand of this specimen.
       */
      const comp = [];

      for (let base of this.gene) {
        switch (base) {
          case 'A': 
            if (this.type === 'DNA')
              comp.push('T');
            else
              comp.push('U');
            break;

          case 'T': 
          case 'U': 
            comp.push('A');
            break;

          case 'G':
            comp.push('C');
            break;

          case 'C':
            comp.push('G');
        }
      }

      return comp;
    }
  };
};

module.exports = specimenFactory;
