# ReviewItem

# ReviewItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The review item's ID | [optional] 
**type** | **CertificationItemType** |  | [optional] 
**completed** | **bool** | Indicates whether the review item is complete | [optional] [default to False]
**new_access** | **bool** | Indicates whether the review item is for new access to a source | [optional] [default to False]
**decision** | **CertificationDecision** |  | [optional] 
**proposed_end_date** | **datetime** | The end date proposed as part of decision to sunset a user's access | [optional] 
**comments** | **str** | Comments for this review item | [optional] 
**review_data** | [**ReviewData**](review-data) |  | [optional] 
**certification_subject_summary** | [**CertificationSubjectSummary**](certification-subject-summary) |  | [optional] 
**actor** | [**IdentityReference**](identity-reference) |  | [optional] 
**account_name** | **str** | The name of the account to which this access profile belongs | [optional] 
**source_name** | **str** | The name of the source for which this access profile belongs | [optional] 
**reauth_required** | **bool** | Indicates whether the review item requires a reauthentication for the approver | [optional] [default to False]
\}

## Example

```python
from sailpoint.gov_certification.models.review_item import ReviewItem

review_item = ReviewItem(
id='ef38f943-47e9-4562-b5bb-8424a56397d8',
type='ROLE',
completed=False,
new_access=False,
decision='APPROVED',
proposed_end_date='2021-12-25T00:00Z',
comments='This user is still fulfulling this role',
review_data=sailpoint.gov_certification.models.review_data.ReviewData(
                    target_reference = sailpoint.gov_certification.models.target_reference.TargetReference(
                        type = 'ROLE', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', ), 
                    entitlement = sailpoint.gov_certification.models.entitlement.Entitlement(
                        id = '2c918085718230600171993742c63558', 
                        name = 'CN=entitlement.bbb7c650', 
                        description = 'Gives read/write access to the company database', 
                        privileged = False, 
                        owner = sailpoint.gov_certification.models.identity_reference.IdentityReference(
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
                    access_profile = sailpoint.gov_certification.models.access_profile.AccessProfile(
                        id = '2c91808a7190d06e01719938fcd20792', 
                        name = 'Employee-database-read-write', 
                        description = 'Collection of entitlements to read/write the employee database', 
                        privileged = False, 
                        cloud_governed = False, 
                        end_date = '2021-12-25T00:00Z', 
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
                    role = sailpoint.gov_certification.models.role.Role(
                        id = '2c91808a7190d06e0171993907fd0794', 
                        name = 'Accounting-Employees', 
                        description = 'Role for members of the accounting department with the necessary Access Profiles', 
                        privileged = False, 
                        revocable = False, 
                        assignment_id = '2c91808a7190d06e0171993907fd0794', 
                        end_date = '2021-12-25T00:00Z', 
                        access_profiles = [
                            sailpoint.gov_certification.models.access_profile_reference.AccessProfileReference(
                                id = '2c91808a7190d06e01719938fcd20792', 
                                name = 'Employee-database-read-write', 
                                description = 'Collection of entitlements to read/write the employee database', )
                            ], ), ),
certification_subject_summary=sailpoint.gov_certification.models.certification_subject_summary.CertificationSubjectSummary(
                    subject_type = 'IDENTITY', 
                    id = '10dcb487-fd0d-44a1-8338-e48e7b9caf61', 
                    subject_name = 'Alison Ferguson', 
                    subject_target_id = '2c9180857182306001719937377a33de', 
                    completed = False, 
                    subject_email = 'Alison.Ferguson@email.com', 
                    subject_manager_name = 'Bobby Boss', 
                    identity_state = 'ACTIVE', ),
actor=sailpoint.gov_certification.models.identity_reference.IdentityReference(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
account_name='Alison Ferguson',
source_name='ODS-AD-Source',
reauth_required=False
)

```
[[Back to top]](#) 

