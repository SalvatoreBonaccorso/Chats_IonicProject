import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

// mi creo un interfaccia di Chat
export interface Chat {
  author: string;
  messages: string;
  at: Time;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public api: string = 'https://fake-chat-server.herokuapp.com/chats'

  constructor( public httpClient: HttpClient) { }

  // Metodo che mi ritorna tutte le chats
  public allChats(): Promise<Chat[]> {
    return this.httpClient.get<Chat[]>(this.api).toPromise();
  }

  // Metodo che mi ritorna un determinato elemento in base ad un ID che ricevo
  public byId(id: number): Promise<Chat> {
    return this.httpClient.get<Chat>(`${this.api}/${id}`).toPromise();
  }

}
