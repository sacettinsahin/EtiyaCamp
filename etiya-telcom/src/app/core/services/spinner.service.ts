import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(){}

  setIsLoading(loading: boolean){
    this.isLoading.next(loading);
  }

}