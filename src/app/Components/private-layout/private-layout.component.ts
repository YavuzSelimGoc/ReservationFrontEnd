import { AfterViewInit, Component } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.loadCustomJsFiles();
   }
 
   loadCustomJsFiles(): void {

     get("assets/plugins/jquery/jquery.min.js", () => {});
     get("assets/plugins/bootstrap/js/bootstrap.min.js", () => {});
     get("assets/plugins/jquery-ui/jquery-ui.min.js", () => {});
     get("assets/plugins/bootstrap/js/bootstrap.bundle.min.js", () => {});
     get("assets/plugins/moment/moment.min.js", () => {});
     get("assets/plugins/summernote/summernote-bs4.min.js", () => {});
     get("assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js", () => {});
     get("assets/js/adminlte.js", () => {});
     get("assets/js/pages/dashboard.js", () => {});

   }

}
