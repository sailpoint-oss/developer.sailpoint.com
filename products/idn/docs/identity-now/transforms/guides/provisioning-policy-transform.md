---
id: transforms-in-provisioning-policies
title: Transforms in Provisioning Policies
pagination_label: Transforms in Provisioning Policies
sidebar_label: Transforms in Provisioning Policies
sidebar_class_name: transformsInProvisioningPolicies
keywords: ['transforms', 'guides', 'provisioning', 'policies']
description: Learn how to use transforms in your provisioning policies!
sidebar_position: 1
slug: /docs/transforms/guides/transforms-in-provisioning-policies
tags: ['Transforms', 'Guides', 'Provisioning', 'Policies']
---

## Overview

In this guide, you will learn how to use [IdentityNow's Transforms](/idn/api/v3/transforms) in a provisioning policy to a source. This could be useful if you need to hide the attribute in your identity attribute list but still need the attribute during provisioning.

## Create Provisioning Policy

First, lets call the [GET Provisioning Profile API](/idn/api/v3/get-provisioning-policy) for the source you would like to add your transform to.

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

# The Transform to Add to CREATE Policy

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
                "start": 3,
                "end": 5
            }
        }]
    }
  },
  "attributes": {},
  "isRequired": false,
  "type": "boolean",
  "isMultiValued": false
}
```
