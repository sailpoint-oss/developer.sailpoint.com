---
id: create-domain-dkim-v1405-response
title: CreateDomainDkimV1405Response
pagination_label: CreateDomainDkimV1405Response
sidebar_label: CreateDomainDkimV1405Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateDomainDkimV1405Response', 'CreateDomainDkimV1405Response'] 
slug: /tools/sdk/powershell/notifications/models/create-domain-dkim-v1405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkimV1405Response', 'CreateDomainDkimV1405Response']
---


# CreateDomainDkimV1405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 
**ErrorMessage** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Description of the error | [optional] 
**TrackingId** | **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateDomainDkimV1405Response = Initialize-CreateDomainDkimV1405Response  -ErrorName NotSupportedException `
 -ErrorMessage Cannot consume content type `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$CreateDomainDkimV1405Response | ConvertTo-JSON
```


[[Back to top]](#) 

