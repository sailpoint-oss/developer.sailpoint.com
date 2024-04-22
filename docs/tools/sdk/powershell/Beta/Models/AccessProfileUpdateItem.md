---
id: access-profile-update-item
title: AccessProfileUpdateItem
pagination_label: AccessProfileUpdateItem
sidebar_label: AccessProfileUpdateItem
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessProfileUpdateItem'] 
slug: /tools/sdk/powershell/beta/models/access-profile-update-item
tags: ['SDK', 'Software Development Kit', 'AccessProfileUpdateItem']
---


# AccessProfileUpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Identifier of Access Profile in bulk update request. | 
**Requestable** |  **Boolean** | Access Profile requestable or not. | 
**Status** |  **String** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  &gt; 201   - Access profile is updated successfully.  &gt; 404   - Access profile not found.  | 
**Description** |  Pointer to **String** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileUpdateItem = Initialize-BetaAccessProfileUpdateItem  -Id 2c7180a46faadee4016fb4e018c20642 `
 -Requestable false `
 -Status 201 `
 -Description 
> Access profile is updated successfully.

> Referenced Access profile with Id "2c7180a46faadee4016fb4e018c20642" was not found.

```

- Convert the resource to JSON
```powershell
$AccessProfileUpdateItem | ConvertTo-JSON
```


[[Back to top]](#) 

