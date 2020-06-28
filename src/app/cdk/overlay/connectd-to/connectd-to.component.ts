import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { OverlayRef, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-connectd-to',
  templateUrl: './connectd-to.component.html',
  styleUrls: ['./connectd-to.component.scss']
})
export class ConnectdToComponent implements OnInit {
  @ViewChild('originFab', { static: true }) originFab: MatButton;
  @ViewChild('overlayMenuList') overlayMenuList: TemplateRef<any>;
  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const strategy: PositionStrategy = this.overlay.position().connectedTo(
      this.originFab._elementRef,
      { originX: 'end', originY: 'top' },
      { overlayX: 'end', overlayY: 'bottom' }
    );
    const overlayConfig: OverlayConfig = {
      positionStrategy: strategy
    };
    this.overlayRef = this.overlay.create(overlayConfig);
  }

  displayMenu(): void {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      const componentPortal = new TemplatePortal(
        this.overlayMenuList,
        this.viewContainerRef
      );
      this.overlayRef.attach(componentPortal);
    }
  }

}
