---
id: campaign-alert
title: CampaignAlert
pagination_label: CampaignAlert
sidebar_label: CampaignAlert
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignAlert'] 
slug: /tools/sdk/powershell/beta/models/campaign-alert
tags: ['SDK', 'Software Development Kit', 'CampaignAlert']
---


# CampaignAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** |  Pointer to  **Enum** [  "ERROR",    "WARN",    "INFO" ] | Denotes the level of the message | [optional] 
**Localizations** |  Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAlert = Initialize-BetaCampaignAlert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$CampaignAlert | ConvertTo-JSON
```


[[Back to top]](#) 

