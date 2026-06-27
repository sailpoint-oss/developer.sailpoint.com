---
id: provisioningcompleted-recipient
title: ProvisioningcompletedRecipient
pagination_label: ProvisioningcompletedRecipient
sidebar_label: ProvisioningcompletedRecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ProvisioningcompletedRecipient', 'ProvisioningcompletedRecipient'] 
slug: /tools/sdk/powershell/triggers/models/provisioningcompleted-recipient
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedRecipient', 'ProvisioningcompletedRecipient']
---


# ProvisioningcompletedRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Provisioning recipient DTO type. | [required]
**Id** | **String** | Provisioning recipient's identity ID. | [required]
**Name** | **String** | Provisioning recipient's display name. | [required]

## Examples

- Prepare the resource
```powershell
$ProvisioningcompletedRecipient = Initialize-ProvisioningcompletedRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$ProvisioningcompletedRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

