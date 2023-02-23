import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(value: string, length: number): string {
    const biggestWord = 50;
    const ellipses = "...";
    if(typeof value === "undefined") return value;
    if(value.length <= length) return value;
    //.. truncate to about correct lenght
    let truncatedText = value.slice(0, length + biggestWord);
    //.. now nibble ends till correct length
    while (truncatedText.length > length - ellipses.length) {
        let lastSpace = truncatedText.lastIndexOf(" ");
        if(lastSpace === -1) break;
        truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
    };
   return truncatedText + ellipses;
  }

}
