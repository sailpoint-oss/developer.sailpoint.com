# CreateStreamDeliveryRequest

# CreateStreamDeliveryRequest

Full delivery configuration. method and endpoint_url are required.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery method (only push is supported). | [required]
**endpoint_url** | **str** | Receiver endpoint URL for push delivery. | [required]
**authorization_header** | **str** | Authorization header value for delivery requests. | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.create_stream_delivery_request import CreateStreamDeliveryRequest

create_stream_delivery_request = CreateStreamDeliveryRequest(
method='urn:ietf:rfc:8935',
endpoint_url='https://receiver.example.com/ssf/events',
authorization_header='Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
)

```
[[Back to top]](#) 

