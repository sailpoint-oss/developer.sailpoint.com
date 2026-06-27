---
id: v1-typeaheadquery-v1
title: TypeaheadqueryV1
pagination_label: TypeaheadqueryV1
sidebar_label: TypeaheadqueryV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TypeaheadqueryV1', 'v1TypeaheadqueryV1']
slug: /tools/sdk/typescript/search/models/typeaheadquery-v1
tags: ['SDK', 'Software Development Kit', 'TypeaheadqueryV1', 'v1TypeaheadqueryV1']
---

# TypeaheadqueryV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `string` | The type ahead query string used to construct a phrase prefix match query. | [default to undefined]
**field** | `string` | The field on which to perform the type ahead search. | [default to undefined]
**nestedType** | **(optional)** `string` | The nested type. | [default to undefined]
**maxExpansions** | **(optional)** `number` | The number of suffixes the last term will be expanded into. Influences the performance of the query and the number results returned. Valid values: 1 to 1000. | [default to 10]
**size** | **(optional)** `number` | The max amount of records the search will return. | [default to 100]
**sort** | **(optional)** `string` | The sort order of the returned records. | [default to 'desc']
**sortByValue** | **(optional)** `boolean` | The flag that defines the sort type, by count or value. | [default to false]

