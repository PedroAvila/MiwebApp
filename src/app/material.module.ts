
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule]
})


export class MaterialModule{}




