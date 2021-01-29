/*
// UNDERSTANDING THE PROBLEM
- write a program that calculates Hamming distance btw 2
  DNA strands

Hamming distance: counts number of differences btw 2
homologous DNA strands taken from different genomes with
a common ancestor
 - measure the min. num. of point mutations
 that could've happen on the evolutionary path btw 2 strands
 - defined only for sequences of equal length
 - if 2 sequences of unequal length, ignore
  extra length on longer strand

mutation: mistake that happens during creation or copying of
a nucleic acid (ie DNA). Nucleic acids are vital to cell
functions, so mutations can cause a ripple effect thru a cell.
Mutations are mistakes, but a rare one may give cell a
beneficial attribute.

point mutation: simplest, most common type of mutation, which
replaces 1 based with another at a single nucleotide

// EXAMPLES/EDGE CASES:
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

the Hamming distance btw these 2 DNA strands is 7

// DATA STRUCTURE(S):
- strings
- array?

// ALGORITHM:
- hammingDistance method
 - accepts 1 argument (dna strand for comparison)
 - if lengths are equal:
  - ?
 - if lengths aren't equal:
- helper method:
 - compare lengths
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let count = 0;
    let strandArr = this.strand.split("");
    let compareStrandArr = comparisonStrand.split("");

    if (!this.compareLengths(this.strand, comparisonStrand)) {
      if (strandArr.length > compareStrandArr.length) {
        strandArr = strandArr.slice(0, compareStrandArr.length);
      } else {
        compareStrandArr = compareStrandArr.slice(0, strandArr.length);
      }
    }
    strandArr.forEach((point, idx) => {
      if (point !== compareStrandArr[idx]) {
        count += 1;
      }
    });

    return count;
  }

  compareLengths(strand, comparisonStrand) {
    return strand.length === comparisonStrand ? 1 : 0;
  }
}

module.exports = DNA;
