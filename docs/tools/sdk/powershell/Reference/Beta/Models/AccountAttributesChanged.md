---
id: beta-account-attributes-changed
title: AccountAttributesChanged
pagination_label: AccountAttributesChanged
sidebar_label: AccountAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesChanged', 'BetaAccountAttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/account-attributes-changed
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChanged', 'BetaAccountAttributesChanged']
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
$AccountAttributesChanged = Initialize-BetaAccountAttributesChanged  -Identity null `
 -Source null `
 -Account null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$AccountAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

