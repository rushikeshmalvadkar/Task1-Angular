import { Component } from '@angular/core';
import { UtilityService } from './shared-service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Products: any = [];

  constructor(private utility: UtilityService) {
  }
  ngOnInit() {
    this.utility.getProducts().subscribe(response => {
      this.Products = response;
    })
  }

}
