import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
  constructor(private gifsService: GifsService){}

  get tagsList(): string[]{
   return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void{
    this.gifsService.searchTag(tag);
  }
}
