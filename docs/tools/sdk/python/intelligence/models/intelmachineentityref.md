# Intelmachineentityref

# Intelmachineentityref

Typed id and name reference for owners, machine identities, and authorized humans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Reference type label from upstream (for example IDENTITY or MACHINE_IDENTITY). | [required]
**id** | **str** | Referenced object identifier. | [required]
**name** | **str** | Display name for the referenced identity or entity. | [required]
**email** | **str** | Email for authorized human holders when available upstream. | [optional] 
\}

## Example

```python
from sailpoint.intelligence.models.intelmachineentityref import Intelmachineentityref

intelmachineentityref = Intelmachineentityref(
type='IDENTITY',
id='ef38f94347e94562b5bb8424a56397d8',
name='Example User',
email='user@example.com'
)

```
[[Back to top]](#) 

