---
id: v1-searchcriteria-v1
title: SearchcriteriaV1
pagination_label: SearchcriteriaV1
sidebar_label: SearchcriteriaV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SearchcriteriaV1', 'v1SearchcriteriaV1']
slug: /tools/sdk/typescript/suggested_entitlement_description/models/searchcriteria-v1
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaV1', 'v1SearchcriteriaV1']
---

# SearchcriteriaV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**indices** | `Array<string>` | A list of indices to search within. Must contain exactly one item, typically \"entitlements\". | [default to undefined]
**filters** | **(optional)**  | A map of filters applied to the search. Keys are filter names, and values are filter definitions. | [default to undefined]
**query** | **(optional)** `SearchcriteriaQueryV1` |  | [default to undefined]
**queryType** | **(optional)** `string` | Specifies the type of query. Must be \"TEXT\" if `textQuery` is used. | [default to undefined]
**textQuery** | **(optional)** `SearchcriteriaTextQueryV1` |  | [default to undefined]
**includeNested** | **(optional)** `boolean` | Whether to include nested objects in the search results. | [default to false]
**sort** | **(optional)** `Array<string>` | Specifies the sorting order for the results. | [default to undefined]
**searchAfter** | **(optional)** `Array<string>` | Used for pagination to fetch results after a specific point. | [default to undefined]

