# EventBridgeConfig

# EventBridgeConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aws_account** | **str** | AWS Account Number (12-digit number) that has the EventBridge Partner Event Source Resource. | [required]
**aws_region** | **str** | AWS Region that has the EventBridge Partner Event Source Resource. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a full list of available values. | [required]
\}

## Example

```python
from sailpoint.triggers.models.event_bridge_config import EventBridgeConfig

event_bridge_config = EventBridgeConfig(
aws_account='123456789012',
aws_region='us-west-1'
)

```
[[Back to top]](#) 

