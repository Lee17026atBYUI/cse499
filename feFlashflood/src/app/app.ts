import { Component, inject, OnInit, signal } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'flashflood-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('flashflood');
  // private dataStorageService = inject(DataStorageService);

  // accounts;

  ngOnInit() {
    // this.accounts = this.dataStorageService.getAccounts();
    // this.accounts.subscribe(
    //   response => {
    //     console.log('next', response);
    //   },
    //   error => {
    //     console.log('error', error);
    //   },
    //   complete => {
    //     console.log('complete');
    //   }
    // );
    // console.log('we tried to get accounts', this.accounts);
  }
}
