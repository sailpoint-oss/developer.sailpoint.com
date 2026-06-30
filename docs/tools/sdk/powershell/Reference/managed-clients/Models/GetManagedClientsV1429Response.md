---
id: get-managed-clients-v1429-response
title: GetManagedClientsV1429Response
pagination_label: GetManagedClientsV1429Response
sidebar_label: GetManagedClientsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetManagedClientsV1429Response', 'GetManagedClientsV1429Response'] 
slug: /tools/sdk/powershell/managedclients/models/get-managed-clients-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClientsV1429Response', 'GetManagedClientsV1429Response']
---


# GetManagedClientsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClientsV1429Response = Initialize-GetManagedClientsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetManagedClientsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

