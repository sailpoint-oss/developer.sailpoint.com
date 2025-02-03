---
id: dependant-connections-missing-dto
title: DependantConnectionsMissingDto
pagination_label: DependantConnectionsMissingDto
sidebar_label: DependantConnectionsMissingDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DependantConnectionsMissingDto', 'DependantConnectionsMissingDto'] 
slug: /tools/sdk/powershell/v3/models/dependant-connections-missing-dto
tags: ['SDK', 'Software Development Kit', 'DependantConnectionsMissingDto', 'DependantConnectionsMissingDto']
---


# DependantConnectionsMissingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DependencyType** |  **Enum** [  "identityProfiles",    "credentialProfiles",    "mappingProfiles",    "sourceAttributes",    "dependantCustomTransforms",    "dependantApps" ] | The type of dependency type that is missing in the SourceConnections | [optional] 
**Reason** | **String** | The reason why this dependency is missing | [optional] 

## Examples

- Prepare the resource
```powershell
$DependantConnectionsMissingDto = Initialize-PSSailpoint.V3DependantConnectionsMissingDto  -DependencyType dependantApps `
 -Reason If there was an error retrieving any dependencies, it would lbe listed here
```

- Convert the resource to JSON
```powershell
$DependantConnectionsMissingDto | ConvertTo-JSON
```


[[Back to top]](#) 

