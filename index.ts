import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

// src: https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith

const srcList$ = of('Hello', 'Friend', 'Goodbye');

// 1
let list = srcList$
  .pipe(endWith('__Fin!__'))
  .subscribe((val) => console.log(val + ' _el'));
