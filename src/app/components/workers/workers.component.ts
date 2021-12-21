import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkersServiceService} from "../../services/workers-service.service";
import { WorkerComponent } from '../worker/worker.component';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  @ViewChild(WorkerComponent ) child: WorkerComponent | undefined ;

  public workersData: any ;

  constructor(
    private WorkersServiceService : WorkersServiceService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line:typedef
  showSubOrdinates: boolean = false;

  loadData(){
    this.WorkersServiceService.getWorkers().then(response =>
      {
        this.workersData  =  response ;
        console.log('workersData -' + this.workersData);
      }
    );
  }


  openSub(employee_name: any) {
    this.showSubOrdinates = true;
  }
}
