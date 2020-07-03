import { Component } from '@angular/core';
import { MatIconRegistry, IconOptions } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.loadingSvgIcon();
  }

  // 加载自定义的图标
  loadingSvgIcon() {
    // 1. 第一种方式：添加svg图标
    this.matIconRegistry.addSvgIcon(
      'moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/moon.svg')
    );

    // 2. 第二种方式：在名称空间中添加svg图标，第四个参数支持裁剪功能
    const iconOptions: IconOptions = {
      viewBox: '0,0,800,800'
    };
    this.matIconRegistry.addSvgIconInNamespace(
      'weather',
      'umbrella',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/umbrella.svg'),
      iconOptions
    );

    // 3. 第三种方式：添加svg图标文字【也支持命名空间的方式，使用：addSvgIconLiteralInNamespace】
    this.matIconRegistry.addSvgIconLiteral(
      'open_book',
      this.domSanitizer.bypassSecurityTrustHtml('<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5V5Z" /></svg>')
    );

    // 4. 第四种方式：添加svg图标集【也支持命名空间的方式，使用：addSvgIconLiteralInNamespace】
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/image/layer.svg')
    );
  }

  createLinkElementWithKey(key: string) {
    // const linkEl = document.createElement('link');
    // linkEl.setAttribute('rel', 'stylesheet');
    // linkEl.classList.add(getClassNameForKey(key));
    // document.head.appendChild(linkEl);
    // return linkEl;
  }


}
