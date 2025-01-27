---
id: v2024-source-app-account-source
title: SourceAppAccountSource
pagination_label: SourceAppAccountSource
sidebar_label: SourceAppAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppAccountSource'] 
slug: /tools/sdk/powershell/v2024/models/source-app-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppAccountSource']
---


# SourceAppAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The source ID | [optional] 
**Type** |  Pointer to **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** |  Pointer to **String** | The source name | [optional] 
**UseForPasswordManagement** |  Pointer to **Boolean** | If the source is used for password management | [optional] [default to $false]
**PasswordPolicies** |  Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The password policies for the source | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAppAccountSource = Initialize-PSSailpoint.V2024SourceAppAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source `
 -UseForPasswordManagement false `
 -PasswordPolicies [{type&#x3D;PASSWORD_POLICY, id&#x3D;006a072ecc6647f68bba9f4a4ad34649, name&#x3D;Password Policy 1}]
```

- Convert the resource to JSON
```powershell
$SourceAppAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

