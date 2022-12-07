import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { GeneratorComponent } from './routes/generator/generator.component';
import { CvComponent } from './routes/cv/cv.component';
import { BlogComponent } from './routes/blog/blog.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NavComponent } from './core/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorService } from './services/generator.service';
import { NbaScoresComponent } from './routes/nba-scores/nba-scores.component';
import { NbaService } from './services/nba.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratorComponent,
    CvComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NbaScoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [
    GeneratorService,
    NbaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
