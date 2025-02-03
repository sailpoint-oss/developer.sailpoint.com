---
id: non-employee-record
title: NonEmployeeRecord
pagination_label: NonEmployeeRecord
sidebar_label: NonEmployeeRecord
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRecord', 'NonEmployeeRecord'] 
slug: /tools/sdk/powershell/v3/models/non-employee-record
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRecord', 'NonEmployeeRecord']
---


# NonEmployeeRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee record id. | [optional] 
**AccountName** |  Pointer to **String** | Requested identity account name. | [optional] 
**FirstName** |  Pointer to **String** | Non-Employee's first name. | [optional] 
**LastName** |  Pointer to **String** | Non-Employee's last name. | [optional] 
**Email** |  Pointer to **String** | Non-Employee's email. | [optional] 
**Phone** |  Pointer to **String** | Non-Employee's phone. | [optional] 
**Manager** |  Pointer to **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**SourceId** |  Pointer to **String** | Non-Employee's source id. | [optional] 
**VarData** |  Pointer to **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**StartDate** |  Pointer to **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** |  Pointer to **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRecord = Initialize-PSSailpoint.V3NonEmployeeRecord  -Id ef38f94347e94562b5bb8424a56397d8 `
 -AccountName Abby.Smith `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5125555555 `
 -Manager jane.doe `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -VarData {description&#x3D;Auditing} `
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

