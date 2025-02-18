---
id: activity-identity
title: ActivityIdentity
pagination_label: ActivityIdentity
sidebar_label: ActivityIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ActivityIdentity', 'ActivityIdentity'] 
slug: /tools/sdk/powershell/v3/models/activity-identity
tags: ['SDK', 'Software Development Kit', 'ActivityIdentity', 'ActivityIdentity']
---


# ActivityIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**Type** | **String** | Type of object | [optional] 

## Examples

- Prepare the resource
```powershell
$ActivityIdentity = Initialize-PSSailpoint.V3ActivityIdentity  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type Identity
```

- Convert the resource to JSON
```powershell
$ActivityIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

