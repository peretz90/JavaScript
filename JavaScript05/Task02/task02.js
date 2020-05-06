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

let wrapper = new HtmlElement('div', true, undefined, [`id="wrapper"`], [`display: flex`], []);
let block1 = new HtmlElement('div', true, undefined, [], [`width: 300px`], []);
let h3Block1 = new HtmlElement('h3', true, `What is Lorem Ipsum?`, [], [], []);
let imgBlock1 = new HtmlElement(`img`, false, undefined, [`src="lipsum.jpg"`, `alt="Lorem Ipsum"`], [`width: 100%`], []);
let pBlock1 = new HtmlElement(`p`, true, `"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`, [], [`text-align: justify`], []);
let aBlock1 = new HtmlElement('a', true, `More...`, [`href="http://www.lipsum.com/"`], [], []);

block1.setPush(h3Block1);
block1.setStyles(`margin: 10px`);
block1.setPush(imgBlock1);
block1.setPush(pBlock1);
pBlock1.setPush(aBlock1);
aBlock1.setAttributes(`target="_blank"`);

wrapper.setPush(block1);
wrapper.setUnshift(block1);

document.write(wrapper.getHtml());