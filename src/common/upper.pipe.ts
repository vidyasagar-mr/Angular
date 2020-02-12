import { PipeTransform, Pipe } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe(name='upper')
export class Upper implements PipeTransform{

transform(value:any, ...args: any[]){
if(args[0] === 'upper'){
return value.toUpperCase();
}
}


//  {{costomer.name | upper}}

}