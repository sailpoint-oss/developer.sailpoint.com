---
id: v2025-source-health-dto
title: SourceHealthDto
pagination_label: SourceHealthDto
sidebar_label: SourceHealthDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SourceHealthDto', 'V2025SourceHealthDto'] 
slug: /tools/sdk/python/v2025/models/source-health-dto
tags: ['SDK', 'Software Development Kit', 'SourceHealthDto', 'V2025SourceHealthDto']
---

# SourceHealthDto

Dto for source health data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the id of the Source | [optional] [readonly] 
**type** | **str** | Specifies the type of system being managed e.g. Active Directory, Workday, etc.. If you are creating a Delimited File source, you must set the `provisionasCsv` query parameter to `true`.  | [optional] 
**name** | **str** | the name of the source | [optional] 
**org** | **str** | source's org | [optional] 
**is_authoritative** | **bool** | Is the source authoritative | [optional] 
**is_cluster** | **bool** | Is the source in a cluster | [optional] 
**hostname** | **str** | source's hostname | [optional] 
**pod** | **str** | source's pod | [optional] 
**iq_service_version** | **str** | The version of the iqService | [optional] 
**status** |  **Enum** [  'SOURCE_STATE_ERROR_CLUSTER',    'SOURCE_STATE_ERROR_SOURCE',    'SOURCE_STATE_ERROR_VA',    'SOURCE_STATE_FAILURE_CLUSTER',    'SOURCE_STATE_FAILURE_SOURCE',    'SOURCE_STATE_HEALTHY',    'SOURCE_STATE_UNCHECKED_CLUSTER',    'SOURCE_STATE_UNCHECKED_CLUSTER_NO_SOURCES',    'SOURCE_STATE_UNCHECKED_SOURCE',    'SOURCE_STATE_UNCHECKED_SOURCE_NO_ACCOUNTS',    'SOURCE_STATE_ERROR_ACCOUNT_FILE_IMPORT' ] | connection test result | [optional] 
}

## Example

```python
from sailpoint.v2025.models.source_health_dto import SourceHealthDto

source_health_dto = SourceHealthDto(
id='2c91808568c529c60168cca6f90c1324',
type='OpenLDAP - Direct',
name='Source1234',
org='denali-cjh',
is_authoritative=False,
is_cluster=False,
hostname='megapod-useast1-secret-hostname.sailpoint.com',
pod='megapod-useast1',
iq_service_version='iqVersion123',
status='SOURCE_STATE_UNCHECKED_SOURCE'
)

```
[[Back to top]](#) 

