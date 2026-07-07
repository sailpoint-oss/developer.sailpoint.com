---
id: dependantconnectionsmissingdto
title: Dependantconnectionsmissingdto
pagination_label: Dependantconnectionsmissingdto
sidebar_label: Dependantconnectionsmissingdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dependantconnectionsmissingdto', 'Dependantconnectionsmissingdto'] 
slug: /tools/sdk/python/sources/models/dependantconnectionsmissingdto
tags: ['SDK', 'Software Development Kit', 'Dependantconnectionsmissingdto', 'Dependantconnectionsmissingdto']
---

# Dependantconnectionsmissingdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_type** |  **Enum** [  'identityProfiles',    'credentialProfiles',    'mappingProfiles',    'sourceAttributes',    'dependantCustomTransforms',    'dependantApps' ] | The type of dependency type that is missing in the SourceConnections | [optional] 
**reason** | **str** | The reason why this dependency is missing | [optional] 
}

## Example

```python
from sailpoint.sources.models.dependantconnectionsmissingdto import Dependantconnectionsmissingdto

dependantconnectionsmissingdto = Dependantconnectionsmissingdto(
dependency_type='dependantApps',
reason='If there was an error retrieving any dependencies, it would lbe listed here'
)

```
[[Back to top]](#) 

