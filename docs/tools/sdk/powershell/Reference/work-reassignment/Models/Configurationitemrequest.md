---
id: configurationitemrequest
title: Configurationitemrequest
pagination_label: Configurationitemrequest
sidebar_label: Configurationitemrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configurationitemrequest', 'Configurationitemrequest'] 
slug: /tools/sdk/powershell/workreassignment/models/configurationitemrequest
tags: ['SDK', 'Software Development Kit', 'Configurationitemrequest', 'Configurationitemrequest']
---


# Configurationitemrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedFromId** | **String** | The identity id to reassign an item from | [optional] 
**ReassignedToId** | **String** | The identity id to reassign an item to | [optional] 
**ConfigType** | [**Configtypeenum**](configtypeenum) |  | [optional] 
**StartDate** | **System.DateTime** | The date from which to start reassigning work items | [optional] 
**EndDate** | **System.DateTime** | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$Configurationitemrequest = Initialize-Configurationitemrequest  -ReassignedFromId 2c91808781a71ddb0181b9090b5c504e `
 -ReassignedToId 2c91808781a71ddb0181b9090b53504a `
 -ConfigType null `
 -StartDate 2022-07-21T11:13:12.345Z `
 -EndDate 2022-07-30T17:00Z
```

- Convert the resource to JSON
```powershell
$Configurationitemrequest | ConvertTo-JSON
```


[[Back to top]](#) 

