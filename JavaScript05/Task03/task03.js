class CssClass {
  constructor(nameClass, arrStyles) {
    this.nameClass = nameClass;
    this.arrStyles = arrStyles;
  }

  setStyle(style) {
    this.arrStyles.push(style);
  }

  deleteStyle(style) {
    let index = this.arrStyles.indexOf(style);
    if (index !== -1) {
      this.arrStyles = this.arrStyles.slice(index, 1);
    } else {
      console.log('нет такого элемента');
    }
  }

  getCss() {
    let styleStr = '';
    for (let style of this.arrStyles) {
      styleStr += style;
    }
    return `${this.nameClass} {${styleStr}}`;
  }
}