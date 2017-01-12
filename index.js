"use strict";

const glob = require("glob");
const path = require("path");

module.exports = function(url, prev, done) {
	if (!glob.hasMagic(url)) {
		return null;
	}

	let cwd = path.dirname(prev);

	glob(url, {cwd: cwd}, (err, files) => {
		if (err) {
			return console.error(err);
		}

		let imports = [];

		for (let file of files) {
			if (!/\.s[ac]ss$/.test(file)) {
				// This isn't a Sass file!
				continue;
			}

			let fullPath = path.join(cwd, file).replace(/\\/g, "\\\\");

			imports.push(`@import "${fullPath}";\n`);
		}

		done({
			contents: imports.join("\n")
		});
	});
}