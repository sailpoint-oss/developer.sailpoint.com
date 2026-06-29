---
id: sodviolationcontext
title: Sodviolationcontext
pagination_label: Sodviolationcontext
sidebar_label: Sodviolationcontext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodviolationcontext', 'Sodviolationcontext'] 
slug: /tools/sdk/powershell/accessrequests/models/sodviolationcontext
tags: ['SDK', 'Software Development Kit', 'Sodviolationcontext', 'Sodviolationcontext']
---


# Sodviolationcontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**Sodpolicydto**](sodpolicydto) |  | [optional] 
**ConflictingAccessCriteria** | [**SodviolationcontextConflictingAccessCriteria**](sodviolationcontext-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodviolationcontext = Initialize-Sodviolationcontext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$Sodviolationcontext | ConvertTo-JSON
```


[[Back to top]](#) 

