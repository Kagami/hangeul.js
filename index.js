"use strict";

const JAMO = [[
  "g", "gg", "n", "d", "dd", "r", "m", "b", "bb", "s", "ss", "", "j", "jj",
  "ch", "kh", "th", "ph", "h",
], [
  "a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oi", "yo",
  "u", "wo", "we", "wi", "yu", "eu", "ui", "i",
], [
  "", "g", "gg", "gs", "n", "nj", "nh", "d", "r", "rg", "rm", "rb", "rs", "rth",
  "rph", "rh", "m", "b", "bs", "s", "ss", "ng", "j", "ch", "kh", "th", "ph", "h",
]];

function transliterateSyl(c/* current char jamos */, p/* previous */, n/* next */) {
  let e1 = c[0];
  let e2 = c[1];
  let e3 = c[2];
  let r1 = "";
  let r2 = "";
  let r3 = "";

  // Make entry consonant.
  switch (e1) {
  case "g":
    r1 = "к";
    if (p) {
      if (p[2] === ""
          || p[2] === "n"
          || p[2] === "r"
          || p[2] === "m"
          || p[2] === "ng") {
        r1 = "г";
      } else if (p[2] === "nh" || p[2] === "h") {
        r1 = "кх";
      }
    }
    break;
  case "gg":
    e1 = "kk";
    r1 = "кк";
    break;
  case "n":
    r1 = "н";
    break;
  case "d":
    r1 = "т";
    if (p) {
      if (p[2] === "" || p[2] === "n" || p[2] === "m" || p[2] === "ng") {
        r1 = "д";
      } else if (p[2] === "r") {
        r1 = "тт";
      } else if (p[2] === "nh" || p[2] === "h") {
        r1 = "тх";
      }
    }
    break;
  case "dd":
    e1 = "tt";
    r1 = "тт";
    break;
  case "r":
    r1 = "р";
    if (p) {
      if ((!n && (p[2] === "n" || p[2] === "r")) || (n && p[2] === "")) {
        e1 = "l";
        r1 = "л";
      } else if (p[2] === "g"
          || p[2] === "gg"
          || p[2] === "kh"
          || p[2] === "ng"
          || p[2] === "b"
          || p[2] === "bb"
          || p[2] === "ph"
          || p[2] === "m"
          || p[2] === "nh") {
        r1 = "н";
      }
    }
    break;
  case "m":
    r1 = "м";
    break;
  case "b":
    r1 = "п";
    if (p) {
      if (p[2] === ""
          || p[2] === "n"
          || p[2] === "r"
          || p[2] === "m"
          || p[2] === "ng") {
        r1 = "б";
      } else if (p[2] === "nh" || p[2] === "h") {
        r1 = "пх";
      }
    }
    break;
  case "bb":
    e1 = "pp";
    r1 = "пп";
    break;
  case "s":
    r1 = "с";
    break;
  case "ss":
    r1 = "сс";
    break;
  case "j":
    r1 = "ч";
    if (p) {
      if (p[2] === "" || p[2] === "n" || p[2] === "m" || p[2] === "ng") {
        r1 = "дж";
      } else if (p[2] === "nh" || p[2] === "h") {
        r1 = "чх";
      }
    }
    break;
  case "jj":
    r1 = "чч";
    break;
  case "ch":
    r1 = "чх";
    break;
  case "":
    if (p && p[2] === "") {
      e1 = "'";
    }
    break;
  case "kh":
    e1 = "k";
    r1 = "кх";
    break;
  case "th":
    e1 = "t";
    r1 = "тх";
    break;
  case "ph":
    e1 = "p";
    r1 = "пх";
    break;
  case "h":
    r1 = "х";
    break;
  }

  // Make vowel.
  switch (e2) {
  case "a":
    r2 = "а";
    break;
  case "ae":
    r2 = "э";
    break;
  case "ya":
    r2 = "я";
    break;
  case "yae":
    r2 = "йя";
    break;
  case "eo":
    r2 = "о";
    break;
  case "e":
    r2 = "е";
    break;
  case "yeo":
    r2 = "ё";
    break;
  case "ye":
    r2 = "йе";
    if (r1 !== "" || (p && p[2] !== "")) {
      r2 = "е";
    }
    break;
  case "o":
    r2 = "о";
    break;
  case "wa":
    r2 = "ва";
    break;
  case "wae":
    r2 = "вэ";
    break;
  case "oi":
    e2 = "oe";
    r2 = "ве";
    break;
  case "yo":
    r2 = "ё";
    break;
  case "u":
    r2 = "у";
    break;
  case "wo":
    r2 = "во";
    break;
  case "we":
    r2 = "ве";
    break;
  case "wi":
    r2 = "ви";
    break;
  case "yu":
    r2 = "ю";
    break;
  case "eu":
    r2 = "ы";
    break;
  case "ui":
    r2 = "ый";
    if (r1 !== "" || p) {
      r2 = "и";
    }
    break;
  case "i":
    r2 = "и";
    break;
  }

  // Make final consonant.
  switch (e3) {
  case "g":
    e3 = "k";
    r3 = "к";
    if (n) {
      if (n[0] === "n" || n[0] === "r" || n[0] === "m") {
        e3 = "ng";
        r3 = "н";
      } else if (n[0] === "") {
        e3 = "g";
        r3 = "г";
      } else if (n[0] === "kh") {
        e3 = "k-";
      }
    }
    break;
  case "gg":
    e3 = "k";
    r3 = "кк";
    break;
  case "gs":
    e3 = "ks";
    r3 = "к";
    if (n && n[0] === "") {
      r3 = "кс";
    }
    break;
  case "n":
    r3 = "н";
    if (n) {
      if (n[0] === "r") {
        e3 = "l";
        r3 = "л";
      } else if (n[0] === "g") {
        e3 = "n-";
      }
    }
    break;
  case "nj":
    r3 = "н";
    if (n && n[0] === "") {
      r3 = "ндж";
    }
    break;
  case "nh":
    r3 = "н";
    break;
  case "d":
    e3 = "t";
    r3 = "т";
    if (n) {
      if (n[0] === "") {
        e3 = "d";
        r3 = "д";
      } else if (n[0] === "n" || n[0] === "r" || n[0] === "m") {
        e3 = "n";
      } else if (n[0] === "th") {
        e3 = "t-";
      }
    }
    break;
  case "r":
    e3 = "l";
    r3 = "ль";
    if (n) {
      if (n[0] === "n" || n[0] === "r") {
        r3 = "л";
      } else if (n[0] === "" || n[0] === "h") {
        r3 = "р";
        if (n[0] === "") {
          e3 = "r";
        }
      }
    }
    break;
  case "rg":
    e3 = "lk";
    r3 = "к";
    if (n) {
      if (n[0] === "") {
        e3 = "lg";
        r3 = "льг";
      }
    }
    break;
  case "rm":
    e3 = "lm";
    r3 = "м";
    if (n && n[0] === "") {
      r3 = "льм";
    }
    break;
  case "rb":
    e3 = "lp";
    r3 = "ль";
    if (n && n[0] === "") {
      e3 = "lb";
      r3 = "льб";
    }
    break;
  case "rs":
    e3 = "ls";
    r3 = "ль";
    if (n && n[0] === "") {
      r3 = "льс";
    }
    break;
  case "rth":
    e3 = "lt";
    r3 = "ль";
    if (n && n[0] === "") {
      r3 = "льтх";
    }
    break;
  case "rph":
    e3 = "lp";
    r3 = "п";
    if (n && n[0] === "") {
      r3 = "льпх";
    }
    break;
  case "rh":
    e3 = "lh";
    r3 = "ль";
    if (n && n[0] === "") {
      r3 = "рх";
    }
    break;
  case "m":
    r3 = "м";
    break;
  case "b":
    e3 = "p";
    r3 = "п";
    if (n) {
      if (n[0] === "n" || n[0] === "r" || n[0] === "m") {
        e3 = "m";
        r3 = "м";
      } else if (n[0] === "") {
        e3 = "b";
        r3 = "б";
      } else if (n[0] === "ph") {
        e3 = "p-";
      }
    }
    break;
  case "bs":
    r3 = "п";
    if (n && n[0] === "") {
      r3 = "пс";
    }
    break;
  case "ng":
    r3 = "н";
    if (n && n[0] === "") {
      e3 = "ng-";
      r3 = "нъ";
    }
    break;
  case "s":
    e3 = "t";
    r3 = "т";
    if (n && (n[0] === "" || n[0] === "s" || n[0] === "ss")) {
      e3 = "s";
      r3 = "с";
    }
    break;
  case "ss":
    e3 = "t";
    r3 = "т";
    if (n) {
      if (n[0] === "s" || n[0] === "ss") {
        r3 = "с";
      } else if (n[0] === "") {
        e3 = "ss";
        r3 = "сс";
      }
    }
    break;
  case "j":
    e3 = "t";
    r3 = "т";
    if (n && n[0] === "") {
      r3 = "дж";
    }
    break;
  case "ch":
    e3 = "t";
    r3 = "т";
    if (n && n[0] === "") {
      r3 = "чх";
    }
    break;
  case "kh":
    e3 = "k";
    r3 = "к";
    if (n && n[0] === "") {
      r3 = "кх";
    }
    break;
  case "th":
    e3 = "t";
    r3 = "т";
    if (n && n[0] === "") {
      r3 = "тх";
    }
    break;
  case "ph":
    e3 = "p";
    r3 = "п";
    if (n && n[0] === "") {
      r3 = "пх";
    }
    break;
  case "h":
    r3 = "т";
    if (n) {
      if (n[0] === "") {
        r3 = "х";
      } else {
        r3 = "";
      }
    }
    break;
  }

  const enSyl = e1 + e2 + e3;
  const ruSyl = r1 + r2 + r3;
  return {enSyl, ruSyl};
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Convert hangul to jamos.
function disassemble(hangul) {
  const chars = [];
  for (let i = 0; i < hangul.length; i++) {
    let n = hangul.charCodeAt(i);
    if (n >= 44032 && n <= 55203) {
      n -= 44032;
      const j1 = Math.floor(n / 588);
      n -= j1 * 588;
      const j2 = Math.floor(n / 28);
      const j3 = n - j2 * 28;
      chars.push([JAMO[0][j1], JAMO[1][j2], JAMO[2][j3]]);
    } else {
      // Non hangul character.
      return null;
    }
  }
  return chars;
}

function transliterateName(hangul) {
  if (!hangul || hangul.length !== 3) return null;

  const chars = disassemble(hangul);
  if (!chars) return null;

  let en = "";
  let ru = "";

  // Family name.
  let {enSyl, ruSyl} = transliterateSyl(chars[0], null, null);
  en += capitalize(enSyl);
  ru += capitalize(ruSyl);
  // Fix famliy name in special cases.
  if (en === "I" || en === "Ri") {
    en = "Lee";
    ru = "Ли";
  } else if (en === "Im" || en === "Rim") {
    ru = "Лим";
  }

  // Given name.
  ({enSyl, ruSyl} = transliterateSyl(chars[1], chars[0], chars[2]));
  en += " " + capitalize(enSyl.replace(/'/, ""));
  ru += " " + capitalize(ruSyl);
  ({enSyl, ruSyl} = transliterateSyl(chars[2], chars[1], null));
  en += enSyl;
  ru += ruSyl;

  return {en, ru};
}

module.exports = {
  /**
   * Transliterate hangul name to cyrillic.
   * If provided name is not valid emptry string is returned.
   *
   * @param {string} hangul - Hangul name
   * @return {string} Name in cyrillic.
   */
  name(hangul) {
    const obj = transliterateName(hangul);
    return obj ? obj.ru : "";
  },
  /**
   * Transliterate hangul name to latin.
   * If provided name is not valid emptry string is returned.
   *
   * @param {string} hangul - Hangul name
   * @return {string} Name in latin.
   */
  enname(hangul) {
    const obj = transliterateName(hangul);
    return obj ? obj.en : "";
  },
};
