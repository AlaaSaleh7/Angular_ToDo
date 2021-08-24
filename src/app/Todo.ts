export interface Todo{
  // id : number;
  text : string;
  // day: string;
  completed : boolean
}

export const Todos: Todo[] = [
  {
    // id: 1,
    text: 'Study',
    // day: 'sunday 8:00 pm',
    completed: true,
  },
  {
    // id: 2,
    text: 'Codding',
    // day: 'monday 1:30 pm',
    completed: true,
  },
  {
    // id: 3,
    text: 'Eat',
    // day: '',
    completed: false,
  },
];
