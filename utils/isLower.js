module.exports = (str) => {
  for (let iterate = 0; iterate < str.length; iterate++) {
    if (
      (str[iterate] >= "0" && str[iterate] <= "9") ||
      (str[iterate] >= "!" && str[iterate] <= "/")
    ) {
      continue;
    }
    if (!(str[iterate] >= "a" && str[iterate] <= "z")) {
      return false;
    }
  }
  return true;
};
