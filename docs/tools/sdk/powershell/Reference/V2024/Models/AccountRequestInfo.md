---
id: v2024-account-request-info
title: AccountRequestInfo
pagination_label: AccountRequestInfo
sidebar_label: AccountRequestInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountRequestInfo', 'V2024AccountRequestInfo'] 
slug: /tools/sdk/powershell/v2024/models/account-request-info
tags: ['SDK', 'Software Development Kit', 'AccountRequestInfo', 'V2024AccountRequestInfo']
---


# AccountRequestInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** | **String** | Id of requested object | [optional] 
**RequestedObjectName** | **String** | Human-readable name of requested object | [optional] 
**RequestedObjectType** | [**RequestableObjectType**](requestable-object-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequestInfo = Initialize-V2024AccountRequestInfo  -RequestedObjectId 2c91808563ef85690164001c31140c0c `
 -RequestedObjectName Treasury Analyst `
 -RequestedObjectType null
```

- Convert the resource to JSON
```powershell
$AccountRequestInfo | ConvertTo-JSON
```


[[Back to top]](#) 

