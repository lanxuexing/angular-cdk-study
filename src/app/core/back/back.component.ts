import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-back',
    template: `
        <button (click)="goBack()">go back</button>
    `,
    styles: [`
        button {
            display: flex;
            margin-top: 20px;
            font-family: Arial;
            background-color: #eee;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #cfd8dc;
        }
    `]
})
export class BackComponent implements OnInit {
    constructor(
        private location: Location
    ) { }

    ngOnInit(): void { }

    goBack(): void {
        this.location.back();
    }
}
