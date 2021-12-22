import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-wtf',
  templateUrl: './wtf.component.html',
  styleUrls: ['./wtf.component.css'],
})
export class WtfComponent implements OnInit {
  private ooo$!: any;
  id: number = 0;
  public now: number=321;
  public date: Date | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    // setInterval(() => {
    //   this.date = new Date()
    // }, 3000)

    // setInterval(this.myFunction, 1000);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // do this if it is a number +params['id']
    });

    console.log(`wtf: init id(${this.id})`);
  }

  ngOnDestroy() {
    if (this.ooo$) {
      this.ooo$.unsubscribe();
    }
  }

  // myFunction() {
  //   console.log(`wtf hello ${Date.now()}`);
  //   this.now = Date.now();
  // }
}
