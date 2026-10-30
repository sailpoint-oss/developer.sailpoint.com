# ReviewData

# ReviewData

An object holding the entity that is being reviewed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_reference** | [**TargetReference**](target-reference) |  | [optional] 
**entitlement** | [**Entitlement**](entitlement) |  | [optional] 
**access_profile** | [**AccessProfile**](access-profile) |  | [optional] 
**role** | [**Role**](role) |  | [optional] 
\}

## Example

```python
from sailpoint.gov_certification.models.review_data import ReviewData

review_data = ReviewData(
target_reference=sailpoint.gov_certification.models.target_reference.TargetReference(
                    type = 'ROLE', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', ),
entitlement=sailpoint.gov_certification.models.entitlement.Entitlement(
                    id = '2c918085718230600171993742c63558', 
                    name = 'CN=entitlement.bbb7c650', 
                    description = 'Gives read/write access to the company database', 
                    privileged = False, 
                    owner = sailpoint.gov_certification.models.identity_reference.IdentityReference(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), 
                    attribute_name = 'memberOf', 
                    attribute_value = 'CN=entitlement.bbb7c650', 
                    source_schema_object_type = 'groups', 
                    source_name = 'ODS-AD-Source', 
                    source_type = 'Active Directory - Direct', 
                    source_id = '78ca6be511cb41fbb86dba2fcca7780c', 
                    has_permissions = False, 
                    is_permission = False, 
                    revocable = True, 
                    cloud_governed = False, 
                    account = sailpoint.gov_certification.models.account_reference.AccountReference(
                        native_identity = 'CN=Alison Ferguson', 
                        disabled = False, 
                        locked = False, 
                        type = 'ACCOUNT', 
                        id = '2c9180857182305e0171993737eb29e6', 
                        name = 'Alison Ferguso', 
                        created = '2020-04-20T20:11:05.067Z', 
                        modified = '2020-05-20T18:57:16.987Z', ), 
                    data_access = sailpoint.gov_certification.models.data_access.DataAccess(
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
                    contains_data_access = True, 
                    activity_insights = sailpoint.gov_certification.models.activity_insights.ActivityInsights(
                        usage_days = 12, 
                        usage_days_state = 'COMPLETE', ), 
                    provisioning_type = 'STANDING', ),
access_profile=sailpoint.gov_certification.models.access_profile.AccessProfile(
                    id = '2c91808a7190d06e01719938fcd20792', 
                    name = 'Employee-database-read-write', 
                    description = 'Collection of entitlements to read/write the employee database', 
                    privileged = False, 
                    cloud_governed = False, 
                    end_date = '2021-12-25T00:00Z', 
                    owner = sailpoint.gov_certification.models.identity_reference.IdentityReference(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), 
                    source_name = 'ODS-AD-Source', 
                    source_type = 'Active Directory - Direct', 
                    source_id = '78ca6be511cb41fbb86dba2fcca7780c', 
                    created = '2021-01-01T22:32:58.104Z', 
                    modified = '2021-02-01T22:32:58.104Z', 
                    entitlements = [
                        sailpoint.gov_certification.models.entitlement_reference.EntitlementReference(
                            id = '2c918085718230600171993742c63558', 
                            name = 'CN=entitlement.bbb7c650', 
                            description = 'Gives read/write access to the company database', )
                        ], ),
role=sailpoint.gov_certification.models.role.Role(
                    id = '2c91808a7190d06e0171993907fd0794', 
                    name = 'Accounting-Employees', 
                    description = 'Role for members of the accounting department with the necessary Access Profiles', 
                    privileged = False, 
                    owner = sailpoint.gov_certification.models.identity_reference.IdentityReference(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), 
                    revocable = False, 
                    assignment_id = '2c91808a7190d06e0171993907fd0794', 
                    end_date = '2021-12-25T00:00Z', 
                    entitlements = [
                        sailpoint.gov_certification.models.entitlement_reference.EntitlementReference(
                            id = '2c918085718230600171993742c63558', 
                            name = 'CN=entitlement.bbb7c650', 
                            description = 'Gives read/write access to the company database', )
                        ], 
                    access_profiles = [
                        sailpoint.gov_certification.models.access_profile_reference.AccessProfileReference(
                            id = '2c91808a7190d06e01719938fcd20792', 
                            name = 'Employee-database-read-write', 
                            description = 'Collection of entitlements to read/write the employee database', )
                        ], )
)

```
[[Back to top]](#) 

