---
id: sourceapp-account-source
title: SourceappAccountSource
pagination_label: SourceappAccountSource
sidebar_label: SourceappAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceappAccountSource', 'SourceappAccountSource'] 
slug: /tools/sdk/powershell/apps/models/sourceapp-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappAccountSource', 'SourceappAccountSource']
---


# SourceappAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source ID | [optional] 
**Type** | **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** | **String** | The source name | [optional] 
**UseForPasswordManagement** | **Boolean** | If the source is used for password management | [optional] [default to $false]
**PasswordPolicies** | [**[]Basereferencedto**](basereferencedto) | The password policies for the source | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceappAccountSource = Initialize-SourceappAccountSource  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source `
 -UseForPasswordManagement false `
 -PasswordPolicies [{"type":"PASSWORD_POLICY","id":"006a072ecc6647f68bba9f4a4ad34649","name":"Password Policy 1"}]
```

- Convert the resource to JSON
```powershell
$SourceappAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

