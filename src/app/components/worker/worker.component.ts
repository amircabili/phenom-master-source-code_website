import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
  // @ts-ignore
  @Input() subordinates : any | undefined;

  public thisWorkerSubordinates  = [];
  public  employee_name: any;

  constructor() { }

  ngOnInit(): void {
  }

  openSub(worker: { subordinates: never[]; employee_name: any; }) {
    this.thisWorkerSubordinates = worker.subordinates;
    this.employee_name = worker.employee_name;

  }
}
