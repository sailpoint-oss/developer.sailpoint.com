---
id: v2024-dependant-connections-missing-dto
title: DependantConnectionsMissingDto
pagination_label: DependantConnectionsMissingDto
sidebar_label: DependantConnectionsMissingDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DependantConnectionsMissingDto', 'V2024DependantConnectionsMissingDto'] 
slug: /tools/sdk/python/v2024/models/dependant-connections-missing-dto
tags: ['SDK', 'Software Development Kit', 'DependantConnectionsMissingDto', 'V2024DependantConnectionsMissingDto']
---

# DependantConnectionsMissingDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_type** |  **Enum** [  'identityProfiles',    'credentialProfiles',    'mappingProfiles',    'sourceAttributes',    'dependantCustomTransforms',    'dependantApps' ] | The type of dependency type that is missing in the SourceConnections | [optional] 
**reason** | **str** | The reason why this dependency is missing | [optional] 
}

## Example

```python
from sailpoint.v2024.models.dependant_connections_missing_dto import DependantConnectionsMissingDto

dependant_connections_missing_dto = DependantConnectionsMissingDto(
dependency_type='dependantApps',
reason='If there was an error retrieving any dependencies, it would lbe listed here'
)

```
[[Back to top]](#) 

