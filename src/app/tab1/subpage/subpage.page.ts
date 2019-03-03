import { Component, OnInit } from '@angular/core';
import { ChatService, Chat } from 'src/app/chat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  public chat: Chat;

  constructor(public chatService: ChatService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const id=this.activatedRoute.snapshot.params.id;
    this.chatService.byId(id).then(result => {
      this.chat=result;
    })

  }

}
