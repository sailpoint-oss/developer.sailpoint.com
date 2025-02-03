---
id: v2024-common-access-item-request
title: CommonAccessItemRequest
pagination_label: CommonAccessItemRequest
sidebar_label: CommonAccessItemRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemRequest', 'V2024CommonAccessItemRequest'] 
slug: /tools/sdk/powershell/v2024/models/common-access-item-request
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemRequest', 'V2024CommonAccessItemRequest']
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
$CommonAccessItemRequest = Initialize-PSSailpoint.V2024CommonAccessItemRequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

