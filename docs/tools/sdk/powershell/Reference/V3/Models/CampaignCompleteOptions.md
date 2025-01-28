---
id: campaign-complete-options
title: CampaignCompleteOptions
pagination_label: CampaignCompleteOptions
sidebar_label: CampaignCompleteOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignCompleteOptions', 'CampaignCompleteOptions'] 
slug: /tools/sdk/powershell/v3/models/campaign-complete-options
tags: ['SDK', 'Software Development Kit', 'CampaignCompleteOptions', 'CampaignCompleteOptions']
---


# CampaignCompleteOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  Pointer to  **Enum** [  "APPROVE",    "REVOKE" ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Examples

- Prepare the resource
```powershell
$CampaignCompleteOptions = Initialize-PSSailpoint.V3CampaignCompleteOptions  -AutoCompleteAction REVOKE
```

- Convert the resource to JSON
```powershell
$CampaignCompleteOptions | ConvertTo-JSON
```


[[Back to top]](#) 

