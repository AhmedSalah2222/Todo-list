import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface List {
  name: string,
  description: string,
  due_date: string,
  status: boolean,
  isEditable: boolean
}

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.css'
})

export class TaskHomeComponent {
  lists: List[] = []

  add_in_list(form: NgForm) {
    this.lists.push({
      name: form.controls['name'].value,
      description: form.controls['description'].value,
      due_date: form.controls['due_date'].value,
      status: false,
      isEditable: false
    })
    form.reset();
  }

  del_from_list(i: number){
    this.lists.splice(i, 1);
  }

  onEdit(index: number) {
    this.lists[index].isEditable = true;
  }

  onSave(index: number, newtask: string, newdescription: string) {
    this.lists[index].name = newtask;
    this.lists[index].description = newdescription;
    this.lists[index].isEditable = false;
  }

  onCheck(index: number) {
    console.log(this.lists);

    this.lists[index].status = !this.lists[index].status;
  }

}
