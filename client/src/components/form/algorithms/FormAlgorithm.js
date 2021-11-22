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
export const formatPhoneNumber = (obj) => {
  var numbers = obj.value.replace(/\D/g, ""),
    char = { 0: "(", 3: ") ", 6: " - " };

  obj.value = "";

  for (var i = 0; i < numbers.length; i++) {
    obj.value += (char[i] || " ") + numbers[i];
  }
};

export const checkPhoneNumber = (input) => {
  var formatted = input.value.replace(/\D/g, "");
  if (formatted.length > 10) {
    input.setCustomValidity("Phone number can only be 10 digits long");
  } else {
    input.setCustomValidity("");
  }
};
