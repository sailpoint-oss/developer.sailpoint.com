---
id: v1-sendtestnotificationrequestdto-v1
title: SendtestnotificationrequestdtoV1
pagination_label: SendtestnotificationrequestdtoV1
sidebar_label: SendtestnotificationrequestdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SendtestnotificationrequestdtoV1', 'v1SendtestnotificationrequestdtoV1']
slug: /tools/sdk/typescript/notifications/models/sendtestnotificationrequestdto-v1
tags: ['SDK', 'Software Development Kit', 'SendtestnotificationrequestdtoV1', 'v1SendtestnotificationrequestdtoV1']
---

# SendtestnotificationrequestdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **(optional)** `string` | The template notification key. | [default to undefined]
**medium** | **(optional)** `string` | The notification medium. Has to be one of the following enum values. | [default to undefined]
**locale** | **(optional)** `string` | The locale for the message text. | [default to undefined]
**context** | **(optional)** `object` | A Json object that denotes the context specific to the template. | [default to undefined]
**recipientEmailList** | **(optional)** `Array<string>` | A list of override recipient email addresses for the test notification. | [default to undefined]
**carbonCopy** | **(optional)** `Array<string>` | A list of CC email addresses for the test notification. | [default to undefined]
**blindCarbonCopy** | **(optional)** `Array<string>` | A list of BCC email addresses for the test notification. | [default to undefined]

