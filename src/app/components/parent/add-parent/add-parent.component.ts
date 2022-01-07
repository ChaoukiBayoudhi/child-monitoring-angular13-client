import { ParentService } from './../../../shared/parent.service';
import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/models/parent.model';


@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {
parent:Parent={
  //id: BigInt(0),
  name: '',
  birthDate: new Date()
};
submitted=false;
  constructor(private service: ParentService) { }

  ngOnInit(): void {
  }
  saveParent():void{
    const data={
      name:this.parent.name,
      birthDate:this.parent.birthDate
    };
    this.service.addParent(data)
    .subscribe({
      next: (res)=>{
        console.log(res);
        this.submitted=true;
      },
      error: (e)=>console.error(e)
    });
  }
  newParent():void{
    this.submitted=false;
    this.parent={
      name:this.parent.name,
      birthDate:this.parent.birthDate
    }
  }

}
