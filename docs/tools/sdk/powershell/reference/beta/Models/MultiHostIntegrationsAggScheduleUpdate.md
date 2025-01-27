---
id: multi-host-integrations-agg-schedule-update
title: MultiHostIntegrationsAggScheduleUpdate
pagination_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_label: MultiHostIntegrationsAggScheduleUpdate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsAggScheduleUpdate'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-agg-schedule-update
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAggScheduleUpdate']
---


# MultiHostIntegrationsAggScheduleUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MultihostId** |  **String** | Multi-Host Integration ID. The ID must be unique | [required]
**AggregationGrpId** |  **String** | Multi-Host Integration aggregation group ID | [required]
**AggregationGrpName** |  **String** | Multi-Host Integration name | [required]
**AggregationCronSchedule** |  **String** | Cron expression to schedule aggregation | [required]
**EnableSchedule** |  **Boolean** | Boolean value for Multi-Host Integration aggregation schedule.  This specifies if scheduled aggregation is enabled or disabled. | [required][default to $false]
**SourceIdList** |  **[]String** | Source IDs of the Multi-Host Integration | [required]
**Created** |  Pointer to **System.DateTime** | Created date of Multi-Host Integration aggregation schedule | [optional] 
**Modified** |  Pointer to **System.DateTime** | Modified date of Multi-Host Integration aggregation schedule | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsAggScheduleUpdate = Initialize-PSSailpoint.BetaMultiHostIntegrationsAggScheduleUpdate  -MultihostId 004091cb79b04636b88662afa50a4456 `
 -AggregationGrpId 004091cb79b04636b88662afa50a4448 `
 -AggregationGrpName Multi-Host Integration aggregation group name `
 -AggregationCronSchedule 0 0 0 * * ? `
 -EnableSchedule false `
 -SourceIdList [004091cb79b04636b88662afa50a4440, 00af6d0d562a49b591c47be908740542] `
 -Created 2024-01-23T18:08:50.897Z `
 -Modified 2024-01-23T18:08:50.897Z
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsAggScheduleUpdate | ConvertTo-JSON
```


[[Back to top]](#) 

