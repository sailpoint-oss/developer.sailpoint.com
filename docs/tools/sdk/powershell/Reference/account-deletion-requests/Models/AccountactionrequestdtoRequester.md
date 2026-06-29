---
id: accountactionrequestdto-requester
title: AccountactionrequestdtoRequester
pagination_label: AccountactionrequestdtoRequester
sidebar_label: AccountactionrequestdtoRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountactionrequestdtoRequester', 'AccountactionrequestdtoRequester'] 
slug: /tools/sdk/powershell/accountdeletionrequests/models/accountactionrequestdto-requester
tags: ['SDK', 'Software Development Kit', 'AccountactionrequestdtoRequester', 'AccountactionrequestdtoRequester']
---


# AccountactionrequestdtoRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountactionrequestdtoRequester = Initialize-AccountactionrequestdtoRequester  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccountactionrequestdtoRequester | ConvertTo-JSON
```


[[Back to top]](#) 

