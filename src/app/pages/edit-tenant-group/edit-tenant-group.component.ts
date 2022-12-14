import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-tenant-group',
  templateUrl: './edit-tenant-group.component.html',
  styleUrls: ['./edit-tenant-group.component.css']
})
export class EditTenantGroupComponent implements OnInit {

  data: any;
  display: any;
  p: any;
  user: any;
  menu:any;
  loading: string = 'N';
  page: string = 'plan';

  getLoading(d: string) {
    this.loading=d;
}


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _dataService: DataService,
    public http: HttpClient  // used by upload
) { }

  ngOnInit(): void {

    this._activatedRoute.data.subscribe(({ 
      data })=> { 
        this.data=data;
        console.log(this.data)
        if (this.data.user.force_logout>0) {
          localStorage.removeItem('uid');
          this._router.navigate(['/forced-off',this.data.user.force_logout]);
      }

       this.menu=data.sections;
      this.user=data.user;
      console.log(this.data);
    }) 
  }
  
  formComplete(e: any) {
    this._router.navigate(['/tenant-groups']);
  }

  formClosed(e: any) {
    this._router.navigate(['/tenant-groups']);
  }

  doLeaving(a: any) {
    
  }
}
