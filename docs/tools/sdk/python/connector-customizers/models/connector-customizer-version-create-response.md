# ConnectorCustomizerVersionCreateResponse

# ConnectorCustomizerVersionCreateResponse

ConnectorCustomizerVersionCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customizer_id** | **str** | ID of connector customizer. | [optional] 
**image_id** | **str** | ImageID of the connector customizer. | [optional] 
**version** | **int** | Image version of the connector customizer. | [optional] 
**created** | **datetime** | Date-time when the connector customizer version was created. | [optional] 
\}

## Example

```python
from sailpoint.connector_customizers.models.connector_customizer_version_create_response import ConnectorCustomizerVersionCreateResponse

connector_customizer_version_create_response = ConnectorCustomizerVersionCreateResponse(
customizer_id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
image_id='2c91808568c529c60168cca6f90c1324',
version=1,
created='2022-02-08T14:50:03.827Z'
)

```
[[Back to top]](#) 

