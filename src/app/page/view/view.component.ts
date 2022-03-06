import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DELETE_USER, GET_USERS } from 'src/app/constant-variable/url-api';
import { DataService } from 'src/app/service/data-service/data.service';
import { RestApiService } from 'src/app/service/rest-api-service/rest-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  memberList = [];
  status = "LOADING";
  constructor(private restApiService : RestApiService, 
              private router : Router) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember()
  {
    this.status = "LOADING";
    this.restApiService.getData(GET_USERS).subscribe((response) =>
    {
      this.status = "SUCCESS";
      console.info(response);
      if(response.status = 200)
      {
        this.memberList = response.body.content;
      }
    },
    (error) =>
    {
      this.status = "ERROR";
      console.error(error);
      alert("failed getting member");
    })
  }

  editMember(id : number)
  {
    this.router.navigate(["/edit/" + id]);
  }

  removeMember(id : number)
  {
    this.status = "LOADING";
    var url = DELETE_USER;
    this.restApiService.removeData(url.replace("{id}", id.toString())).subscribe((response) =>
    {
      console.info(response);
      this.getMember();
    },
    (error) =>
    {
      this.status = "ERROR";
      console.error(error);
      alert("Failed deleting member");
    })
  }

}
