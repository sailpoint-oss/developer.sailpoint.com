---
id: linting
slug: idn/docs/saas-connectivity/in-depth/linting
---
# Linting
To add linting to your project, simple install the linter using NPM:


```npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin``

Then add the ```.eslintrc.yml``` file on the project root:

```yaml
env:
  browser: true
  es2021: true
extends:
  - eslint:recommended
  - plugin:@typescript-eslint/recommended
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: latest
  sourceType: module
plugins:
  - '@typescript-eslint'
rules: {}
```