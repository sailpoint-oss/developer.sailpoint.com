# CreateDomainDkimV1405Response

# CreateDomainDkimV1405Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_name** | **object** | A message describing the error | [optional] 
**error_message** | **object** | Description of the error | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
\}

## Example

```python
from sailpoint.notifications.models.create_domain_dkim_v1405_response import CreateDomainDkimV1405Response

create_domain_dkim_v1405_response = CreateDomainDkimV1405Response(
error_name=NotSupportedException,
error_message=Cannot consume content type,
tracking_id='e7eab60924f64aa284175b9fa3309599'
)

```
[[Back to top]](#) 

