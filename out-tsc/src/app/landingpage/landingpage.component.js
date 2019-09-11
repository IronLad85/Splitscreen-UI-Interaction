import * as tslib_1 from "tslib";
import { Component, HostListener } from "@angular/core";
let LandingpageComponent = class LandingpageComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.expandedPaneIndex = null;
        this.isDeviceCompatible = false;
    }
    onResize(event) {
        if (window.innerWidth >= 1024 && window.innerHeight >= 768) {
            this.isDeviceCompatible = true;
        }
        else {
            this.isDeviceCompatible = false;
        }
    }
    ngOnInit() { }
    expandPane(index, $event) {
        this.expandedPaneIndex = index;
        $event.preventDefault();
        let activePane, inactivePane;
        let preventButtonInvoke = this.elRef.nativeElement.querySelector(".inactive-pane");
        if (!!!preventButtonInvoke) {
            if (index > 0) {
                activePane = this.elRef.nativeElement.querySelector(".right-pane");
                inactivePane = this.elRef.nativeElement.querySelector(".left-pane");
            }
            else {
                activePane = this.elRef.nativeElement.querySelector(".left-pane");
                inactivePane = this.elRef.nativeElement.querySelector(".right-pane");
            }
            activePane.className = activePane.className + " active-pane shrinkable";
            inactivePane.className =
                inactivePane.className + " inactive-pane expandable";
            console.log(activePane);
        }
        return false;
    }
    onInactivePaneClick(index) {
        this.expandedPaneIndex = index;
        let shrinkablePane = this.elRef.nativeElement.querySelector(".shrinkable");
        let expandablePane = this.elRef.nativeElement.querySelector(".expandable");
        if (shrinkablePane && expandablePane) {
            shrinkablePane.className = shrinkablePane.className
                .replace("active-pane", "inactive-pane")
                .replace("shrinkable", "expandable");
            expandablePane.className = expandablePane.className
                .replace("inactive-pane", "active-pane")
                .replace("expandable", "shrinkable");
        }
    }
    resetPanes() {
        this.expandedPaneIndex = null;
        let shrinkablePane = this.elRef.nativeElement.querySelector(".shrinkable");
        let expandablePane = this.elRef.nativeElement.querySelector(".expandable");
        if (shrinkablePane && expandablePane) {
            shrinkablePane.className = shrinkablePane.className
                .replace("shrinkable", "")
                .replace("active", "");
            expandablePane.className = expandablePane.className
                .replace("expandable", "")
                .replace("inactive", "");
        }
    }
};
tslib_1.__decorate([
    HostListener("window:resize", ["$event"])
], LandingpageComponent.prototype, "onResize", null);
LandingpageComponent = tslib_1.__decorate([
    Component({
        selector: "app-landingpage",
        templateUrl: "./landingpage.component.html",
        styleUrls: ["./landingpage.component.scss"]
    })
], LandingpageComponent);
export { LandingpageComponent };
//# sourceMappingURL=landingpage.component.js.map