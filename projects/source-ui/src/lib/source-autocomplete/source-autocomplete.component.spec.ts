import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceAutocompleteComponent } from './source-autocomplete.component';

describe('SourceAutocompleteComponent', () => {
    let component: SourceAutocompleteComponent;
    let fixture: ComponentFixture<SourceAutocompleteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SourceAutocompleteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SourceAutocompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});