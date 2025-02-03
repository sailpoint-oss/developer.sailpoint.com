---
id: beta-non-employee-idn-user-request
title: NonEmployeeIdnUserRequest
pagination_label: NonEmployeeIdnUserRequest
sidebar_label: NonEmployeeIdnUserRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeIdnUserRequest', 'BetaNonEmployeeIdnUserRequest'] 
slug: /tools/sdk/powershell/beta/models/non-employee-idn-user-request
tags: ['SDK', 'Software Development Kit', 'NonEmployeeIdnUserRequest', 'BetaNonEmployeeIdnUserRequest']
---


# NonEmployeeIdnUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity id. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeIdnUserRequest = Initialize-PSSailpoint.BetaNonEmployeeIdnUserRequest  -Id 2c91808570313110017040b06f344ec9
```

- Convert the resource to JSON
```powershell
$NonEmployeeIdnUserRequest | ConvertTo-JSON
```


[[Back to top]](#) 

