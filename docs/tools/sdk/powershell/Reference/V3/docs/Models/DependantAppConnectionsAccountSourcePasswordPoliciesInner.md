---
id: dependant-app-connections-account-source-password-policies-inner
title: DependantAppConnectionsAccountSourcePasswordPoliciesInner
pagination_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner'] 
slug: /tools/sdk/powershell/v3/models/dependant-app-connections-account-source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner']
---


# DependantAppConnectionsAccountSourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | DTO type | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantAppConnectionsAccountSourcePasswordPoliciesInner = Initialize-PSSailpoint.V3DependantAppConnectionsAccountSourcePasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Policy ODS
```

- Convert the resource to JSON
```powershell
$DependantAppConnectionsAccountSourcePasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

