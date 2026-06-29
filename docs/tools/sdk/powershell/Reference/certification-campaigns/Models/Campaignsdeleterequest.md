---
id: campaignsdeleterequest
title: Campaignsdeleterequest
pagination_label: Campaignsdeleterequest
sidebar_label: Campaignsdeleterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaignsdeleterequest', 'Campaignsdeleterequest'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaignsdeleterequest
tags: ['SDK', 'Software Development Kit', 'Campaignsdeleterequest', 'Campaignsdeleterequest']
---


# Campaignsdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The ids of the campaigns to delete | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaignsdeleterequest = Initialize-Campaignsdeleterequest  -Ids ["2c9180887335cee10173490db1776c26","2c9180836a712436016a7125a90c0021"]
```

- Convert the resource to JSON
```powershell
$Campaignsdeleterequest | ConvertTo-JSON
```


[[Back to top]](#) 

