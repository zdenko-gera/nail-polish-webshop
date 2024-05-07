import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MainComponent } from './pages/main/main.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { StoresComponent } from './pages/stores/stores.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire/compat';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    //MainComponent,
    //ContactComponent,
    //StoresComponent,
    MenuComponent,
    FooterComponent,
    //AddProductComponent,
    //CartComponent
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
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
