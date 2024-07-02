---
id: activate-campaign-options
title: ActivateCampaignOptions
pagination_label: ActivateCampaignOptions
sidebar_label: ActivateCampaignOptions
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ActivateCampaignOptions'] 
slug: /tools/sdk/powershell/beta/models/activate-campaign-options
tags: ['SDK', 'Software Development Kit', 'ActivateCampaignOptions']
---


# ActivateCampaignOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeZone** |  Pointer to **String** | The timezone must be in a valid ISO 8601 format. Timezones in ISO 8601 are represented as UTC (represented as &#39;Z&#39;) or as an offset from UTC. The offset format can be +/-hh:mm, +/-hhmm, or +/-hh. | [optional] [default to "Z"]

## Examples

- Prepare the resource
```powershell
$ActivateCampaignOptions = Initialize-BetaActivateCampaignOptions  -TimeZone -05:00
```

- Convert the resource to JSON
```powershell
$ActivateCampaignOptions | ConvertTo-JSON
```


[[Back to top]](#) 

