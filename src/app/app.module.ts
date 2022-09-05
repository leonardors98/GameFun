import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputSenhaComponent } from './components/input-senha/input-senha.component';
import { InputComponent } from './components/input/input.component';
import { CadastroEnderecoComponent } from './view/cadastro-endereco/cadastro-endereco.component';
import { CadastroPessoaComponent } from './view/cadastro-pessoa/cadastro-pessoa.component';
import { EsqueciSenhaComponent } from './view/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './view/login/login.component';

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
    DropdownModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroPessoaComponent,
    InputComponent,
    CadastroEnderecoComponent,
    InputSenhaComponent,
    DropdownComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
