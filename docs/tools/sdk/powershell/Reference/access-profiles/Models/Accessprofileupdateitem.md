---
id: accessprofileupdateitem
title: Accessprofileupdateitem
pagination_label: Accessprofileupdateitem
sidebar_label: Accessprofileupdateitem
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofileupdateitem', 'Accessprofileupdateitem'] 
slug: /tools/sdk/powershell/accessprofiles/models/accessprofileupdateitem
tags: ['SDK', 'Software Development Kit', 'Accessprofileupdateitem', 'Accessprofileupdateitem']
---


# Accessprofileupdateitem

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
$Accessprofileupdateitem = Initialize-Accessprofileupdateitem  -Id 2c7180a46faadee4016fb4e018c20642 `
 -Requestable false `
 -Status 201 `
 -Description 
> Access profile is updated successfully.

> Referenced Access profile with Id "2c7180a46faadee4016fb4e018c20642" was not found.

```

- Convert the resource to JSON
```powershell
$Accessprofileupdateitem | ConvertTo-JSON
```


[[Back to top]](#) 

