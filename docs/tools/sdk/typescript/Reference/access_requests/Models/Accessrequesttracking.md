---
id: v1-accessrequesttracking-v1
title: AccessrequesttrackingV1
pagination_label: AccessrequesttrackingV1
sidebar_label: AccessrequesttrackingV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessrequesttrackingV1', 'v1AccessrequesttrackingV1']
slug: /tools/sdk/typescript/access_requests/models/accessrequesttracking-v1
tags: ['SDK', 'Software Development Kit', 'AccessrequesttrackingV1', 'v1AccessrequesttrackingV1']
---

# AccessrequesttrackingV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestedFor** | **(optional)** `string` | The identity id in which the access request is for. | [default to undefined]
**requestedItemsDetails** | **(optional)** `Array<RequesteditemdetailsV1>` | The details of the item requested. | [default to undefined]
**attributesHash** | **(optional)** `number` | a hash representation of the access requested, useful for longer term tracking client side. | [default to undefined]
**accessRequestIds** | **(optional)** `Array<string>` | a list of access request identifiers, generally only one will be populated, but high volume requested may result in multiple ids. | [default to undefined]

