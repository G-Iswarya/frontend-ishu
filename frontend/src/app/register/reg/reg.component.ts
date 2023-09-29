import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms'
import {Route, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import Validateform from 'src/app/helpers/validateform';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  regForm!: FormGroup
  arr:any = ["0101"]
  obj={
    otp:"0101"
  }
  arr1:any = ["0","1","0","1"]

  otpget:any = [];
  public show1:boolean = false;
  public show2:boolean = true;
  public buttonName:any = 'Show';
  constructor(private fb: FormBuilder, private router:Router) //inject formbuilder
  {

  }
  ngOnInit():void{
  this.regForm = this.fb.group({
    name:['',Validators.required],
    pwd:['',Validators.required],
    mobile:['',Validators.required],
    email:['',Validators.required],
  })}

  onsubmit()
  {
    if(this.regForm.valid)
    {
      console.log(this.regForm.value)
      //send val to db
      this.otpget = this.arr[0].split("");
      this.otpget = this.obj.otp.split("");
      console.log(this.otpget);
      this.show1 = !this.show1;
      this.show2 = !this.show2;

      //this.router.navigate(['/home'])
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.regForm);
    }
  }

  
}
