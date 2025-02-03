---
id: beta-non-employee-record
title: NonEmployeeRecord
pagination_label: NonEmployeeRecord
sidebar_label: NonEmployeeRecord
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRecord', 'BetaNonEmployeeRecord'] 
slug: /tools/sdk/powershell/beta/models/non-employee-record
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRecord', 'BetaNonEmployeeRecord']
---


# NonEmployeeRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee record id. | [optional] 
**AccountName** | **String** | Requested identity account name. | [optional] 
**FirstName** | **String** | Non-Employee's first name. | [optional] 
**LastName** | **String** | Non-Employee's last name. | [optional] 
**Email** | **String** | Non-Employee's email. | [optional] 
**Phone** | **String** | Non-Employee's phone. | [optional] 
**Manager** | **String** | The account ID of a valid identity to serve as this non-employee's manager. | [optional] 
**SourceId** | **String** | Non-Employee's source id. | [optional] 
**VarData** | **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**StartDate** | **System.DateTime** | Non-Employee employment start date. | [optional] 
**EndDate** | **System.DateTime** | Non-Employee employment end date. | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeRecord = Initialize-PSSailpoint.BetaNonEmployeeRecord  -Id ac10e21c-931c-1ef2-8193-1c51e7ff0003 `
 -AccountName william.smith `
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

