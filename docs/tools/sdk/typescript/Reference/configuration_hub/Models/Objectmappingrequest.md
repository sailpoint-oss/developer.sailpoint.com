---
id: v1-objectmappingrequest-v1
title: ObjectmappingrequestV1
pagination_label: ObjectmappingrequestV1
sidebar_label: ObjectmappingrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ObjectmappingrequestV1', 'v1ObjectmappingrequestV1']
slug: /tools/sdk/typescript/configuration_hub/models/objectmappingrequest-v1
tags: ['SDK', 'Software Development Kit', 'ObjectmappingrequestV1', 'v1ObjectmappingrequestV1']
---

# ObjectmappingrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**objectType** | `string` | Type of the object the mapping value applies to, must be one from enum | [default to undefined]
**jsonPath** | `string` | JSONPath expression denoting the path within the object where the mapping value should be applied | [default to undefined]
**sourceValue** | `string` | Original value at the jsonPath location within the object | [default to undefined]
**targetValue** | `string` | Value to be assigned at the jsonPath location within the object | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether or not this object mapping is enabled | [default to false]

