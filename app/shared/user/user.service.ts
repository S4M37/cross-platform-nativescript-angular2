import {Injectable} from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {User} from "./user";
import {Config} from "../config";
import {Http, Headers} from "@angular/http";
import { Observable } from "rxjs/Rx";
@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    register(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("Sign in with emal:" + user.email);
        return this.http.post(Config.apiUrl + "Users",
            JSON.stringify({
                Username: user.email,
                Email: user.email,
                Password: user.password
            }), {headers: headers})
            .catch(this.handleErrors);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}
