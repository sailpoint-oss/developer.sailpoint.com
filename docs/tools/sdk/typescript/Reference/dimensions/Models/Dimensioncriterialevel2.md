---
id: v1-dimensioncriterialevel2-v1
title: Dimensioncriterialevel2V1
pagination_label: Dimensioncriterialevel2V1
sidebar_label: Dimensioncriterialevel2V1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Dimensioncriterialevel2V1', 'v1Dimensioncriterialevel2V1']
slug: /tools/sdk/typescript/dimensions/models/dimensioncriterialevel2-v1
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel2V1', 'v1Dimensioncriterialevel2V1']
---

# Dimensioncriterialevel2V1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **(optional)** `DimensioncriteriaoperationV1` |  | [default to undefined]
**key** | **(optional)** `DimensioncriteriakeyV1` |  | [default to undefined]
**stringValue** | **(optional)** `string` | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [default to undefined]
**children** | **(optional)** `Array<Dimensioncriterialevel3V1>` | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [default to undefined]

