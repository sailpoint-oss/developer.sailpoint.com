# V3CreateConnectorDto

# V3CreateConnectorDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The connector name. Need to be unique per tenant. The name will able be used to derive a url friendly unique scriptname that will be in response. Script name can then be used for all update endpoints | [required]
**type** | **str** | The connector type. If not specified will be defaulted to 'custom '+name | [optional] 
**class_name** | **str** | The connector class name. If you are implementing openconnector standard (what is recommended), then this need to be set to sailpoint.connector.OpenConnectorAdapter | [required]
**direct_connect** | **bool** | true if the source is a direct connect source | [optional] [default to True]
**status** |  **Enum** [  'DEVELOPMENT',    'DEMO',    'RELEASED' ] | The connector status | [optional] 
\}

## Example

```python
from sailpoint.connectors.models.v3_create_connector_dto import V3CreateConnectorDto

v3_create_connector_dto = V3CreateConnectorDto(
name='custom connector',
type='custom connector type',
class_name='sailpoint.connector.OpenConnectorAdapter',
direct_connect=True,
status='RELEASED'
)

```
[[Back to top]](#) 

