---
id: v2025-account-attributes-changed
title: AccountAttributesChanged
pagination_label: AccountAttributesChanged
sidebar_label: AccountAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesChanged', 'V2025AccountAttributesChanged'] 
slug: /tools/sdk/powershell/v2025/models/account-attributes-changed
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChanged', 'V2025AccountAttributesChanged']
---


# AccountAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountAttributesChangedIdentity**](account-attributes-changed-identity) |  | [required]
**Source** | [**AccountAttributesChangedSource**](account-attributes-changed-source) |  | [required]
**Account** | [**AccountAttributesChangedAccount**](account-attributes-changed-account) |  | [required]
**Changes** | [**[]AccountAttributesChangedChangesInner**](account-attributes-changed-changes-inner) | A list of attributes that changed. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesChanged = Initialize-V2025AccountAttributesChanged  -Identity null `
 -Source null `
 -Account null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$AccountAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

