import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/modules/logger/services/logger.service';

@Component({
    selector: 'app-savings',
    templateUrl: './savings.component.html',
    styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent implements OnInit {
    constructor(private loggerService: LoggerService) {}

    ngOnInit(): void {
        this.loggerService.log('savings:: init');
    }
}
