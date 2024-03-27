---
id: common-access-item-request
title: CommonAccessItemRequest
pagination_label: CommonAccessItemRequest
sidebar_label: CommonAccessItemRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CommonAccessItemRequest'] 
slug: /tools/sdk/powershell/beta/models/common-access-item-request
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemRequest']
---


# CommonAccessItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** |  Pointer to [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**Status** |  Pointer to [**CommonAccessItemState**](common-access-item-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommonAccessItemRequest = Initialize-PSSailpointBetaCommonAccessItemRequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

