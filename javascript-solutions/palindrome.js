const remove_non_alpha_numberic = (input_str) => {
  // remove_non_alpha_numberic is a helper function that remove all non alpha-numeric characters from a string
  const regex = /[^a-zA-Z0-9]/g;

  return input_str.replace(regex, "").toLowerCase();
};

const is_palindrome = (input_str) => {
  // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
  // Alphanumeric characters include letters and numbers.
  // Given a string s, return true if it is a palindrome, or false otherwise.

  // remove_non_alpha_numeric is a helper function that remove all non alpha-numeric characters from a string
  const processed_str = remove_non_alpha_numberic(input_str);

  let l_pointer = 0;
  let r_pointer = processed_str.length - 1;

  while (l_pointer !== r_pointer) {
    if (processed_str[l_pointer] !== processed_str[r_pointer]) return false;

    l_pointer += 1;
    r_pointer += 1;

    return true;
  }
};

console.log(is_palindrome("A man, a plan, a canal: Panama"));
