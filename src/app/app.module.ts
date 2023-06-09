import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared-module.module';
import { HomeComponent } from './pages/home/home.component';
import { DayCellComponent } from './components/day-cell/day-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DayCellComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
