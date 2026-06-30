---
id: provisioningcompleted-requester
title: ProvisioningcompletedRequester
pagination_label: ProvisioningcompletedRequester
sidebar_label: ProvisioningcompletedRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningcompletedRequester', 'ProvisioningcompletedRequester'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedRequester', 'ProvisioningcompletedRequester']
---


# ProvisioningcompletedRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Provisioning requester's DTO type. | [required]
**Id** | **String** | Provisioning requester's identity ID. | [required]
**Name** | **String** | Provisioning owner's human-readable display name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningcompletedRequester = Initialize-ProvisioningcompletedRequester  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$ProvisioningcompletedRequester | ConvertTo-JSON
```


[[Back to top]](#) 

