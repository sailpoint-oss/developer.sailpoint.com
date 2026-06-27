---
id: privilegecriteriaconfigdto
title: Privilegecriteriaconfigdto
pagination_label: Privilegecriteriaconfigdto
sidebar_label: Privilegecriteriaconfigdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Privilegecriteriaconfigdto', 'Privilegecriteriaconfigdto'] 
slug: /tools/sdk/powershell/privilegecriteriaconfiguration/models/privilegecriteriaconfigdto
tags: ['SDK', 'Software Development Kit', 'Privilegecriteriaconfigdto', 'Privilegecriteriaconfigdto']
---


# Privilegecriteriaconfigdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The Id of the task which is executing the bulk update. | [optional] 
**SourceId** | **String** | The Id of the source that the criteria configuration is applied to. | [optional] 
**Config** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The configuration settings for privilege criteria evaluation.  | [optional] 
**Created** | **String** | The date and time when the privilege criteria configuration was created. | [optional] 
**Modified** | **String** | The date and time when the privilege criteria configuration was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$Privilegecriteriaconfigdto = Initialize-Privilegecriteriaconfigdto  -Id 2c9180867817ac4d017817c491119a20 `
 -SourceId c42c45d8d7c04d2da64d215cd8c32f21 `
 -Config {"globalPrivilegeLevelEnabled":true,"privilegeClassificationMode":"SINGLE_PRIVILEGE_LEVEL","singlePrivilegeLevel.privilegeLevel":"HIGH","criteriaPrivilegeLevel.connectorHighEnabled":true,"criteriaPrivilegeLevel.connectorMediumEnabled":true,"criteriaPrivilegeLevel.connectorLowEnabled":true,"criteriaPrivilegeLevel.customHighEnabled":true,"criteriaPrivilegeLevel.customMediumEnabled":true,"criteriaPrivilegeLevel.customLowEnabled":true} `
 -Created 2024-01-10T12:00:00Z `
 -Modified 2024-01-15T12:00:00Z
```

- Convert the resource to JSON
```powershell
$Privilegecriteriaconfigdto | ConvertTo-JSON
```


[[Back to top]](#) 

