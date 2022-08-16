# IdentityNow Transforms - Identity Attribute

## Overview

Use the identity attribute transform to get the value of a user's identity attribute. This transform is often useful within a source's account create or disable profile. 

### Other Considerations

> - This transform is **not** intended for use within an another identity profile attribute's calculation. Identity attribute calculations are multi-threaded processes, and there is no guarantee that a specific attribute has current data, or even exists, at the time of calculation within any given transform. *Referencing identity attributes within another identity attribute's calculation can lead to identity exceptions.*

## Transform Structure

The transform for identity attributes requires the desired identity attribute's system `name,` along with the `type` and `name` attributes:

```json
{
  "attributes": {
    "name": "email"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `identityAttribute.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **attributes.name** - The system (camel-cased) name of the identity attribute to bring in.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform returns a user's SailPoint User Name attribute.

**Transform Request Body**:

```json
{
  "attributes": {
    "name": "uid"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```

---

<p>&nbsp;</p>

This transform returns a user's Employee Number attribute.

**Transform Request Body**:

```json
{
  "attributes": {
    "name": "identificationNumber"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```
