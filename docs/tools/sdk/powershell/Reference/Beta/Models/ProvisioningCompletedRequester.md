---
id: beta-provisioning-completed-requester
title: ProvisioningCompletedRequester
pagination_label: ProvisioningCompletedRequester
sidebar_label: ProvisioningCompletedRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedRequester', 'BetaProvisioningCompletedRequester'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRequester', 'BetaProvisioningCompletedRequester']
---


# ProvisioningCompletedRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Provisioning requester's DTO type. | [required]
**Id** | **String** | Provisioning requester's identity ID. | [required]
**Name** | **String** | Provisioning requester's name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedRequester = Initialize-BetaProvisioningCompletedRequester  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedRequester | ConvertTo-JSON
```


[[Back to top]](#) 

