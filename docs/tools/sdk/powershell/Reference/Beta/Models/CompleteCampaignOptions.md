---
id: beta-complete-campaign-options
title: CompleteCampaignOptions
pagination_label: CompleteCampaignOptions
sidebar_label: CompleteCampaignOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteCampaignOptions', 'BetaCompleteCampaignOptions'] 
slug: /tools/sdk/powershell/beta/models/complete-campaign-options
tags: ['SDK', 'Software Development Kit', 'CompleteCampaignOptions', 'BetaCompleteCampaignOptions']
---


# CompleteCampaignOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  **Enum** [  "APPROVE",    "REVOKE" ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Examples

- Prepare the resource
```powershell
$CompleteCampaignOptions = Initialize-BetaCompleteCampaignOptions  -AutoCompleteAction REVOKE
```

- Convert the resource to JSON
```powershell
$CompleteCampaignOptions | ConvertTo-JSON
```


[[Back to top]](#) 

