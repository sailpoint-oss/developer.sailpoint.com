# Entitlement

# Entitlement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id for the entitlement | [optional] 
**name** | **str** | The name of the entitlement | [optional] 
**description** | **str** | Information about the entitlement | [optional] 
**privileged** | **bool** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [optional] [default to False]
**owner** | [**IdentityReference**](identity-reference) |  | [optional] 
**attribute_name** | **str** | The name of the attribute on the source | [optional] 
**attribute_value** | **str** | The value of the attribute on the source | [optional] 
**source_schema_object_type** | **str** | The schema object type on the source used to represent the entitlement and its attributes | [optional] 
**source_name** | **str** | The name of the source for which this entitlement belongs | [optional] 
**source_type** | **str** | The type of the source for which the entitlement belongs | [optional] 
**source_id** | **str** | The ID of the source for which the entitlement belongs | [optional] 
**has_permissions** | **bool** | Indicates if the entitlement has permissions | [optional] [default to False]
**is_permission** | **bool** | Indicates if the entitlement is a representation of an account permission | [optional] [default to False]
**revocable** | **bool** | Indicates whether the entitlement can be revoked | [optional] [default to True]
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] [default to False]
**account** | [**AccountReference**](account-reference) |  | [optional] 
**data_access** | [**DataAccess**](data-access) |  | [optional] 
**contains_data_access** | **bool** | Will be true if the dataAccess property is populated. | [optional] [default to False]
**activity_insights** | [**ActivityInsights**](activity-insights) |  | [optional] 
**provisioning_type** |  **Enum** [  'JIT',    'STANDING' ] | Whether the entitlement assignment is just-in-time or standing | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.entitlement import Entitlement

entitlement = Entitlement(
id='2c918085718230600171993742c63558',
name='CN=entitlement.bbb7c650',
description='Gives read/write access to the company database',
privileged=False,
owner=sailpoint.gov_certification.models.identity_reference.IdentityReference(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
attribute_name='memberOf',
attribute_value='CN=entitlement.bbb7c650',
source_schema_object_type='groups',
source_name='ODS-AD-Source',
source_type='Active Directory - Direct',
source_id='78ca6be511cb41fbb86dba2fcca7780c',
has_permissions=False,
is_permission=False,
revocable=True,
cloud_governed=False,
account=sailpoint.gov_certification.models.account_reference.AccountReference(
                    native_identity = 'CN=Alison Ferguson', 
                    disabled = False, 
                    locked = False, 
                    type = 'ACCOUNT', 
                    id = '2c9180857182305e0171993737eb29e6', 
                    name = 'Alison Ferguso', 
                    created = '2020-04-20T20:11:05.067Z', 
                    modified = '2020-05-20T18:57:16.987Z', ),
data_access=sailpoint.gov_certification.models.data_access.DataAccess(
                    policies = [
                        sailpoint.gov_certification.models.data_access_policies_inner.DataAccess_policies_inner(
                            value = 'GDPR-20', )
                        ], 
                    categories = [
                        sailpoint.gov_certification.models.data_access_categories_inner.DataAccess_categories_inner(
                            value = 'SSN', 
                            match_count = 10, )
                        ], 
                    impact_score = sailpoint.gov_certification.models.data_access_impact_score.DataAccess_impactScore(
                        value = 'Medium', ), ),
contains_data_access=True,
activity_insights=sailpoint.gov_certification.models.activity_insights.ActivityInsights(
                    usage_days = 12, 
                    usage_days_state = 'COMPLETE', ),
provisioning_type='STANDING'
)

```
[[Back to top]](#) 

