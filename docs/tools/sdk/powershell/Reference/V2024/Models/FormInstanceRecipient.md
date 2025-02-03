---
id: v2024-form-instance-recipient
title: FormInstanceRecipient
pagination_label: FormInstanceRecipient
sidebar_label: FormInstanceRecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormInstanceRecipient', 'V2024FormInstanceRecipient'] 
slug: /tools/sdk/powershell/v2024/models/form-instance-recipient
tags: ['SDK', 'Software Development Kit', 'FormInstanceRecipient', 'V2024FormInstanceRecipient']
---


# FormInstanceRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 

## Examples

- Prepare the resource
```powershell
$FormInstanceRecipient = Initialize-PSSailpoint.V2024FormInstanceRecipient  -Id 00000000-0000-0000-0000-000000000000 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$FormInstanceRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

