---
id: v2025-password-sync-group
title: PasswordSyncGroup
pagination_label: PasswordSyncGroup
sidebar_label: PasswordSyncGroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordSyncGroup', 'V2025PasswordSyncGroup'] 
slug: /tools/sdk/powershell/v2025/models/password-sync-group
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroup', 'V2025PasswordSyncGroup']
---


# PasswordSyncGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the sync group | [optional] 
**Name** | **String** | Name of the sync group | [optional] 
**PasswordPolicyId** | **String** | ID of the password policy | [optional] 
**SourceIds** | **[]String** | List of password managed sources IDs | [optional] 
**Created** | **System.DateTime** | The date and time this sync group was created | [optional] 
**Modified** | **System.DateTime** | The date and time this sync group was last modified | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordSyncGroup = Initialize-V2025PasswordSyncGroup  -Id 6881f631-3bd5-4213-9c75-8e05cc3e35dd `
 -Name Password Sync Group 1 `
 -PasswordPolicyId 2c91808d744ba0ce01746f93b6204501 `
 -SourceIds [2c918084660f45d6016617daa9210584, 2c918084660f45d6016617daa9210500] `
 -Created 2023-03-16T04:00Z `
 -Modified 2023-03-16T04:00Z
```

- Convert the resource to JSON
```powershell
$PasswordSyncGroup | ConvertTo-JSON
```


[[Back to top]](#) 

