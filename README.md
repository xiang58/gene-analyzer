## Mysterious Organism V1.0.0 (2020-04-25)
Context: I'm part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, _Pila Aequor (P. Aequor)_, and finds that it is only comprised of **15 DNA bases**. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. My job is to create JavaScript objects that simulate the DNA of P. aequor for your research team to study.

#### Release Notes
- Key methods in helper module include:
    1. `returnRandBase`, which returns a random DNA base (from 'A', 'T', 'C', 'G').
    2. `mockUpStrand`, which returns a random single strand of DNA with given length.
    3. `pAequorFactory`, which return a _P. Aequor_ object.
- A particular _P. Aequor_ object contains:
    1. a specimen ID `id`;
    2. its 15-base DNA strand;
    3. `mutate()` that mutates a single base in its DNA strand;
    4. `compareDNA(another)` that compares itself to another _P. Aequor_ object. This method will log to the console the percentage similar between the two specimens.
    5. `willLikelySurvive()` returns `true` if the amount of 'G' and 'C' bases is at least 60% in the whole DNA strand of this specimen; returns `false` otherwise.
- In `main.js` there are several test which has been commented out. They were used to test helper methods. Besides, I created 30 viable (contains at least 60% 'G' and 'C' in its DNA) _P. Aequor_ specimens for researchers to use.

*\* Project idea adopted from Codecademy*
 
**&copy; 2020 Daniel Xiang**
