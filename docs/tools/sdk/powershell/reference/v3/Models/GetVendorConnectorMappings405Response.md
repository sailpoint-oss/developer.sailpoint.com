---
id: get-vendor-connector-mappings405-response
title: GetVendorConnectorMappings405Response
pagination_label: GetVendorConnectorMappings405Response
sidebar_label: GetVendorConnectorMappings405Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetVendorConnectorMappings405Response', 'GetVendorConnectorMappings405Response'] 
slug: /tools/sdk/powershell/v3/models/get-vendor-connector-mappings405-response
tags: ['SDK', 'Software Development Kit', 'GetVendorConnectorMappings405Response', 'GetVendorConnectorMappings405Response']
---


# GetVendorConnectorMappings405Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ErrorName** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A message describing the error | [optional] 
**ErrorMessage** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Description of the error | [optional] 
**TrackingId** |  Pointer to **String** | Unique tracking id for the error. | [optional] 

## Examples

- Prepare the resource
```powershell
$GetVendorConnectorMappings405Response = Initialize-PSSailpoint.V3GetVendorConnectorMappings405Response  -ErrorName NotSupportedException `
 -ErrorMessage Cannot consume content type `
 -TrackingId e7eab60924f64aa284175b9fa3309599
```

- Convert the resource to JSON
```powershell
$GetVendorConnectorMappings405Response | ConvertTo-JSON
```


[[Back to top]](#) 

