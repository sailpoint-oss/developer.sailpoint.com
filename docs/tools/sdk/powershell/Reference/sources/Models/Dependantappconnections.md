---
id: dependantappconnections
title: Dependantappconnections
pagination_label: Dependantappconnections
sidebar_label: Dependantappconnections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dependantappconnections', 'Dependantappconnections'] 
slug: /tools/sdk/powershell/sources/models/dependantappconnections
tags: ['SDK', 'Software Development Kit', 'Dependantappconnections', 'Dependantappconnections']
---


# Dependantappconnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAppId** | **String** | Id of the connected Application | [optional] 
**Description** | **String** | Description of the connected Application | [optional] 
**Enabled** | **Boolean** | Is the Application enabled | [optional] [default to $true]
**ProvisionRequestEnabled** | **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $true]
**AccountSource** | [**DependantappconnectionsAccountSource**](dependantappconnections-account-source) |  | [optional] 
**LauncherCount** | **Int64** | The amount of launchers for connected Application (long type) | [optional] 
**MatchAllAccount** | **Boolean** | Is Provisioning enabled for connected Application | [optional] [default to $false]
**Owner** | [**[]Basereferencedto**](basereferencedto) | The owner of the connected Application | [optional] 
**AppCenterEnabled** | **Boolean** | Is App Center enabled for connected Application | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Dependantappconnections = Initialize-Dependantappconnections  -CloudAppId 9e3cdd80edf84f119327df8bbd5bb5ac `
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
$Dependantappconnections | ConvertTo-JSON
```


[[Back to top]](#) 

