---
id: beta-common-access-item-request
title: CommonAccessItemRequest
pagination_label: CommonAccessItemRequest
sidebar_label: CommonAccessItemRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemRequest', 'BetaCommonAccessItemRequest'] 
slug: /tools/sdk/powershell/beta/models/common-access-item-request
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemRequest', 'BetaCommonAccessItemRequest']
---


# CommonAccessItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** | [**CommonAccessItemState**](common-access-item-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemRequest = Initialize-BetaCommonAccessItemRequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

