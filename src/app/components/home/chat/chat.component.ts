import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReceiveMessageComponent } from "../conversation/receive-message/receive-message.component";
import { SendMessageComponent } from "../conversation/send-message/send-message.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [ReceiveMessageComponent, SendMessageComponent]
})
export class ChatComponent {
  @ViewChild('messagesContainer')
  private messagesContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error while scrolling:', err);
    }
  }
}
