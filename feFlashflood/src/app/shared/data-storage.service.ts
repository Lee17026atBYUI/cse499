import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private http = inject(HttpClient);

  private accountsApi = URL + 'accounts';
  private endpoints: string[] = ['accounts', 'decks', 'cards'];

  get<T>(endpoint: string) {
    if (!this.isValidEndpoint(endpoint)) {
      return;
    }

    const api = URL + endpoint.toLowerCase();
    return this.http.get<T>(api);
  }

  isValidEndpoint(endpoint: string) {
    return this.endpoints.includes(endpoint);
  }

  getAccounts() {
    return this.http.get(this.accountsApi);
    // return this.http.get(this.accountsApi).subscribe(
    //   accounts => {
    //     return accounts;
    //   }
    // );
  }
}
