---
id: applicationdiscoveryresponse-target
title: ApplicationdiscoveryresponseTarget
pagination_label: ApplicationdiscoveryresponseTarget
sidebar_label: ApplicationdiscoveryresponseTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApplicationdiscoveryresponseTarget', 'ApplicationdiscoveryresponseTarget'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/applicationdiscoveryresponse-target
tags: ['SDK', 'Software Development Kit', 'ApplicationdiscoveryresponseTarget', 'ApplicationdiscoveryresponseTarget']
---


# ApplicationdiscoveryresponseTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$ApplicationdiscoveryresponseTarget = Initialize-ApplicationdiscoveryresponseTarget  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$ApplicationdiscoveryresponseTarget | ConvertTo-JSON
```


[[Back to top]](#) 

