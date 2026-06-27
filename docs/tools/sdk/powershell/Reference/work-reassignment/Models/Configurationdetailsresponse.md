---
id: configurationdetailsresponse
title: Configurationdetailsresponse
pagination_label: Configurationdetailsresponse
sidebar_label: Configurationdetailsresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configurationdetailsresponse', 'Configurationdetailsresponse'] 
slug: /tools/sdk/powershell/workreassignment/models/configurationdetailsresponse
tags: ['SDK', 'Software Development Kit', 'Configurationdetailsresponse', 'Configurationdetailsresponse']
---


# Configurationdetailsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigType** | [**Configtypeenum**](configtypeenum) |  | [optional] 
**TargetIdentity** | [**Identity2**](identity2) |  | [optional] 
**StartDate** | **System.DateTime** | The date from which to start reassigning work items | [optional] 
**EndDate** | **System.DateTime** | The date from which to stop reassigning work items.  If this is an empty string it indicates a permanent reassignment. | [optional] 
**AuditDetails** | [**Auditdetails**](auditdetails) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Configurationdetailsresponse = Initialize-Configurationdetailsresponse  -ConfigType null `
 -TargetIdentity null `
 -StartDate 2022-07-21T11:13:12.345Z `
 -EndDate 0001-01-01T00:00Z `
 -AuditDetails null
```

- Convert the resource to JSON
```powershell
$Configurationdetailsresponse | ConvertTo-JSON
```


[[Back to top]](#) 

