import { Component, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading.service';
import { PageReloadService } from './core/services/page-reload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public loadingService: LoadingService,
    public pageReloadService: PageReloadService
  ) {}
  ngOnInit(): void {}
}
