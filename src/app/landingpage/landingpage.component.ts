import { Component, OnInit, HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html",
  styleUrls: ["./landingpage.component.scss"]
})
export class LandingpageComponent implements OnInit {
  expandedPaneIndex = null;
  isDeviceCompatible = false;
  baseURL="Splitscreen-UI-Interaction/"

  constructor(public elRef: ElementRef) {
    this.onResize(null);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (window.innerWidth >= 1024 && window.innerHeight >= 768) {
      this.isDeviceCompatible = true;
    } else {
      this.isDeviceCompatible = false;
    }
  }

  ngOnInit() {}

  expandPane(index, $event) {
    this.expandedPaneIndex = index;
    $event.preventDefault();
    let activePane, inactivePane;
    let preventButtonInvoke = this.elRef.nativeElement.querySelector(
      ".inactive-pane"
    );
    if (!!!preventButtonInvoke) {
      if (index > 0) {
        activePane = this.elRef.nativeElement.querySelector(".right-pane");
        inactivePane = this.elRef.nativeElement.querySelector(".left-pane");
      } else {
        activePane = this.elRef.nativeElement.querySelector(".left-pane");
        inactivePane = this.elRef.nativeElement.querySelector(".right-pane");
      }
      activePane.className = activePane.className + " active-pane shrinkable";
      inactivePane.className =
        inactivePane.className + " inactive-pane expandable";
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
}
