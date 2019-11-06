import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CourseListComponent} from './course-list.component';
import {CourseComponent} from '../course/course.component';

describe('CourseListComponent', () => {
    let component: CourseListComponent;
    let fixture: ComponentFixture<CourseListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [CourseListComponent, CourseComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
