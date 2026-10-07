# Use preferred name

## Overview

The `Use Preferred Name` transform uses the [displayName](../operations/display-name.md) operation and forms an identity’s `Display Name` value using the `Preferred Name` value when it exists over the `Given Name` (first name) value. The `Family Name` (last name) value is then appended to form the complete `Display Name`, e.g., ("Preferred Name" or "Given Name") + "Family Name"

## Transform structure

```json
{
  "id": "69e6f907-3034-4c5b-b442-b979166384ee",
  "internal": true,
  "name": "Use Preferred Name",
  "type": "displayName"
}
```
