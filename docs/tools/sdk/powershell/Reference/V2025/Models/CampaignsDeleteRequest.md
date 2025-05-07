---
id: v2025-campaigns-delete-request
title: CampaignsDeleteRequest
pagination_label: CampaignsDeleteRequest
sidebar_label: CampaignsDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignsDeleteRequest', 'V2025CampaignsDeleteRequest'] 
slug: /tools/sdk/powershell/v2025/models/campaigns-delete-request
tags: ['SDK', 'Software Development Kit', 'CampaignsDeleteRequest', 'V2025CampaignsDeleteRequest']
---


# CampaignsDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The ids of the campaigns to delete | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignsDeleteRequest = Initialize-V2025CampaignsDeleteRequest  -Ids [2c9180887335cee10173490db1776c26, 2c9180836a712436016a7125a90c0021]
```

- Convert the resource to JSON
```powershell
$CampaignsDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

