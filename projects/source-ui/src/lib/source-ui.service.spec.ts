import { TestBed } from '@angular/core/testing';

import { SourceUiService } from './source-ui.service';

describe('SourceUiService', () => {
  let service: SourceUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SourceUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
