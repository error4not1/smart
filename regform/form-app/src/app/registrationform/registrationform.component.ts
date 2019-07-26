import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  userForm:FormGroup;
  constructor(private fb : FormBuilder,private service:CustomersService) { 
    this.buildform();
  }
  buildform(){
  this.userForm = this.fb.group({
    name:this.fb.control('',Validators.required),
    emailId:this.fb.control('',Validators.required),
    mobileNumber:this.fb.control('',[Validators.required,Validators.minLength(10)]),
    password:this.fb.control('',Validators.required),
    addressLine1:this.fb.control('',Validators.required),
    addressLine2:this.fb.control('',Validators.required),
    city:this.fb.control('',Validators.required,),
    pincode:this.fb.control('',[Validators.required,Validators.minLength(6)]),
    state:this.fb.control('',Validators.required),
    dob:this.fb.control('',Validators.required),
    gender:this.fb.control('',Validators.required),
    landmark:this.fb.control('',Validators.required)
  });
  }  
 
get name(){
  return this.userForm.get('name');
}

get emailId(){
  return this.userForm.get('emailId');
}

get mobileNumber(){
  return this.userForm.get('mobileNumber');
}

get password(){
  return this.userForm.get('password');
}

get addressLine1(){
  return this.userForm.get('addressLine1');
}
get addressLine2(){
  return this.userForm.get('addressLine2');
}

get city(){
  return this.userForm.get('city');
}

get state(){
  return this.userForm.get('state');
}
get pincode(){
  return this.userForm.get('pincode');
}

get landmark(){
  return this.userForm.get('landmark');
}

get dob(){
  return this.userForm.get('dob');
}

get gender(){
  return this.userForm.get('gender');
}


onSubmit(customer:FormGroup){

    
  console.log("onsubmit called");
   

    this.mapvalue(customer);
   }
   

   customer:Customer =new Customer() ;

  mapvalue(form : FormGroup)
  {
    this.customer.name=form.controls['name'].value;
    this.customer.emailId=form.controls['emailId'].value;
    this.customer.mobileNumber=form.controls['mobileNumber'].value;
    this.customer.password=form.controls['password'].value;
    this.customer.addressLine1=form.controls['addressLine1'].value;
    this.customer.addressLine2=form.controls['addressLine2'].value;
    this.customer.state=form.controls['state'].value;
    this.customer.pincode=form.controls['pincode'].value;
    this.customer.city=form.controls['city'].value;
    this.customer.dob=form.controls['dob'].value;
    this.customer.gender=form.controls['gender'].value;
    this.customer.landmark=form.controls['landmark'].value;


    this.sendcustomer(this.customer);
  }

  ngOnInit() {
  }
  sendcustomer(customer:Customer){
    this.service.savecustomer(customer).subscribe(data => console.log("hello"));
  }

}
