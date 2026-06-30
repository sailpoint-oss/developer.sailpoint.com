---
id: get-managed-clients-v1401-response
title: GetManagedClientsV1401Response
pagination_label: GetManagedClientsV1401Response
sidebar_label: GetManagedClientsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetManagedClientsV1401Response', 'GetManagedClientsV1401Response'] 
slug: /tools/sdk/powershell/managedclients/models/get-managed-clients-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClientsV1401Response', 'GetManagedClientsV1401Response']
---


# GetManagedClientsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClientsV1401Response = Initialize-GetManagedClientsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetManagedClientsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

