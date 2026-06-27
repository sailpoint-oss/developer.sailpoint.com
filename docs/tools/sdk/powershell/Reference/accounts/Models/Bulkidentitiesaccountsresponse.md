---
id: bulkidentitiesaccountsresponse
title: Bulkidentitiesaccountsresponse
pagination_label: Bulkidentitiesaccountsresponse
sidebar_label: Bulkidentitiesaccountsresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkidentitiesaccountsresponse', 'Bulkidentitiesaccountsresponse'] 
slug: /tools/sdk/powershell/accounts/models/bulkidentitiesaccountsresponse
tags: ['SDK', 'Software Development Kit', 'Bulkidentitiesaccountsresponse', 'Bulkidentitiesaccountsresponse']
---


# Bulkidentitiesaccountsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identifier of bulk request item. | [optional] 
**StatusCode** | **Int32** | Response status value. | [optional] 
**Message** | **String** | Status containing additional context information about failures. | [optional] 

## Examples

- Prepare the resource
```powershell
$Bulkidentitiesaccountsresponse = Initialize-Bulkidentitiesaccountsresponse  -Id 2c9180858082150f0180893dbaf553fe `
 -StatusCode 404 `
 -Message Referenced identity "2c9180858082150f0180893dbaf553fe" was not found.
```

- Convert the resource to JSON
```powershell
$Bulkidentitiesaccountsresponse | ConvertTo-JSON
```


[[Back to top]](#) 

