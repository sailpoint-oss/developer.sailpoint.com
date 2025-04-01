---
id: v2025-campaign-complete-options
title: CampaignCompleteOptions
pagination_label: CampaignCompleteOptions
sidebar_label: CampaignCompleteOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignCompleteOptions', 'V2025CampaignCompleteOptions'] 
slug: /tools/sdk/powershell/v2025/models/campaign-complete-options
tags: ['SDK', 'Software Development Kit', 'CampaignCompleteOptions', 'V2025CampaignCompleteOptions']
---


# CampaignCompleteOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  **Enum** [  "APPROVE",    "REVOKE" ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Examples

- Prepare the resource
```powershell
$CampaignCompleteOptions = Initialize-PSSailpoint.V2025CampaignCompleteOptions  -AutoCompleteAction REVOKE
```

- Convert the resource to JSON
```powershell
$CampaignCompleteOptions | ConvertTo-JSON
```


[[Back to top]](#) 

