---
id: dependantappconnections-account-source
title: DependantappconnectionsAccountSource
pagination_label: DependantappconnectionsAccountSource
sidebar_label: DependantappconnectionsAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantappconnectionsAccountSource', 'DependantappconnectionsAccountSource'] 
slug: /tools/sdk/powershell/sources/models/dependantappconnections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantappconnectionsAccountSource', 'DependantappconnectionsAccountSource']
---


# DependantappconnectionsAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UseForPasswordManagement** | **Boolean** | Use this Account Source for password management | [optional] [default to $false]
**PasswordPolicies** | [**[]DependantappconnectionsAccountSourcePasswordPoliciesInner**](dependantappconnections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantappconnectionsAccountSource = Initialize-DependantappconnectionsAccountSource  -UseForPasswordManagement false `
 -PasswordPolicies null
```

- Convert the resource to JSON
```powershell
$DependantappconnectionsAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

