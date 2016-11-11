import {NgModule} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import {UserService} from "./shared/user/user.service";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {routes, navigatableComponents} from "./app.routing";

@NgModule({
    imports: [NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)],
    providers: [UserService],
    declarations: [AppComponent,
        ...navigatableComponents],
    bootstrap: [AppComponent]
})
export class AppModule {
}
