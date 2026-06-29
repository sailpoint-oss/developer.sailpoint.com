---
id: v1-templateteams-v1
title: TemplateteamsV1
pagination_label: TemplateteamsV1
sidebar_label: TemplateteamsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TemplateteamsV1', 'v1TemplateteamsV1']
slug: /tools/sdk/typescript/notifications/models/templateteams-v1
tags: ['SDK', 'Software Development Kit', 'TemplateteamsV1', 'v1TemplateteamsV1']
---

# TemplateteamsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template key | [default to undefined]
**title** | **(optional)** `string` | The title of the Teams message | [default to undefined]
**text** | **(optional)** `string` | The main text content of the Teams message | [default to undefined]
**messageJSON** | **(optional)** `string` | JSON string of the Teams adaptive card | [default to undefined]
**isSubscription** | **(optional)** `boolean` | Whether this is a subscription notification | [default to false]
**approvalId** | **(optional)** `string` | The approval request ID | [default to undefined]
**requestId** | **(optional)** `string` | The request ID | [default to undefined]
**requestedById** | **(optional)** `string` | The ID of the user who made the request | [default to undefined]
**notificationType** | **(optional)** `string` | The type of notification | [default to undefined]
**autoApprovalData** | **(optional)** `TemplateslackAutoApprovalDataV1` |  | [default to undefined]
**customFields** | **(optional)** `TemplateslackCustomFieldsV1` |  | [default to undefined]

