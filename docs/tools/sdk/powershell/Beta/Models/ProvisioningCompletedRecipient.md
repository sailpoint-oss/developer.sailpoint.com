---
id: provisioning-completed-recipient
title: ProvisioningCompletedRecipient
pagination_label: ProvisioningCompletedRecipient
sidebar_label: ProvisioningCompletedRecipient
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCompletedRecipient'] 
slug: /tools/sdk/powershell/beta/models/provisioning-completed-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRecipient']
---


# ProvisioningCompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Provisioning recipient DTO type. | 
**Id** |  **String** | Provisioning recipient&#39;s identity ID. | 
**Name** |  **String** | Provisioning recipient&#39;s display name. | 

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedRecipient = Initialize-PSSailpointBetaProvisioningCompletedRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

