import { Component } from '@angular/core';
import { ChatComponent } from "../../components/home/chat/chat.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ChatComponent]
})
export class HomeComponent {

}
