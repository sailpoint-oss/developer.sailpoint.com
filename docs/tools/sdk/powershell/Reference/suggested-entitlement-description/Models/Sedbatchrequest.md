---
id: sedbatchrequest
title: Sedbatchrequest
pagination_label: Sedbatchrequest
sidebar_label: Sedbatchrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedbatchrequest', 'Sedbatchrequest'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedbatchrequest
tags: ['SDK', 'Software Development Kit', 'Sedbatchrequest', 'Sedbatchrequest']
---


# Sedbatchrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entitlements** | **[]String** | list of entitlement ids | [optional] 
**Seds** | **[]String** | list of sed ids | [optional] 
**SearchCriteria** | [**map[string]Searchcriteria**](searchcriteria) | Search criteria for the batch request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedbatchrequest = Initialize-Sedbatchrequest  -Entitlements null `
 -Seds null `
 -SearchCriteria null
```

- Convert the resource to JSON
```powershell
$Sedbatchrequest | ConvertTo-JSON
```


[[Back to top]](#) 

