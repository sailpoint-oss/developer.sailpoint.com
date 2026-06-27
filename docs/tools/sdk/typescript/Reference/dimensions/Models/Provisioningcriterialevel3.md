---
id: v1-provisioningcriterialevel3-v1
title: Provisioningcriterialevel3V1
pagination_label: Provisioningcriterialevel3V1
sidebar_label: Provisioningcriterialevel3V1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Provisioningcriterialevel3V1', 'v1Provisioningcriterialevel3V1']
slug: /tools/sdk/typescript/dimensions/models/provisioningcriterialevel3-v1
tags: ['SDK', 'Software Development Kit', 'Provisioningcriterialevel3V1', 'v1Provisioningcriterialevel3V1']
---

# Provisioningcriterialevel3V1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `ProvisioningcriteriaoperationV1` |  | [default to undefined]
**attribute** | **(optional)** `string` | Name of the account attribute to be tested. If **operation** is one of `EQUALS`, `NOT_EQUALS`, `CONTAINS`, or `HAS`, this field is required. Otherwise, specifying it results in an error. | [default to undefined]
**value** | **(optional)** `string` | String value to test the account attribute w/r/t the specified operation. If the operation is one of `EQUALS`, `NOT_EQUALS`, or `CONTAINS`, this field is required. Otherwise, specifying it results in an error. If the attribute is not string-typed, the API will convert it to the appropriate type. | [default to undefined]
**children** | **(optional)** `string` | Array of child criteria. This field is required if the operation is `AND` or `OR`. Otherwise, it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [default to undefined]

