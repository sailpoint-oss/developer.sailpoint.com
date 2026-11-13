# IdentityV2

# IdentityV2

Identity record returned by the search-backed identities v2 API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the identity. | [optional] 
**name** | **str** | Display name of the identity. | [optional] 
**alias** | **str** | Alternate unique identifier of the identity. Equivalent to the account name on the authoritative source. | [optional] 
**type** | **str** | The identity type. | [optional] 
**email_address** | **str** | Email address of the identity. | [optional] 
**identity_status** | **str** | The identity's status in the system. | [optional] 
**processing_state** | **str** | The processing state of the identity. | [optional] 
**protected** | **bool** | Whether the identity is protected from accidental deletion or modification. | [optional] [default to False]
**correlated** | **bool** | Whether the identity is correlated to an authoritative account. | [optional] [default to False]
**inactive** | **bool** | Whether the identity is inactive. | [optional] [default to False]
**is_manager** | **bool** | Whether this identity is a manager of another identity. | [optional] [default to False]
**locked** | **bool** | Whether the identity is locked. | [optional] [default to False]
**disabled** | **bool** | Whether the identity is disabled. | [optional] [default to False]
**manager** | [**IdentityV2Manager**](identity-v2-manager) |  | [optional] 
**lifecycle_state** | [**IdentityV2LifecycleState**](identity-v2-lifecycle-state) |  | [optional] 
**created** | **datetime** | Creation date of the identity. | [optional] 
**modified** | **datetime** | Last modification date of the identity. | [optional] 
**synced** | **datetime** | Last time the identity was synchronized to search. | [optional] 
**last_refresh** | **datetime** | The last time the identity was refreshed by the system. | [optional] 
**privilege_level** | [**IdentityV2PrivilegeLevel**](identity-v2-privilege-level) |  | [optional] 
\}

## Example

```python
from sailpoint.identities.models.identity_v2 import IdentityV2

identity_v2 = IdentityV2(
id='01f04e428c484542a241dc89c303b178',
name='John Mathews',
alias='john.mathews',
type='HUMAN',
email_address='john.mathews@example.com',
identity_status='ACTIVE',
processing_state='OK',
protected=False,
correlated=True,
inactive=False,
is_manager=True,
locked=False,
disabled=False,
manager=sailpoint.identities.models.identity_v2_manager.IdentityV2_manager(
                    id = '2c4180a46faadee4016fb4e018c20626', 
                    name = 'Robert Robinson', 
                    type = 'IDENTITY', ),
lifecycle_state=,
created='2023-01-03T21:16:22.432Z',
modified='2023-01-03T21:16:22.432Z',
synced='2023-01-03T21:16:22.432Z',
last_refresh='2020-11-22T15:42:31.123Z',
privilege_level=sailpoint.identities.models.identity_v2_privilege_level.IdentityV2PrivilegeLevel(
                    effective = 'HIGH', )
)

```
[[Back to top]](#) 

