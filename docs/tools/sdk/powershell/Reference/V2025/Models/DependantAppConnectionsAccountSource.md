---
id: v2025-dependant-app-connections-account-source
title: DependantAppConnectionsAccountSource
pagination_label: DependantAppConnectionsAccountSource
sidebar_label: DependantAppConnectionsAccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantAppConnectionsAccountSource', 'V2025DependantAppConnectionsAccountSource'] 
slug: /tools/sdk/powershell/v2025/models/dependant-app-connections-account-source
tags: ['SDK', 'Software Development Kit', 'DependantAppConnectionsAccountSource', 'V2025DependantAppConnectionsAccountSource']
---


# DependantAppConnectionsAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UseForPasswordManagement** | **Boolean** | Use this Account Source for password management | [optional] [default to $false]
**PasswordPolicies** | [**[]DependantAppConnectionsAccountSourcePasswordPoliciesInner**](dependant-app-connections-account-source-password-policies-inner) | A list of Password Policies for this Account Source | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantAppConnectionsAccountSource = Initialize-V2025DependantAppConnectionsAccountSource  -UseForPasswordManagement false `
 -PasswordPolicies null
```

- Convert the resource to JSON
```powershell
$DependantAppConnectionsAccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

