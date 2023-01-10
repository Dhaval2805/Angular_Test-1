import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  countbtn = new BehaviorSubject<number>(0);
  decresebtn = new BehaviorSubject<number>(1);
}
