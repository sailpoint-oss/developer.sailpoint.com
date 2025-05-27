---
id: beta-delete-campaigns-request
title: DeleteCampaignsRequest
pagination_label: DeleteCampaignsRequest
sidebar_label: DeleteCampaignsRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteCampaignsRequest', 'BetaDeleteCampaignsRequest'] 
slug: /tools/sdk/powershell/beta/models/delete-campaigns-request
tags: ['SDK', 'Software Development Kit', 'DeleteCampaignsRequest', 'BetaDeleteCampaignsRequest']
---


# DeleteCampaignsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The ids of the campaigns to delete | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteCampaignsRequest = Initialize-BetaDeleteCampaignsRequest  -Ids [2c9180887335cee10173490db1776c26, 2c9180836a712436016a7125a90c0021]
```

- Convert the resource to JSON
```powershell
$DeleteCampaignsRequest | ConvertTo-JSON
```


[[Back to top]](#) 

