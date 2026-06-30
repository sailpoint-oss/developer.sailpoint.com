---
id: accessreviewitem
title: Accessreviewitem
pagination_label: Accessreviewitem
sidebar_label: Accessreviewitem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessreviewitem', 'Accessreviewitem'] 
slug: /tools/sdk/python/certifications/models/accessreviewitem
tags: ['SDK', 'Software Development Kit', 'Accessreviewitem', 'Accessreviewitem']
---

# Accessreviewitem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_summary** | [**Accesssummary**](accesssummary) |  | [optional] 
**identity_summary** | [**Certificationidentitysummary**](certificationidentitysummary) |  | [optional] 
**id** | **str** | The review item's id | [optional] 
**completed** | **bool** | Whether the review item is complete | [optional] 
**new_access** | **bool** | Indicates whether the review item is for new access to a source | [optional] 
**decision** | [**Certificationdecision**](certificationdecision) |  | [optional] 
**comments** | **str** | Comments for this review item | [optional] 
}

## Example

```python
from sailpoint.certifications.models.accessreviewitem import Accessreviewitem

accessreviewitem = Accessreviewitem(
access_summary=sailpoint.certifications.models.access_summary.Access Summary(
                    access = sailpoint.certifications.models.accesssummary_access.accesssummary_access(
                        type = 'IDENTITY', 
                        id = '2c9180867160846801719932c5153fb7', 
                        name = 'Entitlement for Company Database', ), 
                    entitlement = sailpoint.certifications.models.reviewableentitlement.reviewableentitlement(
                        id = '2c918085718230600171993742c63558', 
                        name = 'CN=entitlement.bbb7c650', 
                        description = 'Gives read/write access to the company database', 
                        privileged = False, 
                        owner = sailpoint.certifications.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
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
                        contains_data_access = True, 
                        data_access = sailpoint.certifications.models.data_access.Data Access(
                            policies = [
                                sailpoint.certifications.models.dataaccess_policies_inner.dataaccess_policies_inner(
                                    value = 'GDPR-20', )
                                ], 
                            categories = [
                                sailpoint.certifications.models.dataaccess_categories_inner.dataaccess_categories_inner(
                                    value = 'email-7', 
                                    match_count = 10, )
                                ], 
                            impact_score = sailpoint.certifications.models.dataaccess_impact_score.dataaccess_impactScore(
                                value = 'Medium', ), ), 
                        account = sailpoint.certifications.models.reviewableentitlement_account.reviewableentitlement_account(
                            native_identity = 'CN=Alison Ferguso', 
                            disabled = False, 
                            locked = False, 
                            id = '2c9180857182305e0171993737eb29e6', 
                            name = 'Alison Ferguso', 
                            created = '2020-04-20T20:11:05.067Z', 
                            modified = '2020-05-20T18:57:16.987Z', 
                            activity_insights = sailpoint.certifications.models.activity_insights.Activity Insights(
                                account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                                usage_days = 45, 
                                usage_days_state = 'COMPLETE', ), 
                            description = 'Account for Read/write to the company database', 
                            governance_group_id = '2c9180857182305e0171993737eb29e6', ), ), 
                    access_profile = sailpoint.certifications.models.reviewableaccessprofile.reviewableaccessprofile(
                        id = '2c91808a7190d06e01719938fcd20792', 
                        name = 'Employee-database-read-write', 
                        description = 'Collection of entitlements to read/write the employee database', 
                        privileged = False, 
                        cloud_governed = False, 
                        end_date = '2021-12-25T00:00Z', 
                        entitlements = [
                            sailpoint.certifications.models.reviewableentitlement.reviewableentitlement(
                                id = '2c918085718230600171993742c63558', 
                                name = 'CN=entitlement.bbb7c650', 
                                description = 'Gives read/write access to the company database', 
                                privileged = False, 
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
                                contains_data_access = True, )
                            ], 
                        created = '2021-01-01T22:32:58.104Z', 
                        modified = '2021-02-01T22:32:58.104Z', ), 
                    role = sailpoint.certifications.models.reviewablerole.reviewablerole(
                        id = '2c91808a7190d06e0171993907fd0794', 
                        name = 'Accounting-Employees', 
                        description = 'Role for members of the accounting department with the necessary Access Profiles', 
                        privileged = False, 
                        revocable = False, 
                        end_date = '2021-12-25T00:00Z', 
                        access_profiles = [
                            sailpoint.certifications.models.reviewableaccessprofile.reviewableaccessprofile(
                                id = '2c91808a7190d06e01719938fcd20792', 
                                name = 'Employee-database-read-write', 
                                description = 'Collection of entitlements to read/write the employee database', 
                                privileged = False, 
                                cloud_governed = False, 
                                end_date = '2021-12-25T00:00Z', 
                                created = '2021-01-01T22:32:58.104Z', 
                                modified = '2021-02-01T22:32:58.104Z', )
                            ], ), ),
identity_summary=sailpoint.certifications.models.certification_identity_summary.Certification Identity Summary(
                    id = '2c91808772a504f50172a9540e501ba7', 
                    name = 'Alison Ferguso', 
                    identity_id = '2c9180857182306001719937377a33de', 
                    completed = True, ),
id='ef38f94347e94562b5bb8424a56397d8',
completed=False,
new_access=False,
decision='APPROVE',
comments='This user still needs access to this source'
)

```
[[Back to top]](#) 

