# IdentityNow Transforms - Index Of

## Overview

Use the index of transform to get the location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1.

### Other Considerations

> - If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the first occurrence. If you want the last occurrence of a substring, use the [Last Index Of](./last_index_of.md) transform. If you want an occurrence that is neither first nor last, use the [Substring](./substring.md) transform.

## Transform Structure

The indexOf transform requires only the substring which you want to search for, along with the `type` and `name` attributes:

```json
{
  "attributes": {
    "substring": "admin_"
  },
  "type": "indexOf",
  "name": "Index Of Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `indexOf.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **substring** - This is the string whose beginning location within the incoming data you want to find.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

The "admin_" substring occurs at the very beginning of the input string, so this transform returns 0.

```bash
Input: "admin_jsmith"
Output: "0"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "substring": "admin_"
  },
  "type": "indexOf",
  "name": "Index Of Transform"
}
```

---

<p>&nbsp;</p>

Though the letter "b" occurs multiple times throughout the input string, the first time it occurs is within the index location 1, so the transform returns that value.

```bash
Input: "abcabcabc"
Output: "1"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "substring": "b"
  },
  "type": "indexOf",
  "name": "Index Of Transform"
}
```
