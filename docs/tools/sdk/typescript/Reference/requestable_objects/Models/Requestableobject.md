---
id: v1-requestableobject-v1
title: RequestableobjectV1
pagination_label: RequestableobjectV1
sidebar_label: RequestableobjectV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'RequestableobjectV1', 'v1RequestableobjectV1']
slug: /tools/sdk/typescript/requestable_objects/models/requestableobject-v1
tags: ['SDK', 'Software Development Kit', 'RequestableobjectV1', 'v1RequestableobjectV1']
---

# RequestableobjectV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the requestable object itself | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the requestable object | [default to undefined]
**created** | **(optional)** `string` | The time when the requestable object was created | [default to undefined]
**modified** | **(optional)** `string` | The time when the requestable object was last modified | [default to undefined]
**description** | **(optional)** `string` | Description of the requestable object. | [default to undefined]
**type** | **(optional)** `RequestableobjecttypeV1` |  | [default to undefined]
**requestStatus** | **(optional)** `RequestableobjectrequeststatusV1` |  | [default to undefined]
**identityRequestId** | **(optional)** `string` | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [default to undefined]
**ownerRef** | **(optional)** `IdentityreferencewithnameandemailV1` |  | [default to undefined]
**requestCommentsRequired** | **(optional)** `boolean` | Whether the requester must provide comments when requesting the object. | [default to undefined]

