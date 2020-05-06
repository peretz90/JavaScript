class HtmlElement {

  constructor(tagName, isClosing, text, attributes, styles, tags) {
    this.tagName = tagName;
    this.isClosing = isClosing;
    this.text = text;
    this.attributes = attributes;
    this.styles = styles;
    this.tags = tags;
  }

  setAttributes(attribute) {
    this.attributes.push(attribute);
  }

  setStyles(styles) {
    this.styles.push(styles);
  }

  setUnshift(element) {
    this.tags.unshift(element);
  }

  setPush(element) {
    this.tags.push(element);
  }

  getHtml() {
    return `<${this.tagName}${this.attributesStr()}>${this.isText()}${this.isTags()}${this.isClosed()}`;
  }

  attributesStr() {
    this.isStyle();
    let result = '';
    for (let att of this.attributes) {
      result += (' ' + att);
    }
    return result;
  }

  stylesStr() {
    let result = '';
    for (let style of this.styles) {
      result += (style + '; ');
    }
    return result;
  }

  tagsStr() {
    let result = '';
    for (let tag of this.tags) {
      result += tag.getHtml();
    }
    return result;
  }

  isText() {
    if (this.text !== undefined) {
      return this.text;
    } else {
      return ``;
    }
  }

  isTags() {
    if (this.tags.length > 0) {
      return this.tagsStr();
    } else {
      return ``;
    }
  }

  isClosed() {
    if (this.isClosing) {
      return `</${this.tagName}>`;
    } else {
      return ``;
    }
  }

  isStyle() {
    if (this.styles.length > 0) {
      this.attributes.push(`style="${this.stylesStr()}"`);
    }
  }

}

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

class HtmlBlock {
  constructor(arrCssClass, htmlElement) {
    this.arrCssClass = arrCssClass;
    this.htmlElement = htmlElement;
  }

  getCode() {
    let cssClassStr = '';
    for (let cssClass of this.arrCssClass) {
      cssClassStr += (cssClass.getCss() + '\n');
    }
    let element = this.htmlElement.getHtml();
    return `<style>${cssClassStr}</style><br>${element}`;
  }

}

let wrap = new CssClass(`.wrap`, [`display: flex;`]);
let block = new CssClass(`.block`, [`width: 300px;`, `margin: 10px;`]);
let img = new CssClass(`.img`, [`width: 100%;`]);
let text = new CssClass(`.text`, [`text-align: justify;`]);
let wrapper = new HtmlElement('div', true, undefined, [`id="wrapper"`, `class="wrap"`], [], []);
let block1 = new HtmlElement('div', true, undefined, [`class="block"`], [], []);
let h3Block1 = new HtmlElement('h3', true, `What is Lorem Ipsum?`, [], [], []);
let imgBlock1 = new HtmlElement(`img`, false, undefined, [`class="img"`,`src="lipsum.jpg"`, `alt="Lorem Ipsum"`], [`width: 100%`], []);
let pBlock1 = new HtmlElement(`p`, true, `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`, [`class="text"`], [], []);
let aBlock1 = new HtmlElement('a', true, `More...`, [`href="http://www.lipsum.com/"`, `target="_blank"`], [], []);

block1.setPush(h3Block1);
block1.setPush(imgBlock1);
block1.setPush(pBlock1);
block1.setPush(aBlock1);

wrapper.setPush(block1);
wrapper.setPush(block1);

let allResult = new HtmlBlock([wrap, block, img, text], wrapper);

document.write(allResult.getCode());