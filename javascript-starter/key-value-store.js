class KeyValueStore {
  /*
  Leetcode 981
  
  Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

    Implement the TimeMap class:

    TimeMap() Initializes the object of the data structure.
    void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
    String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

    ================================================================
    Constraints 
    1 <= key.length, value.length <= 100
    key and value consist of lowercase English letters and digits.
    1 <= timestamp <= 107
    All the timestamps timestamp of set are strictly increasing.
    At most 2 * 10^5 calls will be made to set and get

    ================================================================
    Example

    TimeMap timeMap = new TimeMap(); -> Initialize a new Key Value store
    timeMap.set("foo", "bar", 1); -> store the key "foo" and value "bar" along with timestamp = 1.
    timeMap.get("foo", 1);  -> returns "bar"
    timeMap.get("foo", 3); -> returns "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
    */

  constructor() {
    // Implement the constructor to initialize the object
  }

  get(key, timestamp) {
    // Implement the function
  }

  set(key, value, timestamp) {
    // implement the function
  }
}
