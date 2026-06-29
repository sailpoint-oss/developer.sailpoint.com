---
id: v1-scheduledsearch-v1
title: ScheduledsearchV1
pagination_label: ScheduledsearchV1
sidebar_label: ScheduledsearchV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ScheduledsearchV1', 'v1ScheduledsearchV1']
slug: /tools/sdk/typescript/scheduled_search/models/scheduledsearch-v1
tags: ['SDK', 'Software Development Kit', 'ScheduledsearchV1', 'v1ScheduledsearchV1']
---

# ScheduledsearchV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the scheduled search.  | [default to undefined]
**description** | **(optional)** `string` | The description of the scheduled search.  | [default to undefined]
**savedSearchId** | `string` | The ID of the saved search that will be executed. | [default to undefined]
**created** | **(optional)** `string` | The date the scheduled search was initially created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The last date the scheduled search was modified. | [readonly] [default to undefined]
**schedule** | `ScheduleV1` |  | [default to undefined]
**recipients** | `Array<SearchscheduleRecipientsInnerV1>` | A list of identities that should receive the scheduled search report via email. | [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates if the scheduled search is enabled.  | [default to false]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if email generation should occur when search returns no results.  | [default to false]
**displayQueryDetails** | **(optional)** `boolean` | Indicates if the generated email should include the query and search results preview (which could include PII).  | [default to false]
**id** | `string` | The scheduled search ID. | [readonly] [default to undefined]
**owner** | `ScheduledsearchAllOfOwnerV1` |  | [default to undefined]
**ownerId** | `string` | The ID of the scheduled search owner.  Please use the `id` in the `owner` object instead.  | [readonly] [default to undefined]

