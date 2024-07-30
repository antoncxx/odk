import { MathUtils } from '@library1/MathUtils';
import { UselessKit } from '@odk/UselessKit';

jest.mock('@library1/MathUtils');

describe('UselessKit', () => {
  describe('compareArrays', () => {
    test('should return true when arrays are equal', () => {
      const array1 = [1, 2, 3];
      const array2 = [1, 2, 3];
      expect(UselessKit.compareArrays(array1, array2)).toBe(true);
    });

    test('should return false when arrays are not equal', () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      expect(UselessKit.compareArrays(array1, array2)).toBe(false);
    });
  });

  describe('randomArray', () => {
    test('should return an array of the specified length with random integers', () => {
      const length = 5;
      const randomInts = [1, 2, 3, 4, 5];

      (MathUtils.randomInt as jest.Mock)
        .mockReturnValueOnce(randomInts[0])
        .mockReturnValueOnce(randomInts[1])
        .mockReturnValueOnce(randomInts[2])
        .mockReturnValueOnce(randomInts[3])
        .mockReturnValueOnce(randomInts[4]);

      const result = UselessKit.randomArray(length);

      expect(result).toHaveLength(length);
      expect(result).toEqual(randomInts);
      expect(MathUtils.randomInt).toHaveBeenCalledTimes(length);
      for (let i = 0; i < length; i++) {
        expect(MathUtils.randomInt).toHaveBeenCalledWith(
          0,
          Number.MAX_SAFE_INTEGER,
        );
      }
    });
  });
});
