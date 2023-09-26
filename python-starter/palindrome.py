import re
def remove_non_alpha_numeric(input_str:str) -> str:
    """
        Returns a string that contains only alpha numeric characters
    """

    cleaned_sentence = re.sub(r'[^a-zA-Z0-9]', '', input_str)

    return cleaned_sentence.lower()


def is_palindrome(input_str:str) -> bool:
    
    '''
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    remove_non_alpha_numeric is a helper function that remove all non alpha-numeric characters from a string. It may come in handy!

    >>> is_palindrome("A man, a plan, a canal: Panama")
    true

    >>> is_palindrome("race a car")
    false
    
    '''
    pass

  


if __name__ == "__main__":
    pass
