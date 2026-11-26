# VerificationRequest

# VerificationRequest

Request body for POST /ssf/streams/verify (receiver verification).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_id** | **str** | Stream ID for verification. | [required]
**state** | **str** | Optional state value for verification challenge. | [optional] 
\}

## Example

```python
from sailpoint.shared_signals_framework_ssf.models.verification_request import VerificationRequest

verification_request = VerificationRequest(
stream_id='550e8400-e29b-41d4-a716-446655440000',
state='verification-challenge-state-123'
)

```
[[Back to top]](#) 

