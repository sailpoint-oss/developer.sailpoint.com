---
id: v2024-dependant-app-connections-account-source-password-policies-inner
title: DependantAppConnectionsAccountSourcePasswordPoliciesInner
pagination_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_label: DependantAppConnectionsAccountSourcePasswordPoliciesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'V2024DependantAppConnectionsAccountSourcePasswordPoliciesInner'] 
slug: /tools/sdk/powershell/v2024/models/dependant-app-connections-account-source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSourcePasswordPoliciesInner', 'V2024DependantAppConnectionsAccountSourcePasswordPoliciesInner']
---


# DependantAppConnectionsAccountSourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | DTO type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantAppConnectionsAccountSourcePasswordPoliciesInner = Initialize-V2024DependantAppConnectionsAccountSourcePasswordPoliciesInner  -Type PASSWORD_POLICY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Policy ODS
```

- Convert the resource to JSON
```powershell
$DependantAppConnectionsAccountSourcePasswordPoliciesInner | ConvertTo-JSON
```


[[Back to top]](#) 

