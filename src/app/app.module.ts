import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './view/cadastro-pessoa/cadastro-pessoa.component';
import { EsqueciSenhaComponent } from './view/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './view/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoFocusModule } from 'primeng/autofocus';
import { PasswordModule } from 'primeng/password';
import { Divider, DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './components/input/input.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    AutoFocusModule,
    PasswordModule,
    DividerModule,
    InputMaskModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroPessoaComponent,
    InputComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
