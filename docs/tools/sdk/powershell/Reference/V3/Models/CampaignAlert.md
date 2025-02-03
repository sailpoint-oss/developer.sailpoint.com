---
id: campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAlert', 'CampaignAlert'] 
slug: /tools/sdk/powershell/v3/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert', 'CampaignAlert']
---


# CampaignAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** |  **Enum** [  "ERROR",    "WARN",    "INFO" ] | Denotes the level of the message | [optional] 
**Localizations** | [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAlert = Initialize-PSSailpoint.V3CampaignAlert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$CampaignAlert | ConvertTo-JSON
```


[[Back to top]](#) 

