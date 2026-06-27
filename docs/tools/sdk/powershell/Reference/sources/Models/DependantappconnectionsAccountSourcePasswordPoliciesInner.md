---
id: dependantappconnections-account-source-password-policies-inner
title: DependantappconnectionsAccountSourcePasswordPoliciesInner
pagination_label: DependantappconnectionsAccountSourcePasswordPoliciesInner
sidebar_label: DependantappconnectionsAccountSourcePasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantappconnectionsAccountSourcePasswordPoliciesInner', 'DependantappconnectionsAccountSourcePasswordPoliciesInner'] 
slug: /tools/sdk/powershell/sources/models/dependantappconnections-account-source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'DependantappconnectionsAccountSourcePasswordPoliciesInner', 'DependantappconnectionsAccountSourcePasswordPoliciesInner']
---


# DependantappconnectionsAccountSourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | DTO type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantappconnectionsAccountSourcePasswordPoliciesInner = Initialize-DependantappconnectionsAccountSourcePasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Policy ODS
```

- Convert the resource to JSON
```powershell
$DependantappconnectionsAccountSourcePasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

