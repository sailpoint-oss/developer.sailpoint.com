---
id: accountrequestdetailsdto-requester
title: AccountrequestdetailsdtoRequester
pagination_label: AccountrequestdetailsdtoRequester
sidebar_label: AccountrequestdetailsdtoRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountrequestdetailsdtoRequester', 'AccountrequestdetailsdtoRequester'] 
slug: /tools/sdk/powershell/machineaccountcreationrequest/models/accountrequestdetailsdto-requester
tags: ['SDK', 'Software Development Kit', 'AccountrequestdetailsdtoRequester', 'AccountrequestdetailsdtoRequester']
---


# AccountrequestdetailsdtoRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountrequestdetailsdtoRequester = Initialize-AccountrequestdetailsdtoRequester  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccountrequestdetailsdtoRequester | ConvertTo-JSON
```


[[Back to top]](#) 

