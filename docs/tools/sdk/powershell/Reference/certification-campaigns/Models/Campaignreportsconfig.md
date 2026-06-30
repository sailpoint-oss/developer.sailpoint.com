---
id: campaignreportsconfig
title: Campaignreportsconfig
pagination_label: Campaignreportsconfig
sidebar_label: Campaignreportsconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaignreportsconfig', 'Campaignreportsconfig'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaignreportsconfig
tags: ['SDK', 'Software Development Kit', 'Campaignreportsconfig', 'Campaignreportsconfig']
---


# Campaignreportsconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeColumns** | **[]String** | list of identity attribute columns | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaignreportsconfig = Initialize-Campaignreportsconfig  -IdentityAttributeColumns ["firstname","lastname"]
```

- Convert the resource to JSON
```powershell
$Campaignreportsconfig | ConvertTo-JSON
```


[[Back to top]](#) 

