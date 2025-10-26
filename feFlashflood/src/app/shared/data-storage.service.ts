import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private http = inject(HttpClient);
  
  private accountsApi = URL + 'accounts';

  getAccounts() {
    return this.http.get(this.accountsApi);
    // return this.http.get(this.accountsApi).subscribe(
    //   accounts => {
    //     return accounts;
    //   }
    // );
  }
}
