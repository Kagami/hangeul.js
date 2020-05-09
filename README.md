# hangeul.js [![npm](https://badge.fury.io/js/hangeul.svg)](https://www.npmjs.com/package/hangeul) [![Build Status](https://travis-ci.org/kpopnet/hangeul.js.svg?branch=master)](https://travis-ci.org/kpopnet/hangeul.js)

Hangeul transliteration library. Transliteration of Korean names to latin and cyrillic is currently supported.

## Usage

```
npm install hangeul
```

**Transliterate hangul name to latin**

```js
const hangeul = require("hangeul");
console.log(hangeul.enname("전보람"));
```

```
Jeon Boram
```

**Transliterate hangul name to cyrillic**

```js
const hangeul = require("hangeul");
console.log(hangeul.runame("전보람"));
```

```
Чон Борам
```

## License

[MIT](LICENSE). This library is based on the [KoreanTranscription](https://github.com/ob-ivan/KoreanTranscription) code.
