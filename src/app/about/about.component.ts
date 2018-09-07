import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  txtName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
      console.log(res.name);
      this.txtName = res.name;
    })
  }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate([''])
  }

}
