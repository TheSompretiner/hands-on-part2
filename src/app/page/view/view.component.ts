import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  memberList;
  constructor(private dataService : DataService, private router : Router) { }

  ngOnInit(): void {
    this.memberList = this.dataService.getDataList();
  }

  editMember(id : number)
  {
    this.router.navigate(["/edit/" + id]);
  }

  removeMember(id : number)
  {
    console.log(id)
    var message = this.dataService.removeData(id);
    alert(message)
  }

}
