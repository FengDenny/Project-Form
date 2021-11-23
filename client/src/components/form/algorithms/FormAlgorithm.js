// Time Complexity: 0(n)
export const formInputCheck = (data) => {
  // loop through array
  for (var x in data) {
    // check if data exist
    if (data[x]) {
      // return data
      return data[x];
    }
  }
};
// Time Complexity: 0(n)
export const formatPhoneNumber = (ref) => {
  var numbers = ref.current.value.replace(/\D/g, ""),
    char = { 0: "(", 3: ") ", 6: " - " };
  ref.current.value = "";
  for (var i = 0; i < numbers.length; i++) {
    ref.current.value += (char[i] || "") + numbers[i];
  }
};
