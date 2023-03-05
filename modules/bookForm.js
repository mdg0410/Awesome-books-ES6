export default class bookForm {
  constructor(form, index = null) {
    this.form = document.forms[form];
    this.index = index;
  }
}