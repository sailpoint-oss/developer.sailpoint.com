---
id: v2024-campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAlert', 'V2024CampaignAlert'] 
slug: /tools/sdk/powershell/v2024/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert', 'V2024CampaignAlert']
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
$CampaignAlert = Initialize-V2024CampaignAlert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$CampaignAlert | ConvertTo-JSON
```


[[Back to top]](#) 

