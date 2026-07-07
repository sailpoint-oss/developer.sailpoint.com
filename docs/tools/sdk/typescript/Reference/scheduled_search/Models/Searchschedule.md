---
id: v1-searchschedule-v1
title: SearchscheduleV1
pagination_label: SearchscheduleV1
sidebar_label: SearchscheduleV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SearchscheduleV1', 'v1SearchscheduleV1']
slug: /tools/sdk/typescript/scheduled_search/models/searchschedule-v1
tags: ['SDK', 'Software Development Kit', 'SearchscheduleV1', 'v1SearchscheduleV1']
---

# SearchscheduleV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**savedSearchId** | `string` | The ID of the saved search that will be executed. | [default to undefined]
**created** | **(optional)** `string` | The date the scheduled search was initially created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | The last date the scheduled search was modified. | [readonly] [default to undefined]
**schedule** | `ScheduleV1` |  | [default to undefined]
**recipients** | `Array<SearchscheduleRecipientsInnerV1>` | A list of identities that should receive the scheduled search report via email. | [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates if the scheduled search is enabled.  | [default to false]
**emailEmptyResults** | **(optional)** `boolean` | Indicates if email generation should occur when search returns no results.  | [default to false]
**displayQueryDetails** | **(optional)** `boolean` | Indicates if the generated email should include the query and search results preview (which could include PII).  | [default to false]

