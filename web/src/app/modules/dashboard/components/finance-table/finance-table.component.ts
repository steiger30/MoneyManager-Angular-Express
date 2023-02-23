import {
  Component,
  Input,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Finance } from '../../interfaces/finance';

export interface PeriodicElement {
  id: string;
  category: string;
  valor: number;
  description: string;
}

@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss'],
})
export class FinanceTableComponent implements OnInit {
  @Input() data: Finance[];
  @Output() deleteFinace = new EventEmitter();
  columns: string[] = ['description', 'valor', 'category'];

  constructor() {}

  ngOnInit(): void {}

  emitterOnDelete(id: any) {
    this.deleteFinace.emit(id);
  }
}
