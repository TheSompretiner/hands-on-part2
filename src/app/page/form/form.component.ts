import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { REGEX_NUMBER } from 'src/app/constant-variable/regex';
import { ADD_USER, GET_USER_BY_ID, UPDATE_USER } from 'src/app/constant-variable/url-api';
import { RestApiService } from 'src/app/service/rest-api-service/rest-api.service';

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
      phoneNumber : ['', [Validators.required, Validators.pattern(REGEX_NUMBER), Validators.minLength(10), Validators.maxLength(13)]],
      email : ['', [Validators.required, Validators.email]]
    }
  )
  formType : string;
  status = "LOADING";

  id;
  constructor(private restApiService : RestApiService,
              private formBuilder : FormBuilder,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
     this.formType = this.activatedRoute.snapshot.data.formType;
     if(this.formType == "edit")
     {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        this.getMember();
     }
     else
     {
        this.status = "SUCCESS";
     }
   }

   getMember()
   {
     this.status = "LOADING";
     var url = GET_USER_BY_ID;
     this.restApiService.getData(url.replace("{id}", this.id)).subscribe((response) =>
     {
       this.status = "SUCCESS";
       console.info(response);
       if(response.status = 200)
       {
          var data =
          {
            firstName : response.body.content[0].firstName,
            lastName : response.body.content[0].lastName,
            phoneNumber : response.body.content[0].phoneNumber,
            email : response.body.content[0].email
          }
          this.formGroup.setValue(data)
       }
     },
     (error) =>
     {
       this.status = "ERROR";
       console.error(error);
       alert("failed getting member");
     })
   }


  submit()
  {
    if(this.formGroup.valid)
    {
        this.status = "LOADING";
        if(this.formType == "edit")
        {
          this.editMember();
        }
        else
        {
          this.addMember();
        }
    }
    else
    {
      this.formGroup.markAsTouched();
      alert("Form still not valid")
    }

  }

  addMember()
  {
    this.restApiService.insertData(ADD_USER ,this.formGroup.value).subscribe((response) =>
    {
      this.status = "SUCCESS";
      alert("Success")
      this.router.navigate(["/view"])
    }, 
    (error) => 
    {
      this.status = "SUCCESS";
      console.error(error);
      alert("failed adding member");
    })

  }

  editMember()
  {
    var url = UPDATE_USER;
    this.restApiService.updateData(url.replace("{id}", this.id), this.formGroup.value).subscribe((response) =>
    {
      this.status = "SUCCESS";
      alert("Success")
      this.router.navigate(["/view"])
    }, 
    (error) => 
    {
      this.status = "SUCCESS";
      console.error(error);
      alert("failed edit member");
    })

  }

}
