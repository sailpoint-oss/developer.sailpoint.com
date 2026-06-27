---
id: v1-matchterm-v1
title: MatchtermV1
pagination_label: MatchtermV1
sidebar_label: MatchtermV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MatchtermV1', 'v1MatchtermV1']
slug: /tools/sdk/typescript/apps/models/matchterm-v1
tags: ['SDK', 'Software Development Kit', 'MatchtermV1', 'v1MatchtermV1']
---

# MatchtermV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The attribute name | [default to undefined]
**value** | **(optional)** `string` | The attribute value | [default to undefined]
**op** | **(optional)** `string` | The operator between name and value | [default to undefined]
**container** | **(optional)** `boolean` | If it is a container or a real match term | [default to false]
**and** | **(optional)** `boolean` | If it is AND logical operator for the children match terms | [default to false]
**children** | **(optional)** `Array<{ [key: string]: any; }>` | The children under this match term | [default to undefined]

