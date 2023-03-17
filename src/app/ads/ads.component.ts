import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from '../@core/services/api.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  
  
  contactForm = new FormGroup({
    fullname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  })
  constructor( private api:ApiService,private toastrService: ToastrService) {


   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.contactForm.value);
    this.api.postJson(environment.baseUrl.concat('contact-us'), this.contactForm.value).subscribe((data)=>{
      this.contactForm.reset();
      console.log(data.massage)
      this.toastrService.success('Message Success!', 'تم ارسال الرسالة بنجاح');
    }) ;
  }
}
