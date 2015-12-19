# node-sass-glob
Set this module as your `node-sass` importer and use some globs!

Requires `node >= 4.0.0`.

## Example
```js
let sass = require("node-sass");
let sassGlob = require("node-sass-glob");

sass.render({
	importer: [sassGlob]
});
```

```sass
@import "components/**/*";
```

## License
`node-sass-glob` is available under the MIT license. More details are available in [LICENSE.md](LICENSE.md).