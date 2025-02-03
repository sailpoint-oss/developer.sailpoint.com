---
id: beta-access-profile-update-item
title: AccessProfileUpdateItem
pagination_label: AccessProfileUpdateItem
sidebar_label: AccessProfileUpdateItem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileUpdateItem', 'BetaAccessProfileUpdateItem'] 
slug: /tools/sdk/powershell/beta/models/access-profile-update-item
tags: ['SDK', 'Software Development Kit', 'AccessProfileUpdateItem', 'BetaAccessProfileUpdateItem']
---


# AccessProfileUpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of Access Profile in bulk update request. | [required]
**Requestable** | **Boolean** | Access Profile requestable or not. | [required]
**Status** | **String** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  > 201   - Access profile is updated successfully.  > 404   - Access profile not found.  | [required]
**Description** | **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUpdateItem = Initialize-PSSailpoint.BetaAccessProfileUpdateItem  -Id 2c7180a46faadee4016fb4e018c20642 `
 -Requestable false `
 -Status 201 `
 -Description 
&gt; Access profile is updated successfully.

&gt; Referenced Access profile with Id &quot;2c7180a46faadee4016fb4e018c20642&quot; was not found.

```

- Convert the resource to JSON
```powershell
$AccessProfileUpdateItem | ConvertTo-JSON
```


[[Back to top]](#) 

