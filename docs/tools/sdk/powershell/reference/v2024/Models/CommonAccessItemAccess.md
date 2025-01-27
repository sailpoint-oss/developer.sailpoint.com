---
id: v2024-common-access-item-access
title: CommonAccessItemAccess
pagination_label: CommonAccessItemAccess
sidebar_label: CommonAccessItemAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemAccess'] 
slug: /tools/sdk/powershell/v2024/models/common-access-item-access
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemAccess']
---


# CommonAccessItemAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Common access ID | [optional] 
**Type** |  Pointer to [**CommonAccessType**](common-access-type) |  | [optional] 
**Name** |  Pointer to **String** | Common access name | [optional] 
**Description** |  Pointer to **String** | Common access description | [optional] 
**OwnerName** |  Pointer to **String** | Common access owner name | [optional] 
**OwnerId** |  Pointer to **String** | Common access owner ID | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemAccess = Initialize-PSSailpoint.V2024CommonAccessItemAccess  -Id null `
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

