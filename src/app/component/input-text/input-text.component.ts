import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { REGEX_NUMBER } from 'src/app/constant-variable/regex';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() formGroup : FormGroup;
  @Input() controlName : string;
  @Input() label : string;

  regexNumber = REGEX_NUMBER;

  constructor() { }

  ngOnInit(): void {

  }


  //Jika ingin menambahkan validasi dimana input hanya menerima pattern tertentu
  valueBef = "";
  onInput(event)
  {
    if(this.formGroup.get(this.controlName).errors && 
        this.formGroup.get(this.controlName).errors.pattern && 
        this.formGroup.get(this.controlName).errors.pattern.requiredPattern == this.regexNumber)
    {
      this.formGroup.get(this.controlName).setValue(this.valueBef);
      event.target.value = this.formGroup.get(this.controlName).value;
    }
    this.valueBef =  this.formGroup.get(this.controlName).value;
  }
}
