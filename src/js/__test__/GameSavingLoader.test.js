import { test, expect } from '@jest/globals';
import { GameSavingLoader } from '../GameSavingLoader';

test('Testing the `GameSavingLoader` class', async () => {
  expect.assertions(1);

  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000
    }
  };

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(expected);
});