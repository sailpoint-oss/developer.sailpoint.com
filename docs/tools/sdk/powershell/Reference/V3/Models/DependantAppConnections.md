---
id: dependant-app-connections
title: DependantAppConnections
pagination_label: DependantAppConnections
sidebar_label: DependantAppConnections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantAppConnections', 'DependantAppConnections'] 
slug: /tools/sdk/powershell/v3/models/dependant-app-connections
tags: ['SDK', 'Software Development Kit', 'DependantAppConnections', 'DependantAppConnections']
---


# DependantAppConnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | **String** | Id of the connected Application | [optional] 
**Description** | **String** | Description of the connected Application | [optional] 
**Enabled** | **Boolean** | Is the Application enabled | [optional] [default to $true]
**ProvisionRequestEnabled** | **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $true]
**AccountSource** | [**DependantAppConnectionsAccountSource**](dependant-app-connections-account-source) |  | [optional] 
**LauncherCount** | **Int64** | The amount of launchers for connected Application (long type) | [optional] 
**MatchAllAccount** | **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $false]
**Owner** | [**[]BaseReferenceDto**](base-reference-dto) | The owner of the connected Application | [optional] 
**AppCenterEnabled** | **Boolean** | Is App Center enabled for connected Application | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$DependantAppConnections = Initialize-DependantAppConnections  -CloudAppId 9e3cdd80edf84f119327df8bbd5bb5ac `
 -Description This is a Sailpoint application `
 -Enabled true `
 -ProvisionRequestEnabled true `
 -AccountSource null `
 -LauncherCount 100 `
 -MatchAllAccount true `
 -Owner null `
 -AppCenterEnabled false
```

- Convert the resource to JSON
```powershell
$DependantAppConnections | ConvertTo-JSON
```


[[Back to top]](#) 

