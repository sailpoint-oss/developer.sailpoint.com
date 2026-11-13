# BusinessApplicationSource

# BusinessApplicationSource

Discovery source of the Business Application. `null` for out-of-the-box or administrator-defined Business Applications that were not discovered from a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.business_applications.models.business_application_source import BusinessApplicationSource

business_application_source = BusinessApplicationSource(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

