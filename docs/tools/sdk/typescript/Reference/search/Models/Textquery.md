---
id: v1-textquery-v1
title: TextqueryV1
pagination_label: TextqueryV1
sidebar_label: TextqueryV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TextqueryV1', 'v1TextqueryV1']
slug: /tools/sdk/typescript/search/models/textquery-v1
tags: ['SDK', 'Software Development Kit', 'TextqueryV1', 'v1TextqueryV1']
---

# TextqueryV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | `Array<string>` | Words or characters that specify a particular thing to be searched for. | [default to undefined]
**fields** | `Array<string>` | The fields to be searched. | [default to undefined]
**matchAny** | **(optional)** `boolean` | Indicates that at least one of the terms must be found in the specified fields;  otherwise, all terms must be found. | [default to false]
**contains** | **(optional)** `boolean` | Indicates that the terms can be located anywhere in the specified fields;  otherwise, the fields must begin with the terms. | [default to false]

