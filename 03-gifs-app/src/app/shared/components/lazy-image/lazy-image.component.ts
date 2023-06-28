import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  private _hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('Url is required.');
  }


  get hasLoaded() {
    return this._hasLoaded;
  }
  onLoad() {
    this._hasLoaded = true;
  }

}
