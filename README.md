# email-split [![Build status](https://travis-ci.org/underdogio/email-split.png?branch=master)](https://travis-ci.org/underdogio/email-split)

Split an email address into its local and domain parts

This was built to grab the name used off of an email address. This library does not perform validation as we retrieve our email addresses from a trusted source.

## Getting Started
Install the module with: `npm install email-split`

```js
var emailSplit = require('email-split');
emailSplit('todd@underdog.io'); /*
{
  local: 'todd',
  domain: 'underdog.io'
}
*/
```

## Documentation
We expose the function `emailSplit` as our `module.exports`.

### `emailSplit(email)`
Function that extracts local and domain parts of email address.

- email `String` - Email address to break down

**Returns:**

- retVal `Object|null` - If the email does not contain an `@`, then we return `null`. Otherwise, we return an `Object`.
    - An `@` is required in a valid email address. We have decided to return `null` for consistency with `Array.match` and `String.split` behaviors.
    - local `String` - Leading portion of email address
        - For example, `todd` in `todd@underdog.io`
    - domain `String` - Tailing portion of email address
        - For example, `underdog.io` in `todd@underdog.io`

> We chose the names `local` and `domain` based off of the RFC specification for `mailto`.
>
> https://tools.ietf.org/html/rfc5322#section-3.4.1

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

## License
Copyright (c) 2015 Underdog.io

Licensed under the MIT license.
