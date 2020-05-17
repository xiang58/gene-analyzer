## Gene Analyzer v2.0.0 (2020-05-16)
Generalize the "Mysterious Organism" project to "Gene Analyzer", which provides several methods to help with genetic analysis. 

#### Tech Stack
- JavaScript, Node.js

#### Release Notes
- `factory` module contains 3 useful methods: 
    - `mutate()` randomly selects a position in specimen's gene and change it to a different random base (uniform distribution).
    - `commonGeneRatio()` compares the current specimen's gene with another specimen's gene. Returns the ratio of DNA/RNA the two specimens have in common.
    - `complement()` returns the complement DNA/RNA strand of this specimen.

- `helpers` module contains several helper functions for implementing `factory`. Details of these functions are described by comments in the very module.






_* Project idea adopted from Codecademy_
 
**&copy; 2020 Daniel Xiang**
