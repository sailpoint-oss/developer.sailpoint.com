# Role

# Role


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for the Role | [optional] 
**name** | **str** | The name of the Role | [optional] 
**description** | **str** | Information about the Role | [optional] 
**privileged** | **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility. | [optional] [default to False]
**owner** | [**IdentityReference**](identity-reference) |  | [optional] 
**revocable** | **bool** | Indicates whether the Role can be revoked or requested | [optional] [default to False]
**assignment_id** | **str** | the ID of the role assignment | [optional] 
**end_date** | **datetime** | The date when a user's access expires. | [optional] 
**entitlements** | [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this Role. | [optional] 
**access_profiles** | [**[]AccessProfileReference**](access-profile-reference) | A list of access profile references associated to this Role. | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.role import Role

role = Role(
id='2c91808a7190d06e0171993907fd0794',
name='Accounting-Employees',
description='Role for members of the accounting department with the necessary Access Profiles',
privileged=False,
owner=sailpoint.gov_certification.models.identity_reference.IdentityReference(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
revocable=False,
assignment_id='2c91808a7190d06e0171993907fd0794',
end_date='2021-12-25T00:00Z',
entitlements=[
                    sailpoint.gov_certification.models.entitlement_reference.EntitlementReference(
                        id = '2c918085718230600171993742c63558', 
                        name = 'CN=entitlement.bbb7c650', 
                        description = 'Gives read/write access to the company database', )
                    ],
access_profiles=[
                    sailpoint.gov_certification.models.access_profile_reference.AccessProfileReference(
                        id = '2c91808a7190d06e01719938fcd20792', 
                        name = 'Employee-database-read-write', 
                        description = 'Collection of entitlements to read/write the employee database', )
                    ]
)

```
[[Back to top]](#) 

