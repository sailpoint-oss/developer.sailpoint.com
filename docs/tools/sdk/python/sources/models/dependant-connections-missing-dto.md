# DependantConnectionsMissingDto

# DependantConnectionsMissingDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency_type** |  **Enum** [  'identityProfiles',    'credentialProfiles',    'mappingProfiles',    'sourceAttributes',    'dependantCustomTransforms',    'dependantApps' ] | The type of dependency type that is missing in the SourceConnections | [optional] 
**reason** | **str** | The reason why this dependency is missing | [optional] 
\}

## Example

```python
from sailpoint.sources.models.dependant_connections_missing_dto import DependantConnectionsMissingDto

dependant_connections_missing_dto = DependantConnectionsMissingDto(
dependency_type='dependantApps',
reason='If there was an error retrieving any dependencies, it would lbe listed here'
)

```
[[Back to top]](#) 

