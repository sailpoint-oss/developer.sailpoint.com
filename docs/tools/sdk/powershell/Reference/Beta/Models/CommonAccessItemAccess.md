---
id: beta-common-access-item-access
title: CommonAccessItemAccess
pagination_label: CommonAccessItemAccess
sidebar_label: CommonAccessItemAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemAccess', 'BetaCommonAccessItemAccess'] 
slug: /tools/sdk/powershell/beta/models/common-access-item-access
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemAccess', 'BetaCommonAccessItemAccess']
---


# CommonAccessItemAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Common access ID | [optional] 
**Type** | [**CommonAccessType**](common-access-type) |  | [optional] 
**Name** | **String** | Common access name | [optional] 
**Description** | **String** | Common access description | [optional] 
**OwnerName** | **String** | Common access owner name | [optional] 
**OwnerId** | **String** | Common access owner ID | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemAccess = Initialize-BetaCommonAccessItemAccess  -Id null `
 -Type null `
 -Name null `
 -Description null `
 -OwnerName null `
 -OwnerId null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemAccess | ConvertTo-JSON
```


[[Back to top]](#) 

