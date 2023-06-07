/**
 * A simple class containing methods for validating numbers
 *
 * @class NumbersValidator
 */
export class NumbersValidator {
/**
 * Creats an instance
 * @memberof NumbersValidator
 */
  constructor() {
  }
  /**
   * @param {Number} number number to check
   * @return {Boolean} true if the number is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number"; it is of type "${typeof typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  }
};
