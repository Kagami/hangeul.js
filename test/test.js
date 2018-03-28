/* global describe, it */

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const ruhangul = require("../");

describe("ruhangul", () => {
  it("should transliterate idol names", () => {
    const fpath = path.join(__dirname, "fixtures", "idols.txt");
    const data = fs.readFileSync(fpath, {encoding: "utf-8"});
    data.trim().split(/\n+/).forEach((line) => {
      const [, input, output] = line.match(/(.*) -> (.*)/);
      assert.equal(ruhangul.name(input), output);
    });
  });
});
