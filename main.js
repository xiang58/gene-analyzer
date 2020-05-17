/**
 * Project: Gene Analyzer
 * Author: Daniel Xiang
 * Version: 2.0.0
 * Since: 2020-05-16
 */

// Require in necessary module
const helpers = require('./helpers');
const factory = require('./factory');

// Create `NUM_SPECIMENS` specimens of DNA length `NUM_BASES`
const NUM_BASES = 10;
const NUM_SPECIMENS = 10;
const samples = [];
for (let i = 0; i < NUM_SPECIMENS; i++) {
  const specimen = factory(i+1, `S${i+1}`, helpers.strandGenerator('RNA', NUM_BASES), 'RNA');
  samples.push(specimen);
}

// Display these newly created samples
/*for (const specimen of samples)
  console.log(`ID: ${specimen.id}, Name: ${specimen.name}, Gene: ${specimen.gene}`);*/

// Mutate a specimen
/*const specimenToMutate = samples[0];
console.log(`The original sequence: ${specimenToMutate.gene}`);
console.log(`The mutated base: ${specimenToMutate.mutate()}`);
console.log(`After mutation, the new sequence: ${specimenToMutate.gene}`);*/

// Compute percentage of similarity between two specimens
/*console.log(`Specimen 1: ${samples[0].gene}`);
console.log(`Specimen 2: ${samples[1].gene}`);
const ratio = samples[0].commonGeneRatio(samples[1]);
console.log(`The returned ratio: ${ratio}`);*/

// Compute the complement strand
/*console.log(`Original sequence:   ${samples[0].gene}`);
console.log(`Complement sequence: ${samples[0].complement()}`);*/
