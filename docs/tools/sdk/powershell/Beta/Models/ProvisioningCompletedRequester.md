---
id: provisioning-completed-requester
title: ProvisioningCompletedRequester
pagination_label: ProvisioningCompletedRequester
sidebar_label: ProvisioningCompletedRequester
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCompletedRequester'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-requester
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRequester']
---


# ProvisioningCompletedRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Provisioning requester&#39;s DTO type. | 
**Id** |  **String** | Provisioning requester&#39;s identity ID. | 
**Name** |  **String** | Provisioning owner&#39;s human-readable display name. | 

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

