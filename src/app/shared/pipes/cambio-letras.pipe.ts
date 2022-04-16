import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value:string , ...args: unknown[]): unknown {

    let chars:any =  {'a':'4', 'e':'3', 'i':'1', 'o':'0', 'u': '9'};
    value = value.toLowerCase();
    const newString = value.replace(/[aeiou]/gi, m  => chars[m]);
    
    return newString;
  }

}
