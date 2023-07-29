import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
     ) { }

  updateTitle(title: string): any {
    title = title.replace(/\&nbsp;/g, '');

    title = title.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 40);
    this.title.setTitle(title);
    this.meta.updateTag({name: 'title', content: title});
    this.meta.updateTag({property: 'og:title', content: title});
    this.meta.updateTag({name: 'twitter:title', content: title});
  }

  updateDescription(desc: string): any  {

    desc = desc.replace(/\&nbsp;/g, '');
    desc = desc.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 110);
    this.meta.updateTag({name: 'description', content: desc});
    this.meta.updateTag({property: 'og:description', content: desc});
    this.meta.updateTag({name: 'twitter:description', content: desc});
  }
  updateKeywords(listOfKeywords:string[]=[]){
    this.meta.updateTag({name: 'keywords', content: `${listOfKeywords.toString()}`});
    listOfKeywords.forEach((ele:any , index:number)=>{
      this.updateArticle(ele);
    })

  }
  updateUrl(url:any): any {
    console.log(url);
    this.meta.updateTag({property: 'og:url', content: url});
    this.meta.updateTag({name: 'twitter:url', content: url});
    this.meta.updateTag({name: 'canonical_tag', content: url});
    this.updateCanonicalURL(url);
  }

  updateArticle(tag:string){
      this.meta.addTag({property: 'article:tag', content: tag});
  }

  updateImage(image :any): any  {
    this.meta.updateTag({property: 'og:image', content: image});
    this.meta.updateTag({name: 'twitter:image', content: image});
  }

  updateConstMetaTags(): any {
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
  }

  updateCanonicalURL(url: string): any  {
    const canonicalLink:any = this.doc.getElementById('canonical');
    canonicalLink.setAttribute('href', url);
   }
}
