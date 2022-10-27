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
    /*
    this.addIcon('smile', 'smile');
    this.addIcon('teddy', 'teddy');
    this.addIcon('cup', 'cup');
    this.addIcon('soccer', 'soccer');
    this.addIcon('car', 'car');
    this.addIcon('bulb', 'bulb');
    this.addIcon('hashtag', 'hashtag');
    this.addIcon('flag', 'flag');

    this.addIcon('attach_file', 'attach_file');
    this.addIcon('sticker', 'sticker');
    this.addIcon('gif', 'gif');
    this.addIcon('close', 'close');
    this.addIcon('clock', 'clock');
    */
  }
  private addIcon(name : string, file: string) {
    this.matIconRegistry.addSvgIcon(name, this.path(file));
  }

  private path(file : string) : SafeResourceUrl{
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.basePath}/${file}.svg`);
  }
}
