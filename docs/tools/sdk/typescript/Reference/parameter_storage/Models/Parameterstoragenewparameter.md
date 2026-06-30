---
id: v1-parameterstoragenewparameter-v1
title: ParameterstoragenewparameterV1
pagination_label: ParameterstoragenewparameterV1
sidebar_label: ParameterstoragenewparameterV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ParameterstoragenewparameterV1', 'v1ParameterstoragenewparameterV1']
slug: /tools/sdk/typescript/parameter_storage/models/parameterstoragenewparameter-v1
tags: ['SDK', 'Software Development Kit', 'ParameterstoragenewparameterV1', 'v1ParameterstoragenewparameterV1']
---

# ParameterstoragenewparameterV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ownerId** | `string` | The UUID of the parameter owner. | [default to undefined]
**name** | `string` | The human-readable name for the parameter. | [default to undefined]
**type** | `string` | The type of the parameter. This cannot be changed after being set. Please see the types document for more information. | [default to undefined]
**publicFields** | **(optional)** `object` | The content must be a JSON object containing the public fields that can be stored with this parameter. | [default to undefined]
**privateFields** | **(optional)** `string` | Must be a JWE AES256 encrypted blob. The content of the blob must be a JSON object containing the private fields that can be stored with this parameter.  | [default to undefined]
**description** | **(optional)** `string` | Describe the parameter | [default to undefined]

