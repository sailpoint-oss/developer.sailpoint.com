---
id: dependant-app-connections
title: DependantAppConnections
pagination_label: DependantAppConnections
sidebar_label: DependantAppConnections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantAppConnections'] 
slug: /tools/sdk/powershell/v3/models/dependant-app-connections
tags: ['SDK', 'Software Development Kit', 'DependantAppConnections']
---


# DependantAppConnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** |  Pointer to **String** | Id of the connected Application | [optional] 
**Description** |  Pointer to **String** | Description of the connected Application | [optional] 
**Enabled** |  Pointer to **Boolean** | Is the Application enabled | [optional] [default to $true]
**ProvisionRequestEnabled** |  Pointer to **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $true]
**AccountSource** |  Pointer to [**DependantAppConnectionsAccountSource**](dependant-app-connections-account-source) |  | [optional] 
**LauncherCount** |  Pointer to **Int64** | The amount of launchers for connected Application (long type) | [optional] 
**MatchAllAccount** |  Pointer to **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $false]
**Owner** |  Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The owner of the connected Application | [optional] 
**AppCenterEnabled** |  Pointer to **Boolean** | Is App Center enabled for connected Application | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$DependantAppConnections = Initialize-PSSailpoint.V3DependantAppConnections  -CloudAppId 9e3cdd80edf84f119327df8bbd5bb5ac `
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

