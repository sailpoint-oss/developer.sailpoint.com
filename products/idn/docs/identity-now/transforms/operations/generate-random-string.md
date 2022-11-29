---
id: generate-random-string
title: Generate Random String
pagination_label: Generate Random String
sidebar_label: Generate Random String
sidebar_class_name: generateRandomString
keywords: ['transforms', 'operations', 'generate', 'random', 'string']
description: Generate a random string of any length.
slug: /docs/transforms/operations/generate-random-string
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the generate random string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Utility rule. The transform allows you to generate a random string of any length, using true/false flags to denote whether the stringe includes numbers and/or special characters.

:::note Other Considerations

- The generate random string transform shares some common features with two other transforms: [random numeric](./random-numeric.md) and [random alphanumeric](./random-alphanumeric.md). In most cases, either of these other two out-of-the-box transforms are recommended. However, the one advantage of the generate random string transform is its support for special characters, so a common use for this transform is generating random passwords that meet basic complexity requirements.

:::

## Transform Structure

The structure of a generate random string transform requires the `name` of the referenced rule to be the "Cloud Services Deployment Utility" rule built by SailPoint. You must also must set `operation` to `generateRandomString`, provide a `length`, and provide the true/false attributes for `includeNumbers` and `includeSpecialChars`. Last, you must include the `type` and `name` attributes required for all transforms:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "generateRandomString",
    "includeNumbers": "true",
    "includeSpecialChars": "true",
    "length": "16"
  },
  "type": "rule",
  "name": "Generate Random String Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `rule`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **attributes.name** - This must always be set to `Cloud Services Deployment Utility`.
  - **operation** - This must always be set to `generateRandomString`.
  - **includeNumbers** - You must set this value to `true` or `false` to indicate whether the generator logic includes numbers.
  - **includeSpecialChars** - You must set this value to `true` or `false` to indicate whether the generator logic includes the followin special characters:
    - !
    - @
    - \#
    - \$
    - %
    - &
    - \*
    - (
    - )
    - \+
    - <
    - \>
    - ?
  - **length** - This is the required length ofthe randomly generated string.
    > **Note** Due to identity attribute data constraints, the maximum allowable value is 450 characters.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform generates a 16-character random string containing letters, numbers and special characters.

**Transform Request Body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "generateRandomString",
    "includeNumbers": "true",
    "includeSpecialChars": "true",
    "length": "16"
  },
  "type": "rule",
  "name": "Generate Random String Transform"
}
```

---

<p>&nbsp;</p>

This transform generates an 8-character random string containing only letters and numbers.

**Transform Request Body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "generateRandomString",
    "includeNumbers": "true",
    "includeSpecialChars": "false",
    "length": "8"
  },
  "type": "rule",
  "name": "Generate Random String Transform"
}
```
