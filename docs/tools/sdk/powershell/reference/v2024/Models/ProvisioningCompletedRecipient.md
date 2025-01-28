---
id: v2024-provisioning-completed-recipient
title: ProvisioningCompletedRecipient
pagination_label: ProvisioningCompletedRecipient
sidebar_label: ProvisioningCompletedRecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningCompletedRecipient'] 
slug: /tools/sdk/powershell/v2024/models/provisioning-completed-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedRecipient']
---


# ProvisioningCompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Provisioning recipient DTO type. | [required]
**Id** |  **String** | Provisioning recipient's identity ID. | [required]
**Name** |  **String** | Provisioning recipient's display name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningCompletedRecipient = Initialize-PSSailpoint.V2024ProvisioningCompletedRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ProvisioningCompletedRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

