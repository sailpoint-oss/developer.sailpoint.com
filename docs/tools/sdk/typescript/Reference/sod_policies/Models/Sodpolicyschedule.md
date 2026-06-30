---
id: v1-sodpolicyschedule-v1
title: SodpolicyscheduleV1
pagination_label: SodpolicyscheduleV1
sidebar_label: SodpolicyscheduleV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SodpolicyscheduleV1', 'v1SodpolicyscheduleV1']
slug: /tools/sdk/typescript/sod_policies/models/sodpolicyschedule-v1
tags: ['SDK', 'Software Development Kit', 'SodpolicyscheduleV1', 'v1SodpolicyscheduleV1']
---

# SodpolicyscheduleV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | SOD Policy schedule name | [default to undefined]
**created** | **(optional)** `string` | The time when this SOD policy schedule is created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The time when this SOD policy schedule is modified. | [readonly] [default to undefined]
**description** | **(optional)** `string` | SOD Policy schedule description | [default to undefined]
**schedule** | **(optional)** `ScheduleV1` |  | [default to undefined]
**recipients** | **(optional)** `Array<SodrecipientV1>` |  | [default to undefined]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if empty results need to be emailed | [default to false]
**creatorId** | **(optional)** `string` | Policy\'s creator ID | [readonly] [default to undefined]
**modifierId** | **(optional)** `string` | Policy\'s modifier ID | [readonly] [default to undefined]

