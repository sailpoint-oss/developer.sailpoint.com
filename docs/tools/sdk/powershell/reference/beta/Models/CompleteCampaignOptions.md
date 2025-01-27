---
id: complete-campaign-options
title: CompleteCampaignOptions
pagination_label: CompleteCampaignOptions
sidebar_label: CompleteCampaignOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteCampaignOptions'] 
slug: /tools/sdk/powershell/beta/models/complete-campaign-options
tags: ['SDK', 'Software Development Kit', 'CompleteCampaignOptions']
---


# CompleteCampaignOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  Pointer to  **Enum** [  "APPROVE",    "REVOKE" ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Examples

- Prepare the resource
```powershell
$CompleteCampaignOptions = Initialize-PSSailpoint.BetaCompleteCampaignOptions  -AutoCompleteAction REVOKE
```

- Convert the resource to JSON
```powershell
$CompleteCampaignOptions | ConvertTo-JSON
```


[[Back to top]](#) 

