---
id: non-employee-idn-user-request
title: NonEmployeeIdnUserRequest
pagination_label: NonEmployeeIdnUserRequest
sidebar_label: NonEmployeeIdnUserRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeIdnUserRequest'] 
slug: /tools/sdk/powershell/v3/models/non-employee-idn-user-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeIdnUserRequest']
---


# NonEmployeeIdnUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Identity id. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeIdnUserRequest = Initialize-PSSailpoint.V3NonEmployeeIdnUserRequest  -Id 2c91808570313110017040b06f344ec9
```

- Convert the resource to JSON
```powershell
$NonEmployeeIdnUserRequest | ConvertTo-JSON
```


[[Back to top]](#) 

