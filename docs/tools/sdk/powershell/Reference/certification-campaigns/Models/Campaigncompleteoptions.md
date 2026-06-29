---
id: campaigncompleteoptions
title: Campaigncompleteoptions
pagination_label: Campaigncompleteoptions
sidebar_label: Campaigncompleteoptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaigncompleteoptions', 'Campaigncompleteoptions'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaigncompleteoptions
tags: ['SDK', 'Software Development Kit', 'Campaigncompleteoptions', 'Campaigncompleteoptions']
---


# Campaigncompleteoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCompleteAction** |  **Enum** [  "APPROVE",    "REVOKE" ] | Determines whether to auto-approve(APPROVE) or auto-revoke(REVOKE) upon campaign completion. | [optional] [default to "APPROVE"]

## Examples

- Prepare the resource
```powershell
$Campaigncompleteoptions = Initialize-Campaigncompleteoptions  -AutoCompleteAction REVOKE
```

- Convert the resource to JSON
```powershell
$Campaigncompleteoptions | ConvertTo-JSON
```


[[Back to top]](#) 

