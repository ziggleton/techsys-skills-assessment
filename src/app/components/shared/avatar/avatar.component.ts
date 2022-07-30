import { Component, Input, OnInit } from '@angular/core';

export type Size = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() imageSrc: any = null;
  @Input() avatarSize: Size = 'small';

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.imageSrc = null;
    this.avatarSize = 'small';
  }
}
