# Install

```
npm i
```

# Run 

```
./node_modules/gulp/bin/gulp.js
```

or if you have Gulp installed globally

```
gulp
```

# Problem

`susy-breakpoint()` mixin wipes variables after it has been called. Variables like `$mobile: $mobile: 640px;` are left untouched, query-like variables `$tablet: 641px 1024px` are being erased.

See `@debug` messages on building `src/app.scss` and resulting css in `build/app.css`.
