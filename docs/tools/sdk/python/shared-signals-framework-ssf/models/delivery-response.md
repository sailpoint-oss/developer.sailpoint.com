# DeliveryResponse

# DeliveryResponse

Delivery configuration returned in stream responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | Delivery method. | [optional] 
**endpoint_url** | **str** | Receiver endpoint URL. | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.delivery_response import DeliveryResponse

delivery_response = DeliveryResponse(
method='urn:ietf:rfc:8935',
endpoint_url='https://receiver.example.com/ssf/events'
)

```
[[Back to top]](#) 

