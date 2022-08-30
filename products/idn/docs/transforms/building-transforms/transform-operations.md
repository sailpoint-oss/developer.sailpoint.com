---
id: transform-operations
slug: /transforms/transform-operations
---
# Operations in IdentityNow Transforms

Transforms allow you to manipulate attribute values while aggregating from or provisioning to a source.

You can find more information about the use and construction of transforms in [Building Transforms in IdentityNow](../building-transforms/building-transforms#building-transforms-in-identitynow).

This document lists each type of operation you can perform in a transform and examples of their uses.

Sometimes you will hear these transforms referred to as **Seaspray**, which is the code-name for transforms. IdentityNow Transforms and Seaspray are essentially the same thing.

The general form of a transform definition is the following form:

```json
{
    "type": "<transform-type>",
    "attributes": {
        "transform-attribute-1": "attribute-1-value",
        "transform-attribute-2": "attribute-2-value"
    }
}
```

Attribute values can be any JSON value, including nested transforms and primitive operations. You can use a special attribute, "input," to seed the input value for a transform instead of deriving it from the transform context.

## Transform Operations

Seaspray ships out of the box with a number of primitive operations. The following sections describe the operations.

**Operations:**

* [Account Attribute](./operations/account-attribute)
* [Base64 Decode](./operations/base64-decode)
* [Base64 Encode](./operations/base64-encode)
* [Concatenation](./operations/concatenation)
* [Conditional](./operations/conditional)
* [Date Compare](./operations/date-compare)
* [Date Format](./operations/date-format)
* [Date Math](./operations/date-math)
* [Decompose Diacritial Marks](./operations/decompose-diacritical-marks)
* [E.164 Phone](./operations/e164-phone)
* [First Valid](./operations/first-valid)
* [Generate Random String](./operations/generate-random-string)
* [Get End of String](./operations/get-end-of-string)
* [Get Reference Identity Attribute](./operations/get-reference-identity-attribute)
* [Identity Attribute](./operations/identity-attribute)
* [Index Of](./operations/index-of)
* [ISO3166](./operations/iso-3166)
* [Last Index Of](./operations/last-index-of)
* [Left Pad](./operations/left-pad)
* [Lookup](./operations/lookup)
* [Lower](./operations/lower)
* [Name Normalizer](./operations/name-normalizer)
* [Random Alphanumeric](./operations/random-alphanumeric)
* [Random Numeric](./operations/random-numeric)
* [Reference](./operations/reference)
* [Replace All](./operations/replace-all)
* [Replace](./operations/replace)
* [Right Pad](./operations/right-pad)
* [Rule](./operations/rule)
* [Split](./operations/split)
* [Static](./operations/substring)
* [Substring](./operations/trim)
* [Trim](./operations/trim)
* [Upper](./operations/upper)
* [Username Generator](./operations/username-generator)
* [UUID Generator](./operations/uuid-generator)

## Template Engine

Seaspray ships with the Apache Velocity template engine that allows a transform to reference, transform, and render values passed into the transform context. Every string value in a Seaspray transform can contain templated text and will run through the template engine.

### Example

```javascript
// In the following string, the text "$firstName" is replaced by the value of firstName in the template context. The same goes for "$lastName".
// If $firstName=John and $lastName=Doe then the string "$firstName.$lastName" would render as "John.Doe"
```

### Identity Attribute Context

The following variables are available to the Apache Velocity template engine when a transform is used to source an identity attribute.

* **identity** - sailpoint.object.Identity - This is the identity the attribute promotion is performed on.
* **oldValue** - Object - This is the attribute's previous value.
* **attributeDefinition** - sailpoint.object.ObjectAttribute - This is the definition of the attribute being promoted.

### Account Profile Context

The following variables are available to the Apache Velocity template engine when a transform is used in an account profile.

* **field** - sailpoint.object.Field - This is the field definition backing the account profile attribute.
* **identity** - sailpoint.object.Identity - This is the identity the account profile is generating for.
* **application** - sailpoint.object.Application - This is the application backing the source that owns the account profile.
* **current** - Object - This is the attribute's current value.
