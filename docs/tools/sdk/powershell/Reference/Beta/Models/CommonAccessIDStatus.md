---
id: beta-common-access-id-status
title: CommonAccessIDStatus
pagination_label: CommonAccessIDStatus
sidebar_label: CommonAccessIDStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessIDStatus', 'BetaCommonAccessIDStatus'] 
slug: /tools/sdk/powershell/beta/models/common-access-id-status
tags: ['SDK', 'Software Development Kit', 'CommonAccessIDStatus', 'BetaCommonAccessIDStatus']
---


# CommonAccessIDStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmedIds** | **[]String** | List of confirmed common access ids. | [optional] 
**DeniedIds** | **[]String** | List of denied common access ids. | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessIDStatus = Initialize-PSSailpoint.BetaCommonAccessIDStatus  -ConfirmedIds null `
 -DeniedIds null
```

- Convert the resource to JSON
```powershell
$CommonAccessIDStatus | ConvertTo-JSON
```


[[Back to top]](#) 

