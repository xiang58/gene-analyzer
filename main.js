// Import required methods
const helpers = require('./helpers');

// Number of DNA bases in P. Aequor
const numBasesInPAequor = 15;

// Test 1: mutate()
//let dna1 = ['A','A','A','A','A','A','A','A','A','A','A','A','A','A','A'];
//let pAequor1 = helpers.pAequorFactory(1, dna1);
//let mutated = pAequor1.mutate();
//console.log(`The mutated DNA: ${mutated}`);
//console.log(`Now the organism's DNA becomes ${pAequor1.dna}`);

// Test 2: compareDNA()
//let dna1 = ['A','C','T','G'];
//let dna2 = ['C','A','T','T'];
//let pAequor1 = helpers.pAequorFactory(1, dna1);
//let pAequor2 = helpers.pAequorFactory(2, dna2);
//pAequor1.compareDNA(pAequor2);

// Test 3: willLikelySurvive()
//let dna1 = ['A','C','C','G'];
//let dna2 = ['C','A','T','T'];
//let pAequor1 = helpers.pAequorFactory(1, dna1);
//let pAequor2 = helpers.pAequorFactory(2, dna2);
//console.log(pAequor1.willLikelySurvive());
//console.log(pAequor2.willLikelySurvive());

// Create 30 instances of P. Aequor that are viable
let pAequors = [];
for (let i = 0; i < 30; i++) {
  let pAequor, isViable;
  do {
    pAequor = helpers.pAequorFactory(i+1, helpers.mockUpStrand(numBasesInPAequor));
    isViable = pAequor.willLikelySurvive();
  } while (! isViable);
  pAequors.push(pAequor);
}

//console.log(pAequors);
//let viability = [];
//for (stuff of pAequors)
//  viability.push(stuff.willLikelySurvive());
//console.log(viability);
