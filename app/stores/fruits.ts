import type {Fruit} from "~/types/fruit";

export const DefaultFruit: Fruit = {
  id: 'fruits',
  name: 'Delicious Fruits',
  emoji: '🌴',
  color: '#00a400',
  description: 'Let\'s Eat Fruits'
};

export const Fruits: Fruit[] = [
  {id: 'apple', name: 'Apple', emoji: '🍎', color: 'red', description: 'Remarks: Delicious'},
  {id: 'banana', name: 'Banana', emoji: '🍌', color: 'yellow', description: 'Remarks: Delicious'},
  {id: 'cherry', name: 'Cherry', emoji: '🍒', color: 'red', description: 'Remarks: Delicious'},
  {id: 'grapes', name: 'Grapes', emoji: '🍇', color: 'purple', description: 'Remarks: Delicious'},
  {id: 'kiwi', name: 'Kiwi', emoji: '🥝', color: 'green', description: 'Remarks: Delicious'},
  {id: 'lemon', name: 'Lemon', emoji: '🍋', color: 'yellow', description: 'Remarks: Delicious'},
  {id: 'orange', name: 'Orange', emoji: '🍊', color: 'orange', description: 'Remarks: Delicious'},
  {id: 'peach', name: 'Peach', emoji: '🍑', color: 'pink', description: 'Remarks: Delicious'},
  {id: 'pear', name: 'Pear', emoji: '🍐', color: 'green', description: 'Remarks: Delicious'},
  {id: 'pineapple', name: 'Pineapple', emoji: '🍍', color: 'yellow', description: 'Remarks: Delicious'},
  {id: 'strawberry', name: 'Strawberry', emoji: '🍓', color: 'red', description: 'Remarks: Delicious'},
  {id: 'watermelon', name: 'Watermelon', emoji: '🍉', color: 'green', description: 'Remarks: Delicious'},
];

export const getFruit = (id: string): Fruit => Fruits.find(fruit => fruit.id === id) ?? DefaultFruit;
