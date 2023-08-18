import { timer } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/timer
// https://softchris.github.io/books/rxjs/operators-time/

//emit 0 after 1 second then complete, since no second argument is supplied
const src = timer(2000);
//output: 0
// const sub_1 = src.subscribe((val) => console.log('first timer', val));

const source = timer(1000, 2000);
//output: 0,1,2,3,4,5......
const sub_2 = source.subscribe((val) => console.log(val));
