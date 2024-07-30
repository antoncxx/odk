import { MathUtils } from '@library1/MathUtils';
import { Arrays } from '@library2/Arrays';

export class UselessKit {
  public static compareArrays<T>(a: T[], b: T[]) {
    return Arrays.equal(a, b);
  }

  public static randomArray(length: number) {
    const retval = new Array(length);

    for (let index = 0; index < length; ++index) {
      retval[index] = MathUtils.randomInt(0, Number.MAX_SAFE_INTEGER);
    }

    return retval;
  }

  public static clampPositive(value: number) {
    return MathUtils.clamp(value, 0, Number.POSITIVE_INFINITY);
  }
}
