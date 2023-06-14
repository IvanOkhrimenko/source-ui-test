import { NgModule } from '@angular/core';
import { SourceAutocompleteComponent } from './source-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [SourceAutocompleteComponent, HighlightPipe],
    exports: [SourceAutocompleteComponent, HighlightPipe]
})
export class AutocompleteLibModule {
}