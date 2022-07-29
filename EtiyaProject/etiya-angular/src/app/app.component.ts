import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("app.component init fonksiyonu")
  }
  title = 'etiya-angular';

  counter:number = 0;

  increase(count:number = 1){
    this.counter += count;
  }

  getCounter(){
    return(this.counter.toString() + (this.counter <5 ? ' Çok az' : ' Çok fazla')
    ); 
  }

}
