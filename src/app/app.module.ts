import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {CourseComponent} from './course/course.component';
import {FooterComponent} from './footer/footer.component';
import {CourseListComponent} from './course-list/course-list.component';
import {ButtonComponent} from './button/button.component';
import {InputComponent} from './input/input.component';
import {FormsModule} from '@angular/forms';
import {BorderGreenDirective} from './border-green.directive';
import {DurationFormatterPipe} from './duration-formatter.pipe';
import {FilterPipe} from './filter.pipe';
import {OrderByPipe} from './order-by.pipe';
import { AuthPageComponent } from './auth-page/auth-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SearchComponent,
        CourseComponent,
        FooterComponent,
        CourseListComponent,
        ButtonComponent,
        InputComponent,
        BorderGreenDirective,
        DurationFormatterPipe,
        FilterPipe,
        OrderByPipe,
        AuthPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
