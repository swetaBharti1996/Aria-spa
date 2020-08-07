import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Headers, Http, Response, HttpModule } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../field/customer";

@Injectable({
  providedIn: "root",
})
@Injectable({
  providedIn: "root",
})
@Injectable()
export class CustomerService {
  private _url: string = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) {}
  getYourCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._url);
  }
}
