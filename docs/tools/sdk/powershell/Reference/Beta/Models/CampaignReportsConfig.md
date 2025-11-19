---
id: beta-campaign-reports-config
title: CampaignReportsConfig
pagination_label: CampaignReportsConfig
sidebar_label: CampaignReportsConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignReportsConfig', 'BetaCampaignReportsConfig'] 
slug: /tools/sdk/powershell/beta/models/campaign-reports-config
tags: ['SDK', 'Software Development Kit', 'CampaignReportsConfig', 'BetaCampaignReportsConfig']
---


# CampaignReportsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeColumns** | **[]String** | list of identity attribute columns | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignReportsConfig = Initialize-BetaCampaignReportsConfig  -IdentityAttributeColumns [firstname, lastname]
```

- Convert the resource to JSON
```powershell
$CampaignReportsConfig | ConvertTo-JSON
```


[[Back to top]](#) 

