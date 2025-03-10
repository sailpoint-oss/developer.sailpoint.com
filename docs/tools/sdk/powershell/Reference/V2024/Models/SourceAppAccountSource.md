---
id: v2024-source-app-account-source
title: SourceAppAccountSource
pagination_label: SourceAppAccountSource
sidebar_label: SourceAppAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppAccountSource', 'V2024SourceAppAccountSource'] 
slug: /tools/sdk/powershell/v2024/models/source-app-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppAccountSource', 'V2024SourceAppAccountSource']
---


# SourceAppAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source ID | [optional] 
**Type** | **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** | **String** | The source name | [optional] 
**UseForPasswordManagement** | **Boolean** | If the source is used for password management | [optional] [default to $false]
**PasswordPolicies** | [**[]BaseReferenceDto**](base-reference-dto) | The password policies for the source | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAppAccountSource = Initialize-PSSailpoint.V2024SourceAppAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source `
 -UseForPasswordManagement false `
 -PasswordPolicies [{type=PASSWORD_POLICY, id=006a072ecc6647f68bba9f4a4ad34649, name=Password Policy 1}]
```

- Convert the resource to JSON
```powershell
$SourceAppAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

