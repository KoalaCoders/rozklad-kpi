import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { MapToItarablePipe } from './pipes/map-to-itarable/map-to-itarable.pipe';
import { LessonComponent } from './components/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    TimetableComponent,
    MapToItarablePipe,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
