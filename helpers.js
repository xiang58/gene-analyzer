const helpers = {};

// Returns a random DNA base
helpers.returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


// Returns a random single strand of DNA
helpers.mockUpStrand = numBases => {
  const newStrand = [];
  for (let i = 0; i < numBases; i++) {
    newStrand.push(helpers.returnRandBase());
  }
  return newStrand;
};


// Factory to produce "P. Aequor" with given DNA strand
helpers.pAequorFactory = (id, dna) => {
  return {
    id, dna,

    // Responsible for randomly selecting a base in the object's .dna property and changing the current base to a different base. Then .mutate() will return the object’s .dna
    mutate() {
      let r = Math.floor(Math.random() * this.dna.length);
      let baseToBeMutated = this.dna[r];
      let mutation = baseToBeMutated;

      while (mutation === baseToBeMutated)
        mutation = helpers.returnRandBase();
      this.dna[r] = mutation;
      
      return this.dna;
    },

    // Compare the current pAequor's .dna with the passed in pAequor's .dna and compute how many bases are identical and in the same locations. This method does not return anything, but prints a message that states the percentage of DNA the two objects have in common 
    compareDNA(pAequor) {
      let numBasesInCommon = 0;
      for (let i = 0; i < this.dna.length; i++) 
        if (this.dna[i] === pAequor.dna[i])
          numBasesInCommon ++;

      let percentInCommon = numBasesInCommon / this.dna.length * 100;
      console.log(`Specimen #${this.id} and specimen #${pAequor.id} have ${percentInCommon}% DNA in common.`);
    },

    // Return true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise return false.
    willLikelySurvive() {
      let numCorG = 0;
      for (base of this.dna) 
        if (base === 'C' || base === 'G')
          numCorG ++;
      
      let percentage = numCorG / this.dna.length;
      if (percentage >= .6) return true;
      return false;
    }
  };
};


// Export this module for other files to use
module.exports = helpers;
