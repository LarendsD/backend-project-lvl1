// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default greet;