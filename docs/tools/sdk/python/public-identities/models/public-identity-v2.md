# PublicIdentityV2

# PublicIdentityV2

Projected public identity returned by POST /public-identities/v2/search. Root fields are always present (null when unavailable). attributes contains only keys from GET /public-identities/v2/visible-attributes configuredAttributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity id | [required]
**name** | **str** | Alternate unique identifier for the identity (alias / search field name). | [required]
**display_name** | **str** | Human-readable display name of the identity. | [required]
**email** | **str** | Email address of identity. | [required]
**identity_state** |  **Enum** [  'ACTIVE',    'INACTIVE_SHORT_TERM',    'INACTIVE_LONG_TERM' ] | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. | [required]
**cloud_lifecycle_state** | **str** | The lifecycle status for the identity | [required]
**manager** | [**PublicIdentityV2Manager**](public-identity-v2-manager) | Manager of this identity, or null when none | [required]
**attributes** | **map[string]str** | Configured public identity attributes only (from visible-attributes configuredAttributes). Missing keys are omitted; present null values are returned as null. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identity_v2 import PublicIdentityV2

public_identity_v2 = PublicIdentityV2(
id='2c9180857182305e0171993735622948',
name='alison.ferguso',
display_name='Alison Ferguso',
email='alison.ferguso@acme-solar.com',
identity_state='ACTIVE',
cloud_lifecycle_state='Active',
manager=sailpoint.public_identities.models.public_identity_v2_manager.Public Identity V2 Manager(
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'thomas.edison', 
                    display_name = 'Thomas Edison', ),
attributes={"country":"US"}
)

```
[[Back to top]](#) 

