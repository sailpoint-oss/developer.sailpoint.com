# BusinessApplication

# BusinessApplication

A Business Application groups machine identities (for example AI agents or applications) under a common owner and sanctioned status, either discovered from a source or defined by an administrator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Business Application ID. Assigned by the service on create. | [optional] [readonly] 
**name** | **str** | Human-readable display name. Must be unique within the tenant. | [required]
**description** | **str** | Free-text description of the Business Application. | [optional] 
**vendor** | **str** | Vendor or publisher of the Business Application. | [optional] 
**signatures** | [**[]BusinessApplicationSignature**](business-application-signature) | Signatures used to automatically correlate machine identities to this Business Application. Modifying this field requires the custom Business Application feature to be enabled. | [optional] 
**owner** | [**BusinessApplicationOwner**](business-application-owner) |  | [optional] 
**additional_owners** | [**[]BusinessApplicationAdditionalOwnersInner**](business-application-additional-owners-inner) | Additional (secondary) owners of the Business Application. | [optional] 
**sanctioned_status** | **SanctionedStatus** | Sanctioned status of the Business Application. Defaults to `UNKNOWN`. | [optional] 
**origin** | **BusinessApplicationOrigin** |  | [optional] [readonly] 
**source** | [**BusinessApplicationSource**](business-application-source) |  | [optional] 
**created** | **datetime** | Time the Business Application was created. | [optional] [readonly] 
**modified** | **datetime** | Time the Business Application was last modified. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.business_applications.models.business_application import BusinessApplication

business_application = BusinessApplication(
id='a1b2c3d4-e5f6-7890-abcd-ef1234567890',
name='Cursor',
description='AI coding assistant used by the platform engineering team.',
vendor='Cursor',
signatures=[
                    sailpoint.business_applications.models.business_application_signature.Business Application Signature(
                        type = 'AI Agent', 
                        name = 'cursor', )
                    ],
owner=sailpoint.business_applications.models.business_application_owner.BusinessApplication_owner(),
additional_owners=[
                    null
                    ],
sanctioned_status='SANCTIONED',
origin='CUSTOM',
source=sailpoint.business_applications.models.business_application_source.BusinessApplication_source(),
created='2026-01-15T13:45:12.312Z',
modified='2026-02-20T09:31:47.882Z'
)

```
[[Back to top]](#) 

