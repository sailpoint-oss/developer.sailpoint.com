---
id: violationcontext-policy
title: ViolationcontextPolicy
pagination_label: ViolationcontextPolicy
sidebar_label: ViolationcontextPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ViolationcontextPolicy', 'ViolationcontextPolicy'] 
slug: /tools/sdk/powershell/sodviolations/models/violationcontext-policy
tags: ['SDK', 'Software Development Kit', 'ViolationcontextPolicy', 'ViolationcontextPolicy']
---


# ViolationcontextPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | The type of object that is referenced | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationcontextPolicy = Initialize-ViolationcontextPolicy  -Type ENTITLEMENT `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name A very cool policy name
```

- Convert the resource to JSON
```powershell
$ViolationcontextPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

