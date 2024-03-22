---
id: scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ScheduledAttributes'] 
slug: /tools/sdk/powershell/v3/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes']
---


# ScheduledAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CronString** |  **String** | A valid CRON expression | 

## Examples

- Prepare the resource
```powershell
$ScheduledAttributes = Initialize-PSSailpointScheduledAttributes  -CronString 0 * */3 */5 *
```

- Convert the resource to JSON
```powershell
$ScheduledAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

