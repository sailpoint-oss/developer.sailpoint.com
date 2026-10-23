# BusinessApplicationRef

# BusinessApplicationRef

Reference to a Business Application associated with a machine identity. Available when Business Applications is enabled for the tenant. At most one Business Application reference is supported per machine identity on create and patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'BUSINESS_APPLICATION' ] | Reference type. Must be `BUSINESS_APPLICATION`. | [required]
**id** | **str** | Existing Business Application id in the tenant. | [required]
**name** | **str** | Business Application display name. Ignored on write; responses are enriched from the Business Application. | [optional] 
**sanctioned_status** | **SanctionedStatus** | Sanctioned status of the linked Business Application. Ignored on write; responses are enriched from the Business Application. | [optional] [readonly] 
**correlation_type** | **CorrelationType** | Correlation type for this reference. On write: omit or `MANUAL` (default). `AUTOMATIC` is rejected (`400`). On response: may be `MANUAL` or `AUTOMATIC`. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities.models.business_application_ref import BusinessApplicationRef

business_application_ref = BusinessApplicationRef(
type='BUSINESS_APPLICATION',
id='2ee5e239-e68c-4d69-93fb-6c7ce4576190',
name='Cursor',
sanctioned_status='SANCTIONED',
correlation_type='MANUAL'
)

```
[[Back to top]](#) 

