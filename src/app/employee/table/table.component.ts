import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../service/customer.service";
import { Customer } from "../field/customer";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styles: [],
})
export class TableComponent implements OnInit {
  public customer = [];
  constructor(private q: CustomerService) {}

  ngOnInit() {
    this.q.getYourCustomer().subscribe((data) => (this.customer = data));
  }
}
