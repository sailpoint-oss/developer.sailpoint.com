---
id: get-managed-clusters-v1429-response
title: GetManagedClustersV1429Response
pagination_label: GetManagedClustersV1429Response
sidebar_label: GetManagedClustersV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetManagedClustersV1429Response', 'GetManagedClustersV1429Response'] 
slug: /tools/sdk/powershell/managedclusters/models/get-managed-clusters-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetManagedClustersV1429Response', 'GetManagedClustersV1429Response']
---


# GetManagedClustersV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetManagedClustersV1429Response = Initialize-GetManagedClustersV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetManagedClustersV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

