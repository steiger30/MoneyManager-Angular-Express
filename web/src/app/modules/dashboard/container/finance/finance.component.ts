import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Finance } from '../../interfaces/finance';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent implements OnInit {
  teste: number = 2;
  finance: Array<any> = [];

  myData: Finance[];
  formFinance = this.formBuilder.group({
    description: new FormControl<string | null>(''),
    valor: new FormControl<number | null>(null),
    category: new FormControl<string | null>(''),
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.onCheckFinance();
  }

  onCreateFinance() {
    if (this.formFinance.valid) {
      this.dashboardService
        .post(this.formFinance.value as Finance, '/finance')
        .subscribe({
          next: (x) => this.onCheckFinance(),
          error: (x) => console.log(x),
        });
      this.formFinance.reset();
    }
  }
  onDeleteFinance(id: any) {
    this.dashboardService.delete(id).subscribe({
      next: (x) => this.onCheckFinance(),
      error: (x) => console.log(x),
    });
  }
  onCheckFinance() {
/*     this.dashboardService.get().subscribe({
      next: (x) => (this.myData = x),
    }); */
  }
}
