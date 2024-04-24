import { faker } from '@faker-js/faker';

/**
 * Choose a random element from an array
 */
export function chooseRandom<T>(array: T[]): T {
  return array[faker.number.int({ min: 0, max: array.length - 1 })];
}

/**
 * Choose multiple random elements from an array
 */
export function chooseRandomMultiple<T>(array: T[], count: number, canChooseSame: boolean = false): T[] {
  if (!canChooseSame) {
    if (count > array.length) {
      throw new Error('Cannot choose more than the array length');
    }
  }

  const randomNumbers: number[] = [];
  for (let i = 0; i < count; i++) {
    let randomNumber = faker.number.int({ min: 0, max: array.length - 1 });
    if (!canChooseSame) {
      while (randomNumbers.includes(randomNumber)) {
        randomNumber = faker.number.int({ min: 0, max: array.length - 1 });
      }
    }
    randomNumbers.push(randomNumber);
  }

  const result: T[] = [];
  for (let i = 0; i < randomNumbers.length; i++) {
    result.push(array[randomNumbers[i]]);
  }
  return result;
}
