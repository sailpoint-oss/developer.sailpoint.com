---
id: requestableobjectreference
title: Requestableobjectreference
pagination_label: Requestableobjectreference
sidebar_label: Requestableobjectreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestableobjectreference', 'Requestableobjectreference'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/requestableobjectreference
tags: ['SDK', 'Software Development Kit', 'Requestableobjectreference', 'Requestableobjectreference']
---


# Requestableobjectreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the object. | [optional] 
**Name** | **String** | Name of the object. | [optional] 
**Description** | **String** | Description of the object. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$Requestableobjectreference = Initialize-Requestableobjectreference  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Applied Research Access `
 -Description Access to research information, lab results, and schematics `
 -Type ROLE
```

- Convert the resource to JSON
```powershell
$Requestableobjectreference | ConvertTo-JSON
```


[[Back to top]](#) 

