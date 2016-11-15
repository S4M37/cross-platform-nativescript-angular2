import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";
import {RouletteComponent} from "./pages/roulette/roulette.component";

export const routes = [
    {path: "", component: LoginComponent},
    {path: "list", component: ListComponent},
    {path: "roulette", component: RouletteComponent}
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    RouletteComponent
];