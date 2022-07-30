import { Component, Input, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services';
import { User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() gridItems: Array<any> = [];
  @Input() gridHeaders: Array<string> = [];
  constructor(private uiService: ToggleService) {}

  ngOnInit(): void {}

  showPreview(user: User) {
    this.uiService.showPreview();
    this.uiService.selectItem(user);
  }
}
