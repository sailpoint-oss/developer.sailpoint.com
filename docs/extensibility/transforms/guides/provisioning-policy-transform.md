---
id: transforms-in-provisioning-policies
title: Transforms in provisioning policies
pagination_label: Transforms in Provisioning Policies
sidebar_label: Transforms in Provisioning Policies
sidebar_class_name: transformsInProvisioningPolicies
keywords: ['transforms', 'guides', 'provisioning', 'policies']
description: Learn how to use transforms in your provisioning policies!
sidebar_position: 3
slug: /extensibility/transforms/guides/transforms-in-provisioning-policies
tags: ['Transforms', 'Guides', 'Provisioning', 'Policies']
---

## Overview

In this guide, you will learn how to use [Identity Security Cloud's Transforms](/docs/api/v3/transforms) in a provisioning policy for a source. This can be useful if you need to hide the attribute in your identity attribute list but still need the attribute during provisioning.

## Create provisioning policy

Use the Create provisioning policy for new users who have been granted access to a source and need to be provisioned on that source. You can define the custom attributes you want to create during the provisioning process. You can use transforms to modify the data before sending it to the source.

First, call the [Get Provisioning Policy API](/docs/api/v3/get-provisioning-policy) for the source you want to add your transform to.

This is an example create provisioning policy response for a source:

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

## Add to the create policy

This transform concatenates the identityAttributes `firstName`, `lastName`, the two digit month of the `hireDate` and the static string `Rt4e!` to form a temporaryPassword.

:::caution You must use the `identityAttribute` type when you're writing transforms in provisioning policies. The `accountAttribute` type won't work during provisioning. :::

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

If you assume the given attributes have the following values, this transform would create the temporaryPassword attribute as `johndoe12Rt4e!`.

| Identity Attribute | Value      |
| ------------------ | ---------- |
| firstName          | john       |
| lastName           | doe        |
| hireDate           | 2023-12-13 |

## Add the transform to your existing policy

Upload your complete CREATE provisioning policy by using the [Create Provisioning Policy API](/docs/api/v3/create-provisioning-policy), or use the [Update Provisioning Policy API](/docs/api/v3/put-provisioning-policy) to update an existing provisioning policy.

This is the example response with the full policy, along with the new attribute:

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

## Next steps

For more information on all available transforms, refer to [Transform Operations](/docs/extensibility/transforms/operations). If you're having trouble creating your transform in provisioning policies, reach out with your question in the [Developer Community Forum](https://developer.sailpoint.com/discuss/)!
