export function useNumerology(name, birthdate) {
    const getDigits = (text) =>
      text
        .toUpperCase()
        .replace(/[^A-Z]/g, "")
        .split("")
        .map((char) => letterToNumber[char] || 0);
  
    const reduce = (num) => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = num
          .toString()
          .split("")
          .reduce((a, b) => a + parseInt(b), 0);
      }
      return num;
    };
  
    const letterToNumber = {
      A: 1, J: 1, S: 1,
      B: 2, K: 2, T: 2,
      C: 3, L: 3, U: 3,
      D: 4, M: 4, V: 4,
      E: 5, N: 5, W: 5,
      F: 6, O: 6, X: 6,
      G: 7, P: 7, Y: 7,
      H: 8, Q: 8, Z: 8,
      I: 9, R: 9,
    };
  
    const vowels = /[AEIOU]/i;
    const consonants = /[^AEIOU]/i;
  
    const getLifePath = () => {
      if (!birthdate) return "-";
      const digits = birthdate.replace(/-/g, "").split("").map(Number);
      const sum = digits.reduce((a, b) => a + b, 0);
      return reduce(sum).toString();
    };
  
    const getExpression = () => reduce(getDigits(name).reduce((a, b) => a + b, 0)).toString();
    const getSoul = () => reduce(getDigits(name).filter((_, i) => vowels.test(name[i])).reduce((a, b) => a + b, 0)).toString();
    const getPersonality = () => reduce(getDigits(name).filter((_, i) => consonants.test(name[i])).reduce((a, b) => a + b, 0)).toString();
  
    return {
      lifePath: getLifePath(),
      expression: getExpression(),
      soul: getSoul(),
      personality: getPersonality(),
    };
  }
