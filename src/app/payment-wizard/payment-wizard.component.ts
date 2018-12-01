import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-payment-wizard',
  templateUrl: './payment-wizard.component.html',
  styleUrls: ['./payment-wizard.component.scss']
})
export class PaymentWizardComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      console.log(event);
      // this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }
}
