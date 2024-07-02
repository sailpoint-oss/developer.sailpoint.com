---
id: non-employee-record
title: NonEmployeeRecord
pagination_label: NonEmployeeRecord
sidebar_label: NonEmployeeRecord
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeRecord'] 
slug: /tools/sdk/powershell/beta/models/non-employee-record
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRecord']
---


# NonEmployeeRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee record id. | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **String** | Non-Employee&#39;s first name. | [optional] 
**LastName** |  Pointer to **String** | Non-Employee&#39;s last name. | [optional] 
**Email** |  Pointer to **String** | Non-Employee&#39;s email. | [optional] 
**Phone** |  Pointer to **String** | Non-Employee&#39;s phone. | [optional] 
**Manager** |  Pointer to **String** | The account ID of a valid identity to serve as this non-employee&#39;s manager. | [optional] 
**SourceId** |  Pointer to **String** | Non-Employee&#39;s source id. | [optional] 
**VarData** |  Pointer to **map[string]String** | Attribute blob/bag for a non-employee. | [optional] 
**StartDate** |  Pointer to **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** |  Pointer to **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRecord = Initialize-BetaNonEmployeeRecord  -Id null `
 -AccountName null `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5555555555 `
 -Manager jane.doe `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -VarData null `
 -StartDate 2019-08-23T18:52:59.162Z `
 -EndDate 2020-08-23T18:52:59.162Z `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z
```

- Convert the resource to JSON
```powershell
$NonEmployeeRecord | ConvertTo-JSON
```


[[Back to top]](#) 

