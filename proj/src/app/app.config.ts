import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { StepsModule } from 'primeng/steps';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
    import { providePrimeNG } from 'primeng/config';
    import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(appRoutes),  provideHttpClient(),
     provideAnimationsAsync(),
     providePrimeNG({ theme: { preset: Aura } })
    ]
};


// primeng-imports.ts
export const PRIMENG_IMPORTS = [
  InputTextModule,
  ButtonModule,
  DropdownModule,
  CalendarModule,     // Calendar = DatePicker + RangePicker (through configs)
  InputNumberModule,
  PasswordModule,
  CheckboxModule,
  RadioButtonModule,
  MultiSelectModule,
  SliderModule,
  RatingModule,
  FileUploadModule,
  TableModule,
  DialogModule,
  TooltipModule,
  ToastModule,
  ConfirmDialogModule,
  CardModule,
  ToolbarModule,
  SidebarModule,
  AccordionModule,
  TabViewModule,
  ProgressBarModule,
  StepsModule,
  MenubarModule,
  MegaMenuModule,
  BreadcrumbModule,
  MessageModule,
  MessagesModule,
  SplitButtonModule,
  DividerModule
];
