---
id: create-domain-dkim405-response
title: CreateDomainDkim405Response
pagination_label: CreateDomainDkim405Response
sidebar_label: CreateDomainDkim405Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CreateDomainDkim405Response'] 
slug: /tools/sdk/powershell/beta/models/create-domain-dkim405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkim405Response']
---


# CreateDomainDkim405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | A message describing the error | [optional] 
**ErrorMessage** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Description of the error | [optional] 
**TrackingId** |  Pointer to **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateDomainDkim405Response = Initialize-PSSailpointBetaCreateDomainDkim405Response  -ErrorName NotSupportedException `
 -ErrorMessage Cannot consume content type `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$CreateDomainDkim405Response | ConvertTo-JSON
```


[[Back to top]](#) 

