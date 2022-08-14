import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private spinner: SpinnerService) {
 
  }

  ngOnInit(): void {
    this.subscribeToLoadingStatus();
  }

  subscribeToLoadingStatus(){
    this.spinner.isLoading.subscribe((value)=> {
      this.isLoading=value;
    })
  }

}
