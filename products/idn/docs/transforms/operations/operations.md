---
id: operations
slug: /docs/transforms/operations
title: Operations
---
# Operations in Identity Now

Transforms allow you to manipulate attribute values while aggregating from or provisioning to a source.

You can find more information about the use and construction of transforms in [Building Transforms in IdentityNow](../building_transforms/building_transforms.md#building-transforms-in-identitynow).

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

* [Account Attribute](./operations/account_attribute.md)
* [Base64 Decode](./operations/base64_decode.md)
* [Base64 Encode](./operations/base64_encode.md)
* [Concatenation](./operations/concatenation.md)
* [Conditional](./operations/conditional.md)
* [Date Compare](./operations/date_compare.md)
* [Date Format](./operations/date_format.md)
* [Date Math](./operations/date_math.md)
* [Decompose Diacritial Marks](./operations/decompose_diacritical_marks.md)
* [E.164 Phone](./operations/e164_phone.md)
* [First Valid](./operations/first_valid.md)
* [Generate Random String](./operations/generate_random_string.md)
* [Get End of String](./operations/get_end_of_string.md)
* [Get Reference Identity Attribute](./operations/get_reference_identity_attribute.md)
* [Identity Attribute](./operations/identity_attribute.md)
* [Index Of](./operations/index_of.md)
* [ISO3166](./operations/iso_3166.md)
* [Last Index Of](./operations/last_index_of.md)
* [Left Pad](./operations/left_pad.md)
* [Lookup](./operations/lookup.md)
* [Lower](./operations/lower.md)
* [Name Normalizer](./operations/name_normalizer.md)
* [Random Alphanumeric](./operations/random_alphanumeric.md)
* [Random Numeric](./operations/random_numeric.md)
* [Reference](./operations/reference.md)
* [Replace All](./operations/replace_all.md)
* [Replace](./operations/replace.md)
* [Right Pad](./operations/right_pad.md)
* [Rule](./operations/rule.md)
* [Split](./operations/split.md)
* [Static](./operations/substring.md)
* [Substring](./operations/trim.md)
* [Trim](./operations/trim.md)
* [Upper](./operations/upper.md)
* [Username Generator](./operations/username_generator.md)
* [UUID Generator](./operations/uuid_generator.md)

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
