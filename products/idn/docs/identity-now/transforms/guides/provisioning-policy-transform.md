---
id: transforms-in-provisioning-policies
title: Transforms in Provisioning Policies
pagination_label: Transforms in Provisioning Policies
sidebar_label: Transforms in Provisioning Policies
sidebar_class_name: transformsInProvisioningPolicies
keywords: ['transforms', 'guides', 'provisioning', 'policies']
description: Learn how to use transforms in your provisioning policies!
sidebar_position: 3
slug: /docs/transforms/guides/transforms-in-provisioning-policies
tags: ['Transforms', 'Guides', 'Provisioning', 'Policies']
---

## Overview

In this guide, you will learn how to use [IdentityNow's Transforms](/idn/api/v3/transforms) in a provisioning policy to a source. This could be useful if you need to hide the attribute in your identity attribute list but still need the attribute during provisioning.

## Create Provisioning Policy

The create provisioning policy is used when a new user is granted access to a source and needs to be provisioned on that source. You can define your custom attributes that you wish to be created during the provisioning process. You can use transforms to modify the data before sending it to the source.

First, lets call the [GET Provisioning Policy API](/idn/api/v3/get-provisioning-policy) for the source you would like to add your transform to.

An example response for the CREATE provisioning policy of a source.

```json
{
  "name": "Account",
  "description": null,
  "usageType": "CREATE",
  "fields": [
    {
      "name": "email",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "email"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "displayName",
      "transform": {
        "type": "lower",
        "attributes": {
          "input": {
            "type": "identityAttribute",
            "attributes": {
              "name": "displayName"
            }
          }
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "firstName",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "firstName"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "lastName",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "lastName"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "hireDate",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "hireDate"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "enabled",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "enabled"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "boolean",
      "isMultiValued": false
    },
    {
      "name": "locked",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "locked"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "boolean",
      "isMultiValued": false
    }
  ]
}
```

## The Transform to Add to CREATE Policy

This transform concatenates the identityAttributes `firstName`, `lastName`, the two digit month of the `hireDate` and the static string `Rt4e!` to form a temporaryPassword.

:::caution
You must use the identityAttribute type when writing transforms in provisioning policies. The accountAttribute type will not work during provisioning.
:::

```json
{
  "name": "temporaryPassword",
  "transform": {
    "type": "concat",
    "attributes": {
      "values": [
        {
          "type": "identityAttribute",
          "attributes": {
            "name": "firstName"
          }
        },
        {
          "type": "identityAttribute",
          "attributes": {
            "name": "lastName"
          }
        },
        {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "identityAttribute",
              "attributes": {
                "name": "hireDate"
              }
            },
            "start": 5,
            "end": 7
          }
        },
        {
          "type": "static",
          "attributes": {
            "value": "Rt4e!"
          }
        }
      ]
    }
  },
  "attributes": {},
  "isRequired": false,
  "type": "boolean",
  "isMultiValued": false
}
```

Lets assume the following values for the given attributes, this would create the temporaryPassword attribute as `johndoe12Rt4e!`.

| Identity Attribute | Value      |
| ------------------ | ---------- |
| firstName          | john       |
| lastName           | doe        |
| hireDate           | 2023-12-13 |

## Adding the transform to your existing policy

Upload your complete CREATE provisioning policy using the [CREATE Provisioning Policy API](/idn/api/v3/create-provisioning-policy) or use the [UPDATE Provisioning Policy API](/idn/api/v3/put-provisioning-policy) to update an existing provisioning policy.

The full policy with the new attribute added.

```json
{
  "name": "Account",
  "description": null,
  "usageType": "CREATE",
  "fields": [
    {
      "name": "email",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "email"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "displayName",
      "transform": {
        "type": "lower",
        "attributes": {
          "input": {
            "type": "identityAttribute",
            "attributes": {
              "name": "displayName"
            }
          }
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "firstName",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "firstName"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "lastName",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "lastName"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "hireDate",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "hireDate"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "string",
      "isMultiValued": false
    },
    {
      "name": "temporaryPassword",
      "transform": {
        "type": "concat",
        "attributes": {
          "values": [
            {
              "type": "identityAttribute",
              "attributes": {
                "name": "firstName"
              }
            },
            {
              "type": "identityAttribute",
              "attributes": {
                "name": "lastName"
              }
            },
            {
              "type": "substring",
              "attributes": {
                "input": {
                  "type": "identityAttribute",
                  "attributes": {
                    "name": "hireDate"
                  }
                },
                "start": 5,
                "end": 7
              }
            },
            {
              "type": "static",
              "attributes": {
                "value": "Rt4e!"
              }
            }
          ]
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "boolean",
      "isMultiValued": false
    },
    {
      "name": "enabled",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "enabled"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "boolean",
      "isMultiValued": false
    },
    {
      "name": "locked",
      "transform": {
        "type": "identityAttribute",
        "attributes": {
          "name": "locked"
        }
      },
      "attributes": {},
      "isRequired": false,
      "type": "boolean",
      "isMultiValued": false
    }
  ]
}
```

## Next Steps

For more information on all available transforms, see [Transform Operations](/idn/docs/transforms/operations). If you are having trouble with creating your transform in provisioning policies, reach out to us with your question in the [Developer Community Forum](https://developer.sailpoint.com/discuss/)!
