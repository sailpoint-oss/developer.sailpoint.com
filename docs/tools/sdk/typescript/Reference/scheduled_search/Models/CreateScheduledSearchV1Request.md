---
id: v1-create-scheduled-search-v1-request-v1
title: CreateScheduledSearchV1RequestV1
pagination_label: CreateScheduledSearchV1RequestV1
sidebar_label: CreateScheduledSearchV1RequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CreateScheduledSearchV1RequestV1', 'v1CreateScheduledSearchV1RequestV1']
slug: /tools/sdk/typescript/scheduled_search/models/create-scheduled-search-v1-request-v1
tags: ['SDK', 'Software Development Kit', 'CreateScheduledSearchV1RequestV1', 'v1CreateScheduledSearchV1RequestV1']
---

# CreateScheduledSearchV1RequestV1

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

