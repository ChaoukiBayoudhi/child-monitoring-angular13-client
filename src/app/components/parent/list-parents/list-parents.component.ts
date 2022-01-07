import { ParentService } from './../../../shared/parent.service';
import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/models/parent.model';

@Component({
  selector: 'app-list-parents',
  templateUrl: './list-parents.component.html',
  styleUrls: ['./list-parents.component.css']
})
export class ListParentsComponent implements OnInit {
  parents?: Parent[];
  currentParent: Parent = {};
  currentIndex = -1;
  name = '';
  constructor(private service: ParentService) { }

  ngOnInit(): void {
    return this.retrieveParents();
  }
  retrieveParents(): void {
    this.service.allParents()
      .subscribe({
        next: (data) => {
          this.parents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveParents();
    this.currentParent = {};
    this.currentIndex = -1;
  }

  setActiveParent(parent: Parent, index: number): void {
    this.currentParent = parent;
    this.currentIndex = index;
  }

  removeAllParents(): void {
    this.service.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentParent = {};
    this.currentIndex = -1;

    this.service.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.parents = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
