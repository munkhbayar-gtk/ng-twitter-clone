import { NgModule } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@NgModule({
  exports: [],
  declarations: [
  ]
})
export class MatIconCustomModule {
  private basePath: string="../assets/images/svg-icons";

  constructor(
    private domSanitizer : DomSanitizer,
    public matIconRegistry : MatIconRegistry){
      this.addIcons();
  }

  private addIcons() : void{
    this.addIcon('twitter', 'twitter');
    this.addIcon('feather', 'feather');
    ['bookmark', 'hashtag', 'home', 'list','bookmark', 'message','more','notif','profile']
    .forEach(svg=>{
      this.addIcon(svg, svg);
      this.addIcon(`${svg}-outline`,`${svg}-outline`);
    });

    ['image','gif','poll','emoji','schedule','location'].forEach(media=>{
      const m = `media-${media}`;
      this.addIcon(m, m);
    });
    [
      'reply', 'retweet','like','share',
      'plus', 'globe', 'globe-outline','ppl-follow', 'email',
      'check', 'twitter-circle']
    .forEach(i=>{
      this.addIcon(i, i);
    });
  }
  private addIcon(name : string, file: string) {
    this.matIconRegistry.addSvgIcon(name, this.path(file));
  }

  private path(file : string) : SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.basePath}/${file}.svg`);
  }
}
