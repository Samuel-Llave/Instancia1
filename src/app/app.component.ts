import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor() {
    this.links = [
      new Link('Gmail', 'http://gmail.com', 0),
      new Link('google', 'http://google.com', 0),
      new Link('youtube', 'http://youtube.com', 0),
      new Link('facebook', 'http://facebook.com', 0)
    ];
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.links.push(new Link(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedLinks() {
    return this.links.sort((a: Link, b: Link) => b.votes - a.votes);
  }

}
