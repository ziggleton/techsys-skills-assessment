import { Component, Input, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services';
import { Repo, User } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() gridItems?: User[] | Repo[] | any = [];
  @Input() kind?: string| undefined;
  @Input() gridHeaders?: Array<string> = [];
  constructor(private uiService: ToggleService) {
  }

  ngOnInit(): void {}

  showPreview(user: User) {
    this.uiService.showPreview();
    this.uiService.selectItem(user);
  }
}
