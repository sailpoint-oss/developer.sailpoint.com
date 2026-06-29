---
id: v1-multihostintegrationsaggscheduleupdate-v1
title: MultihostintegrationsaggscheduleupdateV1
pagination_label: MultihostintegrationsaggscheduleupdateV1
sidebar_label: MultihostintegrationsaggscheduleupdateV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MultihostintegrationsaggscheduleupdateV1', 'v1MultihostintegrationsaggscheduleupdateV1']
slug: /tools/sdk/typescript/multi_host_integration/models/multihostintegrationsaggscheduleupdate-v1
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsaggscheduleupdateV1', 'v1MultihostintegrationsaggscheduleupdateV1']
---

# MultihostintegrationsaggscheduleupdateV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multihostId** | `string` | Multi-Host Integration ID. The ID must be unique | [default to undefined]
**aggregation_grp_id** | `string` | Multi-Host Integration aggregation group ID | [default to undefined]
**aggregation_grp_name** | `string` | Multi-Host Integration name | [default to undefined]
**aggregation_cron_schedule** | `string` | Cron expression to schedule aggregation | [default to undefined]
**enableSchedule** | `boolean` | Boolean value for Multi-Host Integration aggregation schedule.  This specifies if scheduled aggregation is enabled or disabled. | [default to false]
**source_id_list** | `Array<string>` | Source IDs of the Multi-Host Integration | [default to undefined]
**created** | **(optional)** `string` | Created date of Multi-Host Integration aggregation schedule | [default to undefined]
**modified** | **(optional)** `string` | Modified date of Multi-Host Integration aggregation schedule | [default to undefined]

