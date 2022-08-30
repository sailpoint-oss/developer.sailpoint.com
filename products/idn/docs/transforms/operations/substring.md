---
id: substring
slug: /transforms/operations/substring
---
# Substring

## Overview

Use the substring transform to get the inner portion of a string passed into the transform. You can use the substring transform to get the first n characters or get a set number of characters within the middle of a string.

### Other Considerations

> - The substring transform does not currently provide an easy way to get the last n characters of a string. To do so, use the [Get End of String](./get_end_of_string.md) transform.

## Transform Structure

In addition to the standard `type` and `name` attributes, the substring transform requires you to provide the beginning location of the input, which indicates the start of the desired substring output:

```json
{
  "attributes": {
    "begin": 4
  },
  "type": "substring",
  "name": "Substring Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `substring.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **begin** - This is the integer value for the location within the input data that contains the first character of the substring you want to return.
    - If `begin` is set to -1, the transform begins at character 0 of the input data.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **beginOffset** - This integer value is the number of characters to add to the `begin` attribute when the transform returns a substring. The transform only uses this attribute if `begin` is not -1.
  - **end** - This is the integer value for the location within the input data that no longer contains the substring you want to return.
    - If `end` is -1 or not provided at all, the substring transform returns everything up to the end of the input string.
  - **endOffset** - This integer value is the number of characters to add to the `end` attribute when the transform returns a substring. The transform only uses this attribute if `end` is provided and is not -1.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform uses a zero-based array to determine that the letter "c" is the begin index of the substring it will return because "c" is in index location 2. Index location 4 contains the letter "e," so the transform will return a substring consisting of anything between the letters "c" and "e," including "c" but excluding "e."

```bash
Input: "abcdef"
Output: "cd"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "begin": 2,
    "end": 4
  },
  "type": "substring",
  "name": "Substring Transform"
}
```

---

<p>&nbsp;</p>

This transform uses a zero-based array to determine that the substring transform must begin with the letter "c" because even though the letter "b' is in index location 1, the beginOffset value indicates one additional character must be skipped. Index location 3 contains the letter "d," so the transform would normally end at the character preceding "d." However, with the endOffset value set to 2, the transform must include an additional two characters, "d" and "e." Thus, the transform returns "cde."

```bash
Input: "abcdef"
Output: "cde"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "begin": 1,
    "end": 3,
    "beginOffset": 1,
    "endOffset": 2
  },
  "type": "substring",
  "name": "Substring Transform"
}
```
