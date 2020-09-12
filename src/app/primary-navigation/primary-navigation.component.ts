import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.css']
})
export class PrimaryNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate($event, location) {
    $event.preventDefault();
    this.router.navigateByUrl(location);
  }
}
