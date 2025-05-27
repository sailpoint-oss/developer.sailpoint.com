---
id: v2024-account-attributes-changed-source
title: AccountAttributesChangedSource
pagination_label: AccountAttributesChangedSource
sidebar_label: AccountAttributesChangedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesChangedSource', 'V2024AccountAttributesChangedSource'] 
slug: /tools/sdk/powershell/v2024/models/account-attributes-changed-source
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedSource', 'V2024AccountAttributesChangedSource']
---


# AccountAttributesChangedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesChangedSource = Initialize-V2024AccountAttributesChangedSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountAttributesChangedSource | ConvertTo-JSON
```


[[Back to top]](#) 

