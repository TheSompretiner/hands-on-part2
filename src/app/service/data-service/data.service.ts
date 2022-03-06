import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList =
  [
    {
      id : 1,
      firstName : "Risyaf",
      lastName : "Syamsi",
      phoneNumber : "089124678124",
      email : "risyaf11@dti.co.id"
    },
    {
      id : 2,
      firstName : "Benjamin",
      lastName : "Simanjutntak",
      phoneNumber : "0891124467812",
      email : "ben10@dti.co.id"
    },
    {
      id : 3,
      firstName : "Rikka",
      lastName : "Takanashi",
      phoneNumber : "08921243512",
      email : "rikka.takanashi@dti.co.id"
    },
  ];

  constructor() { }

  getDataList()
  {
    return this.dataList;
  }

  getDataById(id)
  {
    return this.dataList.find((data) => data.id == id);
  }

  insertData(input : any)
  {
    input.id = this.dataList.length + 1;
    this.dataList.push(input);
    return "Success";
  }

  removeData(id : number)
  {
    console.log( this.dataList)
    var index = this.dataList.findIndex((data) => data.id == id);
    console.log(index)
    if(index > -1)
    {
       this.dataList.splice(index, 1)
      return "Success";
    }
    else
    {
      return "Data Not Found"
    }
  }

  updateData(input : any, id : number)
  {
    var index = this.dataList.findIndex((data) => data.id == id);
    input.id = id;
    this.dataList[index] = input;
    return "Success";
  }


}
