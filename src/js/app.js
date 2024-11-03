import { GameSavingLoader } from './GameSavingLoader';

// TODO: write code here
(async () => {
  const saving = await GameSavingLoader.load();
  console.log(saving);
})();

console.log('app worked!');