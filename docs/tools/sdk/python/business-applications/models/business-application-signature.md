# BusinessApplicationSignature

# BusinessApplicationSignature

A `(type, name)` rule used to automatically correlate machine identities to this Business Application. A signature matches a machine identity when the identity's `subtype` equals `type` and its `connector_attributes.spBusinessApplication` equals `name`. Each `(type, name)` pair is unique across all Business Applications in the tenant; assigning a signature already owned by another Business Application returns a 409 conflict. Modifying signatures requires the custom Business Application feature to be enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'AI Agent',    'Application' ] | Signature type, matched against the machine identity's subtype. Kept consistent with the machine identity subtype values. | [required]
**name** | **str** | Connector signature value to match against the machine identity's `spBusinessApplication` connector attribute. | [required]
\}

## Example

```python
from sailpoint.business_applications.models.business_application_signature import BusinessApplicationSignature

business_application_signature = BusinessApplicationSignature(
type='AI Agent',
name='cursor'
)

```
[[Back to top]](#) 

