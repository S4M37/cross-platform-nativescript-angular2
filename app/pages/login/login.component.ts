import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";
import {Page} from "ui/page";
import {Image} from "ui/image";

@Component({
    selector: "login",
    templateUrl: "pages/login/login.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn: boolean;

    @ViewChild("container") container: ElementRef;
    @ViewChild("login_bg") loginBg: ElementRef;

    constructor(private userService: UserService,
                private router: Router,
                private page: Page) {
    }

    ngOnInit(): void {
        this.user = new User();
        this.user.email = "vynder@vynd.com";
        this.isLoggingIn = true;
        this.page.actionBarHidden = true;
    }

    submit(): void {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        /*container.animate({
         backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
         duration: 200
         });*/
        let loginBg: Image = <Image>this.loginBg.nativeElement;
        loginBg.animate({
            scale: this.isLoggingIn ? ({
                x: 1.0,
                y: 1.0
            }) : ({
                x: 1.05,
                y: 1.05
            }),
            duration: 500
        });
    }

    login() {
        this.userService.login(this.user)
            .subscribe(()=>this.router.navigate(["/list"]),
                (error)=>alert("Unfortunately we could not find your account."));
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

    goToRoulette() {
        this.router.navigate(["/roulette"]);
    }
}