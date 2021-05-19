import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const Material = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}