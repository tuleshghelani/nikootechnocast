import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  facebook() {
    const url = "https://www.facebook.com/pages/Nikoo-Technocast/122251241258219"
    window.open(url, '_blank');
  }

  twitter() {
    const url = "https://twitter.com/nikootechnocast"
    window.open(url, '_blank');
  }

}
