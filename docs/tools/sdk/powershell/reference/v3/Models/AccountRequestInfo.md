---
id: account-request-info
title: AccountRequestInfo
pagination_label: AccountRequestInfo
sidebar_label: AccountRequestInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountRequestInfo'] 
slug: /tools/sdk/powershell/v3/models/account-request-info
tags: ['SDK', 'Software Development Kit', 'AccountRequestInfo']
---


# AccountRequestInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedObjectId** |  Pointer to **String** | Id of requested object | [optional] 
**RequestedObjectName** |  Pointer to **String** | Human-readable name of requested object | [optional] 
**RequestedObjectType** |  Pointer to [**RequestableObjectType**](requestable-object-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountRequestInfo = Initialize-PSSailpoint.V3AccountRequestInfo  -RequestedObjectId 2c91808563ef85690164001c31140c0c `
 -RequestedObjectName Treasury Analyst `
 -RequestedObjectType null
```

- Convert the resource to JSON
```powershell
$AccountRequestInfo | ConvertTo-JSON
```


[[Back to top]](#) 

