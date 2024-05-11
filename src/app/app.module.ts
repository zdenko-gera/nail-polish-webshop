import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire/compat';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    AngularFireModule.initializeApp({"projectId":"mukorom-webshop","appId":"1:824035145873:web:1c23c41a71f0c66418a730","storageBucket":"mukorom-webshop.appspot.com","apiKey":"AIzaSyD6KJ1XXqUatjx925jr0PEH0cnjW1E37us","authDomain":"mukorom-webshop.firebaseapp.com","messagingSenderId":"824035145873"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"mukorom-webshop","appId":"1:824035145873:web:1c23c41a71f0c66418a730","storageBucket":"mukorom-webshop.appspot.com","apiKey":"AIzaSyD6KJ1XXqUatjx925jr0PEH0cnjW1E37us","authDomain":"mukorom-webshop.firebaseapp.com","messagingSenderId":"824035145873"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    MatProgressBarModule,
    MatTooltipModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
