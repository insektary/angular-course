import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
	title = 'angular-mentoring';
	currentSearch = '';
	
	setSearchedValue(value: string) {
		this.currentSearch = value;
	}
}
