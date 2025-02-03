---
id: v2024-provisioning-completed-requester
title: ProvisioningCompletedRequester
pagination_label: ProvisioningCompletedRequester
sidebar_label: ProvisioningCompletedRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedRequester', 'V2024ProvisioningCompletedRequester'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-completed-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRequester', 'V2024ProvisioningCompletedRequester']
---


# ProvisioningCompletedRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Provisioning requester's DTO type. | [required]
**Id** | **String** | Provisioning requester's identity ID. | [required]
**Name** | **String** | Provisioning owner's human-readable display name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedRequester = Initialize-PSSailpoint.V2024ProvisioningCompletedRequester  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedRequester | ConvertTo-JSON
```


[[Back to top]](#) 

