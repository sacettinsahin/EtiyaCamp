import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserForLoginModel } from '../../models/userForLoginModel';
import { UserLoginResponseModel } from '../../models/userLoginResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient) {}

  login(userForLoginModel: UserForLoginModel): Observable<UserLoginResponseModel> {
    return this.httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,
      userForLoginModel
    );
  }
}