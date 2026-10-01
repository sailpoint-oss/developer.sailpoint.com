# Intelidentityambiguouscandidate

# Intelidentityambiguouscandidate

One disambiguation hint when multiple identities matched the same filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity Security Cloud identifier for a matching candidate. | [required]
**display_name** | **str** | Human-facing label when available; omitted when empty upstream. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelidentityambiguouscandidate import Intelidentityambiguouscandidate

intelidentityambiguouscandidate = Intelidentityambiguouscandidate(
id='ef38f94347e94562b5bb8424a56397d8',
display_name='Jane Example'
)

```
[[Back to top]](#) 

