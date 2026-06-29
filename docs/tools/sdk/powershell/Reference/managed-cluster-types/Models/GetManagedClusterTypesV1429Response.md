---
id: get-managed-cluster-types-v1429-response
title: GetManagedClusterTypesV1429Response
pagination_label: GetManagedClusterTypesV1429Response
sidebar_label: GetManagedClusterTypesV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetManagedClusterTypesV1429Response', 'GetManagedClusterTypesV1429Response'] 
slug: /tools/sdk/powershell/managedclustertypes/models/get-managed-cluster-types-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClusterTypesV1429Response', 'GetManagedClusterTypesV1429Response']
---


# GetManagedClusterTypesV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClusterTypesV1429Response = Initialize-GetManagedClusterTypesV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetManagedClusterTypesV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

