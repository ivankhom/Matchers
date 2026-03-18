import sortHeroesByHealth from '../sort';

describe('sortHeroesByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual(expected);
  });

  test('should not mutate the original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const originalCopy = [...heroes];
    sortHeroesByHealth(heroes);
    expect(heroes).toEqual(originalCopy);
  });

  test('should handle empty array', () => {
    const heroes = [];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([]);
  });

  test('should handle array with one hero', () => {
    const heroes = [{ name: 'мечник', health: 10 }];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([{ name: 'мечник', health: 10 }]);
  });
});