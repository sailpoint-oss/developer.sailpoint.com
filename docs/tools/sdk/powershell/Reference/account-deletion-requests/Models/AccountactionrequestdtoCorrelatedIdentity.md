---
id: accountactionrequestdto-correlated-identity
title: AccountactionrequestdtoCorrelatedIdentity
pagination_label: AccountactionrequestdtoCorrelatedIdentity
sidebar_label: AccountactionrequestdtoCorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountactionrequestdtoCorrelatedIdentity', 'AccountactionrequestdtoCorrelatedIdentity'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/accountactionrequestdto-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoCorrelatedIdentity', 'AccountactionrequestdtoCorrelatedIdentity']
---


# AccountactionrequestdtoCorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountactionrequestdtoCorrelatedIdentity = Initialize-AccountactionrequestdtoCorrelatedIdentity  -Type null `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$AccountactionrequestdtoCorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

