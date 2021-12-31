import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-wtf',
  templateUrl: './wtf.component.html',
  styleUrls: ['./wtf.component.css'],
})
export class WtfComponent implements OnInit {
  private ooo$!: any;
  //hero$!: Observable<any>;
  heroes$: Observable<any> | undefined;
  id: number = 0;
  public now: number=321;
  public date: Date | undefined;


  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) {
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

    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHeroes(params.get('id')!))
    );

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
