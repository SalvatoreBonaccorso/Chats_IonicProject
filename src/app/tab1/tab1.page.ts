import { Component, OnInit } from '@angular/core';
import { Chat, ChatService } from '../chat.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public chats : Chat[] = [];

  constructor(public chatService: ChatService,public navCtrl: NavController) {}

  public goToSubpage() {
    this.navCtrl.navigateForward('/tabs/tab1/subpage');
    }

  ngOnInit(){
    this.chatService.allChats().then(response=>{
      this.chats=response;
    })
  }

}
