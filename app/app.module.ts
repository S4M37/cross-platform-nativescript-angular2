import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {UserService} from "./shared/user/user.service";
import {NativeScriptHttpModule} from "nativescript-angular/http";

@NgModule({
    imports: [NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule],
    providers: [UserService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
