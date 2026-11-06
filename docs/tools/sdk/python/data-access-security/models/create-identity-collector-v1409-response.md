# CreateIdentityCollectorV1409Response

# CreateIdentityCollectorV1409Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_code** | **str** | Fine-grained error code providing more detail of the error. | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
**messages** | [**[]CreateIdentityCollectorV1409ResponseMessagesInner**](create-identity-collector-v1409-response-messages-inner) | Generic localized reason for error. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.create_identity_collector_v1409_response import CreateIdentityCollectorV1409Response

create_identity_collector_v1409_response = CreateIdentityCollectorV1409Response(
detail_code='409.1 Conflict',
tracking_id='e7eab60924f64aa284175b9fa3309599',
messages=[
                    sailpoint.data_access_security.models.create_identity_collector_v1_409_response_messages_inner.createIdentityCollectorV1_409_response_messages_inner(
                        locale = 'en-US', 
                        locale_origin = 'DEFAULT', 
                        text = 'An identity collector with the same name already exists.', )
                    ]
)

```
[[Back to top]](#) 

