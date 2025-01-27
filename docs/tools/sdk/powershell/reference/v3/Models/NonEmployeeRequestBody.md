---
id: non-employee-request-body
title: NonEmployeeRequestBody
pagination_label: NonEmployeeRequestBody
sidebar_label: NonEmployeeRequestBody
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeRequestBody'] 
slug: /tools/sdk/powershell/v3/models/non-employee-request-body
tags: ['SDK', 'Software Development Kit', 'NonEmployeeRequestBody']
---


# NonEmployeeRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountName** |  **String** | Requested identity account name. | [required]
**FirstName** |  **String** | Non-Employee's first name. | [required]
**LastName** |  **String** | Non-Employee's last name. | [required]
**Email** |  **String** | Non-Employee's email. | [required]
**Phone** |  **String** | Non-Employee's phone. | [required]
**Manager** |  **String** | The account ID of a valid identity to serve as this non-employee's manager. | [required]
**SourceId** |  **String** | Non-Employee's source id. | [required]
**VarData** |  Pointer to **map[string]String** | Additional attributes for a non-employee. Up to 10 custom attributes can be added. | [optional] 
**StartDate** |  **System.DateTime** | Non-Employee employment start date. | [required]
**EndDate** |  **System.DateTime** | Non-Employee employment end date. | [required]

## Examples

- Prepare the resource
```powershell
$NonEmployeeRequestBody = Initialize-PSSailpoint.V3NonEmployeeRequestBody  -AccountName william.smith `
 -FirstName William `
 -LastName Smith `
 -Email william.smith@example.com `
 -Phone 5125555555 `
 -Manager jane.doe `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -VarData {description&#x3D;Auditing} `
 -StartDate 2020-03-24T00:00-05:00 `
 -EndDate 2021-03-25T00:00-05:00
```

- Convert the resource to JSON
```powershell
$NonEmployeeRequestBody | ConvertTo-JSON
```


[[Back to top]](#) 

