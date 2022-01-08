import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public now: number =  new Date().getTime();// = Date.now();
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {

    setInterval(() => {
      this.now = new Date().getTime();
      console.log(`Hello ${ this.now}`);
    }, 15000)

   //the this thing?? setInterval(this.myFunction, 2000)
  }

 myFunction() {
    this.now = new Date().getTime();
    console.log(`Hello ${ this.now}`);
  }
}
