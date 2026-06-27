---
id: v1-templatedtodefault-v1
title: TemplatedtodefaultV1
pagination_label: TemplatedtodefaultV1
sidebar_label: TemplatedtodefaultV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TemplatedtodefaultV1', 'v1TemplatedtodefaultV1']
slug: /tools/sdk/typescript/notifications/models/templatedtodefault-v1
tags: ['SDK', 'Software Development Kit', 'TemplatedtodefaultV1', 'v1TemplatedtodefaultV1']
---

# TemplatedtodefaultV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The key of the default template | [default to undefined]
**name** | **(optional)** `string` | The name of the default template | [default to undefined]
**medium** | **(optional)** `string` | The message medium. More mediums may be added in the future. | [default to undefined]
**locale** | **(optional)** `string` | The locale for the message text, a BCP 47 language tag. | [default to undefined]
**subject** | **(optional)** `string` | The subject of the default template | [default to undefined]
**header** | **(optional)** `string` | The header value is now located within the body field. If included with non-null values, will result in a 400. | [default to undefined]
**body** | **(optional)** `string` | The body of the default template | [default to undefined]
**footer** | **(optional)** `string` | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [default to undefined]
**from** | **(optional)** `string` | The \"From:\" address of the default template | [default to undefined]
**replyTo** | **(optional)** `string` | The \"Reply To\" field of the default template | [default to undefined]
**description** | **(optional)** `string` | The description of the default template | [default to undefined]
**slackTemplate** | **(optional)** `TemplateslackV1` |  | [default to undefined]
**teamsTemplate** | **(optional)** `TemplateteamsV1` |  | [default to undefined]

