---
id: source-health-dto
title: SourceHealthDto
pagination_label: SourceHealthDto
sidebar_label: SourceHealthDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceHealthDto', 'SourceHealthDto'] 
slug: /tools/sdk/powershell/v3/models/source-health-dto
tags: ['SDK', 'Software Development Kit', 'SourceHealthDto', 'SourceHealthDto']
---


# SourceHealthDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the Source | [optional] [readonly] 
**Type** | **String** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**Name** | **String** | the name of the source | [optional] 
**Org** | **String** | source's org | [optional] 
**IsAuthoritative** | **Boolean** | Is the source authoritative | [optional] 
**IsCluster** | **Boolean** | Is the source in a cluster | [optional] 
**Hostname** | **String** | source's hostname | [optional] 
**Pod** | **String** | source's pod | [optional] 
**IqServiceVersion** | **String** | The version of the iqService | [optional] 
**Status** |  **Enum** [  "SOURCE_STATE_ERROR_CLUSTER",    "SOURCE_STATE_ERROR_SOURCE",    "SOURCE_STATE_ERROR_VA",    "SOURCE_STATE_FAILURE_CLUSTER",    "SOURCE_STATE_FAILURE_SOURCE",    "SOURCE_STATE_HEALTHY",    "SOURCE_STATE_UNCHECKED_CLUSTER",    "SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES",    "SOURCE_STATE_UNCHECKED_SOURCE",    "SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS" ] | connection test result | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceHealthDto = Initialize-SourceHealthDto  -Id 2c91808568c529c60168cca6f90c1324 `
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

