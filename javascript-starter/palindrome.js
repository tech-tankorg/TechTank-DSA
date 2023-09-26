const remove_non_alpha_numberic = (input_str) => {
  const regex = /[^a-zA-Z0-9]/g;

  return input_str.replace(regex, "").toLowerCase();
};

const is_palindrome = (input_str) => {
  // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
  // Alphanumeric characters include letters and numbers.
  // Given a string s, return true if it is a palindrome, or false otherwise.
  // remove_non_alpha_numeric is a helper function that remove all non alpha-numeric characters from a string. It may come in handy!
  /* ================ =================

            Complete below

 ================ =================
 */
};

console.log(is_palindrome("A man, a plan, a canal: Panama"));
