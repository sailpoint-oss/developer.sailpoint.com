---
id: v1-updatestreamconfigurationrequest-v1
title: UpdatestreamconfigurationrequestV1
pagination_label: UpdatestreamconfigurationrequestV1
sidebar_label: UpdatestreamconfigurationrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UpdatestreamconfigurationrequestV1', 'v1UpdatestreamconfigurationrequestV1']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/updatestreamconfigurationrequest-v1
tags: ['SDK', 'Software Development Kit', 'UpdatestreamconfigurationrequestV1', 'v1UpdatestreamconfigurationrequestV1']
---

# UpdatestreamconfigurationrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | `string` | ID of the stream to update. | [default to undefined]
**delivery** | **(optional)** `DeliveryrequestV1` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Event types the receiver wants. Use CAEP event-type URIs. | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

