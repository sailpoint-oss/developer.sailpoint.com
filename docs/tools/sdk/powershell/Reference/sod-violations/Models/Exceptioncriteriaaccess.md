---
id: exceptioncriteriaaccess
title: Exceptioncriteriaaccess
pagination_label: Exceptioncriteriaaccess
sidebar_label: Exceptioncriteriaaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Exceptioncriteriaaccess', 'Exceptioncriteriaaccess'] 
slug: /tools/sdk/powershell/sodviolations/models/exceptioncriteriaaccess
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteriaaccess', 'Exceptioncriteriaaccess']
---


# Exceptioncriteriaaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | **Boolean** | Whether the subject identity already had that access or not | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Exceptioncriteriaaccess = Initialize-Exceptioncriteriaaccess  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$Exceptioncriteriaaccess | ConvertTo-JSON
```


[[Back to top]](#) 

