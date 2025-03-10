---
id: beta-self-import-export-dto
title: SelfImportExportDto
pagination_label: SelfImportExportDto
sidebar_label: SelfImportExportDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SelfImportExportDto', 'BetaSelfImportExportDto'] 
slug: /tools/sdk/python/beta/models/self-import-export-dto
tags: ['SDK', 'Software Development Kit', 'SelfImportExportDto', 'BetaSelfImportExportDto']
---

# SelfImportExportDto

Self block for imported/exported object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ACCESS_REQUEST_CONFIG',    'ATTR_SYNC_SOURCE_CONFIG',    'AUTH_ORG',    'CAMPAIGN_FILTER',    'CONNECTOR_RULE',    'FORM_DEFINITION',    'GOVERNANCE_GROUP',    'IDENTITY_OBJECT_CONFIG',    'IDENTITY_PROFILE',    'LIFECYCLE_STATE',    'NOTIFICATION_TEMPLATE',    'PASSWORD_POLICY',    'PASSWORD_SYNC_GROUP',    'PUBLIC_IDENTITIES_CONFIG',    'ROLE',    'RULE',    'SEGMENT',    'SERVICE_DESK_INTEGRATION',    'SOD_POLICY',    'SOURCE',    'TAG',    'TRANSFORM',    'TRIGGER_SUBSCRIPTION',    'WORKFLOW' ] | Imported/exported object's DTO type. Import is currently only possible with the CONNECTOR_RULE, IDENTITY_OBJECT_CONFIG, IDENTITY_PROFILE, RULE, SOURCE, TRANSFORM, and TRIGGER_SUBSCRIPTION object types. | [optional] 
**id** | **str** | Imported/exported object's ID. | [optional] 
**name** | **str** | Imported/exported object's display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.self_import_export_dto import SelfImportExportDto

self_import_export_dto = SelfImportExportDto(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

