---
id: requesteditemdetails
title: Requesteditemdetails
pagination_label: Requesteditemdetails
sidebar_label: Requesteditemdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requesteditemdetails', 'Requesteditemdetails'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemdetails
tags: ['SDK', 'Software Development Kit', 'Requesteditemdetails', 'Requesteditemdetails']
---


# Requesteditemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ENTITLEMENT",    "ROLE" ] | The type of access item requested. | [optional] 
**Id** | **String** | The id of the access item requested. | [optional] 

## Examples

- Prepare the resource
```powershell
$Requesteditemdetails = Initialize-Requesteditemdetails  -Type ENTITLEMENT `
 -Id 779c6fd7171540bba1184e5946112c28
```

- Convert the resource to JSON
```powershell
$Requesteditemdetails | ConvertTo-JSON
```


[[Back to top]](#) 

