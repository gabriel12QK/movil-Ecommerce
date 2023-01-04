import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './interceptors/interceptor.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [AppComponent, SearchPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },],
  bootstrap: [AppComponent],
})
export class AppModule {}
