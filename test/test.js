/* global describe, context, beforeEach, it */

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const ruhangul = require("../");

describe("ruhangul", () => {
  describe("fixtures", () => {
    beforeEach(function(done) {
      const fname = `${this.currentTest.parent.title}.txt`;
      const fpath = path.join(__dirname, "fixtures", fname);
      fs.readFile(fpath, {encoding: "utf-8"}, (err, data) => {
        if (err != null) return done(err);
        this.currentTest.ctx.fixture = data.trim().split(/\n+/).map((line) =>
          line.match(/(.*) -> (.*)/).slice(1)
        );
        done();
      });
    });

    context("names-3syl-ru", () => {
      it("should transliterate full names to cyrillic", function() {
        this.fixture.forEach(([input, output]) => {
          assert.equal(output, ruhangul.name(input));
        });
      });
    });

    context("names-3syl-en", () => {
      it("should transliterate full names to latin", function() {
        this.fixture.forEach(([input, output]) => {
          assert.equal(output, ruhangul.enname(input));
        });
      });
    });

    context("names-2syl-ru", () => {
      it("should transliterate short names to cyrillic", function() {
        this.fixture.forEach(([input, output]) => {
          assert.equal(output, ruhangul.name(input));
        });
      });
    });

    context("names-2syl-en", () => {
      it("should transliterate short names to latin", function() {
        this.fixture.forEach(([input, output]) => {
          assert.equal(output, ruhangul.enname(input));
        });
      });
    });
  });
});
