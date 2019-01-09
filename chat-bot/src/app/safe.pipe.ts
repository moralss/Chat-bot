import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(html) {
    const url: any = this.sanitizer.bypassSecurityTrustResourceUrl(html);
    return url.changingThisBreaksApplicationSecurity.split(" ").join("+");
  }

}