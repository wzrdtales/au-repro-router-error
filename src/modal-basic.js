import { bindable, inject, BindingMode } from 'aurelia'

@inject(Element)
export class ModalBasic {
  @bindable title = ''
  @bindable id = ''
  @bindable({ mode: BindingMode.twoWay }) isOpen

  constructor (element) {
    this.host = element
  }

  attaching () {
  }

  attached () {
  }

  detaching () {
     }
}
