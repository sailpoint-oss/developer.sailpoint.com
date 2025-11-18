---
id: username-generator
title: Username Generator
pagination_label: Username Generator
sidebar_label: Username Generator
sidebar_class_name: usernameGenerator
keywords: ['transforms', 'operations', 'username', 'generator']
description: Derive a unique value for an attribute in an account create profile.
slug: /extensibility/transforms/operations/username-generator
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the username generator transform to specify logic to use when it derives a unique value for an attribute in an account create profile. The generator's logic can be as simple as a combination of parts of a user's name and/or HR data (e.g., firstName.lastName), but sometimes generator logic such as a uniqueness counter can be necessary to find a unique value in the target system (e.g., firstName.lastName1 if firstName.lastName is already taken).

:::note Other Considerations

- The transform allows you to use "uniqueCounter" as a reserved variable for numerically trying the next iteration of the pattern. Once the generator is active on a pattern with the "uniqueCounter," it will keep incrementing until it either has found a unique username candidate, or it exhausts the "cloudMaxUniqueChecks" value. This means that the generator does not process any patterns after one containing "uniqueCounter." The "uniqueCounter" **must always be last** in the pattern list.
- Within the account attribute definition structure, there is a field for "cloudMaxUniqueChecks" that identifies how many times the generator must invoke the uniqueness check logic before it stops executing. The maximum allowed value for this field is 50.

:::

## Transform structure

The username generator transform is intended for use as a configuration within the account create profile for a source. Thus, this transform's structure is more extensive than a typical Seaspray implementation -- it must be assigned to a create profile attribute (designated by `name`) and provide certain uniqueness check attributes such as `cloudMaxSize`, `cloudMaxUniqueChecks`, and `cloudRequired`.

The `cloudMaxSize` attribute denotes the maximum length of generated data allowable as a result of the generator logic. The transform truncates any characters over the `cloudMaxSize`. The `cloudMaxUniqueChecks` attribute determines the maximum number of iterations the generator must attempt before failing to generate a value. The `cloudRequired` attribute is an internal flag required for the Identity Security Cloud platform - leave it as `true`.

Provide the username generator transform itself in the create profile attribute entry's `transform` parameter.

```json
{
  "name": "distinguishedName",
  "transform": {
    "type": "usernameGenerator",
    "attributes": {
      "sourceCheck": true,
      "patterns": [
        "CN=$fi.$ln,OU=Users,DC=YourDomain,DC=com",
        "CN=$fn.$ln,OU=Users,DC=YourDomain,DC=com",
        "CN=$fn.$mi.$ln${uniqueCounter},OU=Users,DC=YourDomain,DC=com"
      ],
      "fn": {
        "type": "identityAttribute",
        "attributes": {
          "name": "firstname"
        }
      },
      "ln": {
        "type": "identityAttribute",
        "attributes": {
          "name": "lastname"
        }
      },
      "fi": {
        "type": "substring",
        "attributes": {
          "input": {
            "type": "identityAttribute",
            "attributes": {
              "name": "firstname"
            }
          },
          "begin": 0,
          "end": 1
        }
      },
      "mi": {
        "type": "substring",
        "attributes": {
          "input": {
            "type": "identityAttribute",
            "attributes": {
              "name": "middlename"
            }
          },
          "begin": 0,
          "end": 1
        }
      }
    }
  },
  "attributes": {
    "cloudMaxSize": "100",
    "cloudMaxUniqueChecks": "5",
    "cloudRequired": "true"
  },
  "isRequired": false,
  "type": "string",
  "isMultiValued": false
}
```

## Attributes

The username generator transform uses the following structure:

```json
{
  "type": "usernameGenerator",
  "attributes": {
    "patterns": [
      "CN=$fn.$ln,OU=Users,DC=YourDomain,DC=com",
      "CN=$fn.$ln${uniqueCounter},OU=Users,DC=YourDomain,DC=com"
    ],
    "sourceCheck": true
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `usernameGenerator`.

---

### `attributes` (required)

The `attributes` object contains the username generation configuration.

#### Required

- **patterns** `array` _(required)_  
  A JSON array of patterns for the generator to evaluate for uniqueness, in sequential order. You can use `$uniqueCounter` to automatically increment a counter if the generated value is not available.

#### Optional

- **sourceCheck** `boolean` _(optional)_  
  Whether the generator checks only the Identity Security Cloud database or queries the target system directly.
  - `true` - Check the target system directly (only if the system supports `getObject`)
  - `false` - Check only the Identity Security Cloud database (default)

#### Optional (dynamic variables)

Additional properties can be defined within the `attributes` object to serve as variables in the patterns. These can be transforms that evaluate to the desired values (e.g., `fn`, `ln`, `fi`, `mi`).

## Examples

This generator takes the user's first initial, appends the user's full last name, and then leverages a uniqueness counter to generate a unique value for userId. For example, if the user's name were John Doe, the username generator would first try `jdoe.` If that were not unique, it would progress to `jdoe1`, then `jdoe2`, until `jdoe25`.

If the generator does not find a unique value within the first 25 tries, it returns an IllegalStateException.

**Transform request body**:

```json
{
  "name": "userId",
  "transform": {
    "type": "usernameGenerator",
    "attributes": {
      "sourceCheck": true,
      "patterns": ["$fi$ln${uniqueCounter}"],
      "ln": {
        "type": "identityAttribute",
        "attributes": {
          "name": "lastname"
        }
      },
      "fi": {
        "type": "substring",
        "attributes": {
          "input": {
            "type": "identityAttribute",
            "attributes": {
              "name": "firstname"
            }
          },
          "begin": 0,
          "end": 1
        }
      }
    }
  },
   "attributes": {
    "cloudMaxSize": "100",
    "cloudMaxUniqueChecks": "25",
    "cloudRequired": "true"
  },
  "isRequired": false,
  "type": "string",
  "isMultiValued": false
}
```

---

<p>&nbsp;</p>

This generator takes the user's first name, appends a period and then the user's full last name, and then adds a uniqueness counter to generate a unique value for accountId. For example, if the user's name were Adam Smith, the username generator would first try "adam.smith". If that were not unique, it would progress to "adam.smith1", then "adam.smith2", until "adam.smith10".

If the generator does not find a unique value within the first 10 tries, it returns an IllegalStateException.

**Transform request body**:

```json
{
  "name": "accountId",
  "transform": {
    "type": "usernameGenerator",
    "attributes": {
      "sourceCheck": true,
      "patterns": ["$fn.$ln${uniqueCounter}"],
      "fn": {
        "type": "identityAttribute",
        "attributes": {
          "name": "firstname"
        }
      },
      "ln": {
        "type": "identityAttribute",
        "attributes": {
          "name": "lastname"
        }
      }
    }
  },
   "attributes": {
    "cloudMaxSize": "100",
    "cloudMaxUniqueChecks": "10",
    "cloudRequired": "true"
  },
  "isRequired": false,
  "type": "string",
  "isMultiValued": false
}
```
