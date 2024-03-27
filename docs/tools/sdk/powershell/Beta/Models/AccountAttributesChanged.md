---
id: account-attributes-changed
title: AccountAttributesChanged
pagination_label: AccountAttributesChanged
sidebar_label: AccountAttributesChanged
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributesChanged'] 
slug: /tools/sdk/powershell/beta/models/account-attributes-changed
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChanged']
---


# AccountAttributesChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** |  [**AccountAttributesChangedIdentity**](account-attributes-changed-identity) |  | 
**Source** |  [**AccountAttributesChangedSource**](account-attributes-changed-source) |  | 
**Account** |  [**AccountAttributesChangedAccount**](account-attributes-changed-account) |  | 
**Changes** |  [**[]AccountAttributesChangedChangesInner**](account-attributes-changed-changes-inner) | A list of attributes that changed. | 

## Examples

- Prepare the resource
```powershell
$AccountAttributesChanged = Initialize-PSSailpointBetaAccountAttributesChanged  -Identity null `
 -Source null `
 -Account null `
 -Changes null
```

- Convert the resource to JSON
```powershell
$AccountAttributesChanged | ConvertTo-JSON
```


[[Back to top]](#) 

