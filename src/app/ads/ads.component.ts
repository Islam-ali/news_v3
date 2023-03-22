import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../@core/services/api.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  
 safeURL:any;
  contactForm = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  })
  constructor( private api:ApiService,private toastrService: ToastrService, private _sanitizer: DomSanitizer) {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ajs_FlDoAF0');
   }

  ngOnInit(): void {
   
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.api.postJson(environment.baseUrl.concat('contact-us'), this.contactForm.value).subscribe((data)=>{
      this.contactForm.reset();
      console.log(data.massage)
      this.toastrService.success('تم ارسال الرسالة بنجاح');
    }) ;
  }
}
