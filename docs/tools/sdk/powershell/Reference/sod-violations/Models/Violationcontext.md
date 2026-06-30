---
id: violationcontext
title: Violationcontext
pagination_label: Violationcontext
sidebar_label: Violationcontext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Violationcontext', 'Violationcontext'] 
slug: /tools/sdk/powershell/sodviolations/models/violationcontext
tags: ['SDK', 'Software Development Kit', 'Violationcontext', 'Violationcontext']
---


# Violationcontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**ViolationcontextPolicy**](violationcontext-policy) |  | [optional] 
**ConflictingAccessCriteria** | [**Exceptionaccesscriteria**](exceptionaccesscriteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Violationcontext = Initialize-Violationcontext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$Violationcontext | ConvertTo-JSON
```


[[Back to top]](#) 

