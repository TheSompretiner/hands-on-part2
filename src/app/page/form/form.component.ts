import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REGEX_NUMBER } from 'src/app/constant-variable/regex';
import { DataService } from 'src/app/service/data-service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formGroup : FormGroup = this.formBuilder.group(
    {
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      phoneNumber : ['', [Validators.required, Validators.pattern(REGEX_NUMBER)]],
      email : ['', [Validators.required, Validators.email]]
    }
  )
  formType : string;


  id;
  constructor(private dataService : DataService, 
              private formBuilder : FormBuilder,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    //  this.formType = this.activatedRoute.snapshot.data.formType;
    //  if(this.formType == "edit")
    //  {
    //     this.id = this.activatedRoute.snapshot.paramMap.get("id");
    //     this.data = this.dataService.getDataById(this.id);
    //  }
   }

  submit()
  {
    // if(this.formType == "edit")
    // {
    //   this.dataService.updateData(this.data, this.id);
    // }
    // else
    // {
    //   this.dataService.insertData(this.data);
    // }
    alert("Success")
    this.router.navigate(["/view"])
  }
}
