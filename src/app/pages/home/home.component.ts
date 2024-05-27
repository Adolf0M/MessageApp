import { Component } from '@angular/core';
import { ChatComponent } from "../../components/home/chat/chat.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ChatComponent, NavbarComponent]
})
export class HomeComponent {

}
