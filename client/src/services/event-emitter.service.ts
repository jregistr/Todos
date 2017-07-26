import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventEmitterService {

  constructor() {

  }

  private static _emitters: { [ID: string]: EventEmitter<any> } = {};

  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID])
      this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
  }

}
