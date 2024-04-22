---
id: campaigns-delete-request
title: CampaignsDeleteRequest
pagination_label: CampaignsDeleteRequest
sidebar_label: CampaignsDeleteRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignsDeleteRequest'] 
slug: /tools/sdk/powershell/v3/models/campaigns-delete-request
tags: ['SDK', 'Software Development Kit', 'CampaignsDeleteRequest']
---


# CampaignsDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]String** | The ids of the campaigns to delete | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignsDeleteRequest = Initialize-CampaignsDeleteRequest  -Ids [2c9180887335cee10173490db1776c26, 2c9180836a712436016a7125a90c0021]
```

- Convert the resource to JSON
```powershell
$CampaignsDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

