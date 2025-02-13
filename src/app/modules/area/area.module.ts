import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaRoutingModule } from './area-routing.module';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AreaListComponent } from './pages/area-list/area-list.component';
import { AreaFormModalComponent } from './common/components/area-form-modal/area-form-modal.component';

const PRIMENG_MODULES = [
  ButtonModule,
  CardModule,
  CheckboxModule,
  DialogModule,
  DynamicDialogModule,
  DropdownModule,
  InputTextModule,
  InputTextareaModule,
  MultiSelectModule,
  ProgressBarModule,
  RadioButtonModule,
  SliderModule,
  TableModule,
  TabViewModule,
  TooltipModule,
  TreeTableModule,
  TreeModule,
];

@NgModule({
  declarations: [
    AreaListComponent,
    AreaFormModalComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    ReactiveFormsModule,
    ...PRIMENG_MODULES,
    SharedModule
  ]
})
export class AreaModule { }
