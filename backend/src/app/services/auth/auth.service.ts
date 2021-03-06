import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

//interface
import { Auth_response } from '../../interfaces/auth';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()

export class auth_service {
	private base_url = environment.api_url + 'admin-auth/';

	constructor( private http: HttpClient ){}

	// SIGN IN
	signin_with_credentials( user_credential ){
		let url = this.base_url + 'signin-with-credentials';
		return this.http.post<Auth_response>(url, user_credential, httpOptions);
	}
}


	