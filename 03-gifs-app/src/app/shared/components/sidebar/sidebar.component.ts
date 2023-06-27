import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsServices: GifsService) { }

  get tagsHistory(): string[] {
    return this.gifsServices.tagsHistory;
  }

  public searchTag(tag: string) {
    this.gifsServices.searchTag(tag);
  }
}
