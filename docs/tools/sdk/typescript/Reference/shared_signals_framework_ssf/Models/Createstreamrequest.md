---
id: v1-createstreamrequest-v1
title: CreatestreamrequestV1
pagination_label: CreatestreamrequestV1
sidebar_label: CreatestreamrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreatestreamrequestV1', 'v1CreatestreamrequestV1']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/models/createstreamrequest-v1
tags: ['SDK', 'Software Development Kit', 'CreatestreamrequestV1', 'v1CreatestreamrequestV1']
---

# CreatestreamrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery** | `CreatestreamdeliveryrequestV1` |  | [default to undefined]
**events_requested** | **(optional)** `Array<string>` | Optional list of event types the receiver wants. Use CAEP event-type URIs in the form: `https://schemas.openid.net/secevent/caep/event-type/{event-type}` (e.g. session revoke).  | [default to undefined]
**description** | **(optional)** `string` | Optional human-readable description of the stream. | [default to undefined]

