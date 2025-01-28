---
id: v2024-source-health-dto
title: SourceHealthDto
pagination_label: SourceHealthDto
sidebar_label: SourceHealthDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceHealthDto'] 
slug: /tools/sdk/powershell/v2024/models/source-health-dto
tags: ['SDK', 'Software Development Kit', 'SourceHealthDto']
---


# SourceHealthDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | the id of the Source | [optional] [readonly] 
**Type** |  Pointer to **String** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Name** |  Pointer to **String** | the name of the source | [optional] 
**Org** |  Pointer to **String** | source's org | [optional] 
**IsAuthoritative** |  Pointer to **Boolean** | Is the source authoritative | [optional] 
**IsCluster** |  Pointer to **Boolean** | Is the source in a cluster | [optional] 
**Hostname** |  Pointer to **String** | source's hostname | [optional] 
**Pod** |  Pointer to **String** | source's pod | [optional] 
**IqServiceVersion** |  Pointer to **String** | The version of the iqService | [optional] 
**Status** |  Pointer to  **Enum** [  "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS" ] | connection test result | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceHealthDto = Initialize-PSSailpoint.V2024SourceHealthDto  -Id 2c91808568c529c60168cca6f90c1324 `
 -Type OpenLDAP - Direct `
 -Name Source1234 `
 -Org denali-cjh `
 -IsAuthoritative false `
 -IsCluster false `
 -Hostname megapod-useast1-secret-hostname.sailpoint.com `
 -Pod megapod-useast1 `
 -IqServiceVersion iqVersion123 `
 -Status SOURCE_STATE_UNCHECKED_SOURCE
```

- Convert the resource to JSON
```powershell
$SourceHealthDto | ConvertTo-JSON
```


[[Back to top]](#) 

