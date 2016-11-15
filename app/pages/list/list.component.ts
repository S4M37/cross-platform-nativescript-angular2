import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {Grocery} from "../../shared/grocery/grocery";
import {TextField} from "ui/text-field";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "list",
    templateUrl: "pages/list/list.component.html",
    styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
    providers: [GroceryListService]
})
export class ListComponent implements OnInit {
    groceryList: Array<Grocery> = [];
    grocery = "";
    @ViewChild("groceryTextField") groceryTextField: ElementRef;

    listLoaded = false;
    isLoading = true;

    constructor(private groceryListService: GroceryListService) {
    }

    ngOnInit() {
        this.groceryListService.load()
            .subscribe((loadedGroceries)=> {
                loadedGroceries.forEach((groceryObject)=> {
                    this.groceryList.unshift(groceryObject)
                });
                console.log(JSON.stringify(this.groceryList));
                this.isLoading = false;
                this.listLoaded = true;
            });
    }

    add() {
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }

        // Dismiss the keyboard
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();


        this.groceryListService.add(this.grocery)
            .subscribe(
                groceryObject => {
                    this.groceryList.unshift(groceryObject);
                    this.grocery = "";
                },
                () => {
                    alert({
                        message: "An error occurred while adding an item to your list.",
                        okButtonText: "OK"
                    });
                    this.grocery = "";
                }
            )
    }

    share() {
        let list = [];
        for (let i = 0, size = this.groceryList.length; i < size; i++) {
            list.push(this.groceryList[i].name);
        }
        let listString = list.join(", ").trim();
        SocialShare.shareText(listString);
    }

}