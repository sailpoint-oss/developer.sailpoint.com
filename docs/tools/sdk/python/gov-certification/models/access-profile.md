# AccessProfile

# AccessProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Access Profile | [optional] 
**name** | **str** | Name of the Access Profile | [optional] 
**description** | **str** | Information about the Access Profile | [optional] 
**privileged** | **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access profile contains any entitlements that are privileged. Retained for backward compatibility. | [optional] [default to False]
**cloud_governed** | **bool** | True if the access profile is cloud governed. | [optional] [default to False]
**end_date** | **datetime** | The date at which a user's access expires | [optional] 
**owner** | [**IdentityReference**](identity-reference) |  | [optional] 
**source_name** | **str** | The name of the source for which this entitlement belongs | [optional] 
**source_type** | **str** | The type of the source for which the entitlement belongs | [optional] 
**source_id** | **str** | The ID of the source for which the entitlement belongs | [optional] 
**created** | **datetime** | Date the Access Profile was created. | [optional] 
**modified** | **datetime** | Date the Access Profile was last modified. | [optional] 
**entitlements** | [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this access profile. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.access_profile import AccessProfile

access_profile = AccessProfile(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
privileged=False,
cloud_governed=False,
end_date='2021-12-25T00:00Z',
owner=sailpoint.gov_certification.models.identity_reference.IdentityReference(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
source_name='ODS-AD-Source',
source_type='Active Directory - Direct',
source_id='78ca6be511cb41fbb86dba2fcca7780c',
created='2021-01-01T22:32:58.104Z',
modified='2021-02-01T22:32:58.104Z',
entitlements=[
                    sailpoint.gov_certification.models.entitlement_reference.EntitlementReference(
                        id = '2c918085718230600171993742c63558', 
                        name = 'CN=entitlement.bbb7c650', 
                        description = 'Gives read/write access to the company database', )
                    ]
)

```
[[Back to top]](#) 

