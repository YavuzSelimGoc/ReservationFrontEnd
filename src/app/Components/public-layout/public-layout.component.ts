import { AfterViewInit, Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadCustomJsFiles();
   }

   loadCustomJsFiles(): void {
     get("assets/plugins/jquery/jquery.min.js", () => {});
     get("assets/plugins/bootstrap/js/bootstrap.min.js", () => {});
     get("assets/plugins/bootstrap/js/bootstrap.bundle.min.js", () => {});
     get("assets/plugins/jquery-ui/jquery-ui.min.js", () => {});
     get("assets/js/isotope.min.js", () => {});
     get("assets/js/owl-carousel.js", () => {});
     get("assets/js/custom.js", () => {});
     get("assets/js/counter.js", () => {});
  

   }
}
