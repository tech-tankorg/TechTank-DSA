def repeat_dna_seq(str:str) -> list[str]:
    """

    The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

    For example, "ACGAATTCCG" is a DNA sequence.
    When studying DNA, it is useful to identify repeated sequences within the DNA.

    Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

    >>> repeat_dna_seq("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
    ["AAAAACCCCC","CCCCCAAAAA"]

    >>> repeat_dna_seq("AAAAAAAAAAAAA")
    ["AAAAAAAAAA"]
    
    """