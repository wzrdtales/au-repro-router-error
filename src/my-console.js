import { inject } from 'aurelia'
import { json, IHttpClient } from '@aurelia/fetch-client'

@inject(IHttpClient)
export class MyConsole {

  constructor (http) {
    this.http = http
    this.settings = {}
  }


  loading (params) {
    console.log(params)
  }
}
