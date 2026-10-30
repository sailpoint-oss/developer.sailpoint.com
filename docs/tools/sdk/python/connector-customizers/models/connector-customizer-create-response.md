# ConnectorCustomizerCreateResponse

# ConnectorCustomizerCreateResponse

ConnectorCustomizerResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the ID of connector customizer. | [optional] 
**name** | **str** | name of the connector customizer. | [optional] 
**tenant_id** | **str** | Connector customizer tenant id. | [optional] 
**created** | **datetime** | Date-time when the connector customizer was created. | [optional] 
\}

## Example

```python
from sailpoint.connector_customizers.models.connector_customizer_create_response import ConnectorCustomizerCreateResponse

connector_customizer_create_response = ConnectorCustomizerCreateResponse(
id='b07dc46a-1498-4de8-bfbb-259a68e70c8a',
name='connector-customizer-name',
tenant_id='2c91808568c529c60168cca6f90c1324',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f')
)

```
[[Back to top]](#) 

