import { endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const srcList$ = of('Hello', 'Friend', 'Goodbye');

// 1
let list = srcList$
  .pipe(endWith('__Fin!__'))
  .subscribe((val) => console.log(val + ' _el'));
