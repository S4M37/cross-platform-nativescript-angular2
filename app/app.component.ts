import {Component, OnInit} from "@angular/core";
import {User} from "./shared/user/user";
import {UserService} from "./shared/user/user.service";

@Component({
    selector: "my-app",
    templateUrl: "pages/login/login.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent implements OnInit {
    user: User;
    isLoggingIn: boolean = true;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.user = new User();
    }

    submit(): void {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    private login() {

    }

    signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }
}