---
id: v2024-create-domain-dkim405-response
title: CreateDomainDkim405Response
pagination_label: CreateDomainDkim405Response
sidebar_label: CreateDomainDkim405Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateDomainDkim405Response', 'V2024CreateDomainDkim405Response'] 
slug: /tools/sdk/powershell/v2024/models/create-domain-dkim405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkim405Response', 'V2024CreateDomainDkim405Response']
---


# CreateDomainDkim405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 
**ErrorMessage** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Description of the error | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateDomainDkim405Response = Initialize-V2024CreateDomainDkim405Response  -ErrorName NotSupportedException `
 -ErrorMessage Cannot consume content type `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$CreateDomainDkim405Response | ConvertTo-JSON
```


[[Back to top]](#) 

