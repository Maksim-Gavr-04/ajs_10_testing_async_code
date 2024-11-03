import { test, expect } from '@jest/globals';
import { GameSavingLoader } from '../GameSavingLoader';
import { read } from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing the `GameSavingLoader` class with an error', () => {
  read.mockRejectedValue(new Error('Oops'));

  expect(GameSavingLoader.load()).rejects.toBe('Ошибка: Oops');
});