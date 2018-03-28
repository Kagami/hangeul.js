# ruhangul [![npm](https://img.shields.io/npm/v/ruhangul.svg)](https://www.npmjs.com/package/ruhangul) [![Build Status](https://travis-ci.org/Kagami/ruhangul.svg?branch=master)](https://travis-ci.org/Kagami/ruhangul)

Hangul to cyrillic transliteration library.

## Usage

```
npm install ruhangul
```

**Transliterate hangul name to cyrillic**

```js
const ruhangul = require("ruhangul");
console.log(ruhangul.name("전보람"));
```

```
Чон Борам
```

**Transliterate hangul name to latin**

```js
const ruhangul = require("ruhangul");
console.log(ruhangul.enname("전보람"));
```

```
Jeon Boram
```

## License

[MIT](LICENSE). This library is based on the [KoreanTranscription](https://github.com/ob-ivan/KoreanTranscription) code.
