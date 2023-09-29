import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Validateform from '../helpers/validateform';

@Component({
  selector: 'app-acct1',
  templateUrl: './acct1.component.html',
  styleUrls: ['./acct1.component.css']
})
export class Acct1Component {
  acctForm!: FormGroup
  constructor(private fb: FormBuilder, private router:Router) //inject formbuilder
  {

  }

  ngOnInit():void{
    this.acctForm = this.fb.group({
      acctno:['',Validators.required],
      name:['',Validators.required]
    })}

    onsubmit()
    {
      if(this.acctForm.valid)
      {
        console.log(this.acctForm.value)
        //send val to db
  
        this.router.navigate(['/registerr'])
      }
      else{
        //throw error using toaster
        Validateform.validateform(this.acctForm);
      }
    }
}
