import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { CreatedAtPipe } from './pipes/created-at.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    AppEmailDirective,
    SlicePipe,
    ElapsedTimePipe,
    CreatedAtPipe,
  ],
  imports: [CommonModule],
  exports: [
    LoaderComponent,
    AppEmailDirective,
    SlicePipe,
    ElapsedTimePipe,
    CreatedAtPipe,
  ],
})
export class SharedModule {}
