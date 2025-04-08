---
id: v2025-common-access-item-request
title: CommonAccessItemRequest
pagination_label: CommonAccessItemRequest
sidebar_label: CommonAccessItemRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommonAccessItemRequest', 'V2025CommonAccessItemRequest'] 
slug: /tools/sdk/powershell/v2025/models/common-access-item-request
tags: ['SDK', 'Software Development Kit', 'CommonAccessItemRequest', 'V2025CommonAccessItemRequest']
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
$CommonAccessItemRequest = Initialize-PSSailpoint.V2025CommonAccessItemRequest  -Access null `
 -Status null
```

- Convert the resource to JSON
```powershell
$CommonAccessItemRequest | ConvertTo-JSON
```


[[Back to top]](#) 

