---
id: campaignalert
title: Campaignalert
pagination_label: Campaignalert
sidebar_label: Campaignalert
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaignalert', 'Campaignalert'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaignalert
tags: ['SDK', 'Software Development Kit', 'Campaignalert', 'Campaignalert']
---


# Campaignalert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Level** |  **Enum** [  "ERROR",    "WARN",    "INFO" ] | Denotes the level of the message | [optional] 
**Localizations** | [**[]Errormessagedto**](errormessagedto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaignalert = Initialize-Campaignalert  -Level ERROR `
 -Localizations null
```

- Convert the resource to JSON
```powershell
$Campaignalert | ConvertTo-JSON
```


[[Back to top]](#) 

