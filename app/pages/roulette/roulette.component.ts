import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Image} from "ui/image";
import {AnimationCurve} from "ui/enums";
import {Page} from "ui/page";
import {Location} from "@angular/common";


@Component({
    selector: 'roulette',
    templateUrl: 'pages/roulette/roulette.component.html',
    styleUrls: ['pages/roulette/roulette-common.css', 'pages/roulette/roulette.css']
})
export class RouletteComponent implements OnInit {
    ngOnInit(): void {
    }

    constructor(private page: Page,
                private location: Location) {

    }

    isRouletteRunning: boolean = false;
    @ViewChild("rouletteButton") rouletteButton: ElementRef;
    @ViewChild("rouletteGreenBars") rouletteGreenBars: ElementRef;
    @ViewChild("rouletteOrangeBars") rouletteOrangeBars: ElementRef;
    @ViewChild("container") container: ElementRef;

    triggerRoulette() {
        this.isRouletteRunning = !this.isRouletteRunning;
        if (this.isRouletteRunning) {
            this.startRoulette();
        } else {
            this.stopRoulette();
        }
    }

    rotationBar: boolean = false;

    startRoulette() {
        let rouletteGreenBarsImage = <Image>this.rouletteGreenBars.nativeElement;
        let rouletteOrangeBarsImage = <Image>this.rouletteOrangeBars.nativeElement;

        if (!this.rotationBar) {
            this.rotationBar = !this.rotationBar;
            rouletteGreenBarsImage.animate({
                rotate: 360,
                duration: 1800,
                iterations: Number.POSITIVE_INFINITY,
                curve: AnimationCurve.linear
            });
            rouletteOrangeBarsImage.animate({
                rotate: -360,
                duration: 1800,
                iterations: Number.POSITIVE_INFINITY,
                curve: AnimationCurve.linear

            });
        }
    }

    private stopRoulette() {

    }

    onNavBtnTap() {
        this.location.back();
    }
}