# @itrulia/fractal-variant-status
> Fractal plugin that allows you to set a status on the components variants and filtering them out if needed!

This plugin allows you to tag variants of components if they should be used/can be used or hide work in progress stuff in production releases.

Looking for status labels on components? Then [@itrulia/fractal-component-status](https://github.com/Itrulia/fractal-component-status) is what you want :)

> Please note that this plugin only works for fractal v2!

## Installing / Getting started

To install it you need to require it like this:

```shell
npm install --save @itrulia/fractal-variant-status
```

This will add the @itrulia/fractal-variant-status dependency in to your package.json.

Now you can add it to your `fractal.config.js` like this:

```javascript
app: {
    ...
    plugins: [
        ["@itrulia/fractal-variant-status", {
            statuses: [
                {
                    id: "draft",
                },
                {
                    id: "wip",
                },
                {
                    id: "deprecated",
                },
                {
                    id: "ready",
                },
            ],
            defaultStatus: "wip",
            blacklist: [], 
            whitelist: []
        }]
    ]
},
```

In your components `config.js` you can now add

```javascript
{
    ...
    variants: [
        {
            ...
            status: <STATUS_ID>
        }
    ]
}
```

In your `_component.njk` you can now have access to `variant.status` like this:

```njk
{% if variant.status %}
    {{ variant.status.id }}
{% endif %}
```

inside the variant loop.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/Itrulia/fractal-variant-status
cd fractal-variant-status/
npm install
```

This will download all dependencies so that you are ready to go.

### Deploying / Publishing

You will need to publish this to the github and npm repository.

To do this you will need to do the following steps:

* As soon as you are done with development (don't forget the tests if necessary please ;) ) please commit your code
* After that you will need to update the version number of the package.json, please do this via the [npm version](https://docs.npmjs.com/cli/version) tool. Don't forget to set the correct version number according to the [SEMVER](http://semver.org/) guidelines.
* Please push your code to master now and set a tag (same version as you set earlier) with a `v` prefix (e.g. `v1.1.0`) and add release notes for what has changed so everyone knows what to do when there are breaking changes and what has changed for them.
* Now you are ready to publish it to the npm repository. You can do this via `npm publish`. Further information can be founde on the official [npm documentation page](https://docs.npmjs.com/cli/publish).

## Features

* Allows you to add statuses to your components variants
* Allows you to filter statuses to not be generated/displayed

## Configuration

**Configs are compatible with [@itrulia/fractal-component-status](https://github.com/Itrulia/fractal-component-status)**

### Statuses
Type: `Array<Status>`
Default:

```javaScript
[
    {id: "draft"},
    {id: "wip"},
    {id: "deprecated"},
    {id: "ready"}
]
```

The statuses that are available in the application.
The package will warn you if a component has an status that does not exist!.

#### Status
Type: `{id: String}`

Anything that is added to this object will also be available in the template!
This is useful if you want to give additional information in the UI.

### DefaultStatus
Type: `String`
Default: `wip`

Status that is used if the component has no status set.

### Whitelist
Type: `Array<String>`
Default: `[]`

Array of status ids that should be included in the generated build.

### Blacklist
**If whitelist is populated blacklist will have no effect!**

Type: `Array<String>`
Default: `[]`

Array of status ids that should be filtered out of the generated build.

## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

To make it easier for everyone to contribute to this project and understand it,
please always update the documentation when you create or modify anything.

Also always try to improve atleast 1 small thing when you are already there so that over time
the project gets better and better, this is also known as [The Boy Scout Rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule).

## Links

- Repository: https://github.com/Itrulia/fractal-variant-status
- Issue tracker: https://github.com/Itrulia/fractal-variant-status/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    karlmerkli@gmail.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects:
  - Fractal: http://fractal.build/


## Licensing

Copyright (c) 2018 Karl Merkli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
