---
id: reviewableaccessprofile
title: Reviewableaccessprofile
pagination_label: Reviewableaccessprofile
sidebar_label: Reviewableaccessprofile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Reviewableaccessprofile', 'Reviewableaccessprofile'] 
slug: /tools/sdk/python/certifications/models/reviewableaccessprofile
tags: ['SDK', 'Software Development Kit', 'Reviewableaccessprofile', 'Reviewableaccessprofile']
---

# Reviewableaccessprofile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the Access Profile | [optional] 
**name** | **str** | Name of the Access Profile | [optional] 
**description** | **str** | Information about the Access Profile | [optional] 
**privileged** | **bool** | Indicates if the entitlement is a privileged entitlement | [optional] 
**cloud_governed** | **bool** | True if the entitlement is cloud governed | [optional] 
**end_date** | **datetime** | The date at which a user's access expires | [optional] 
**owner** | [**Identityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 
**entitlements** | [**[]Reviewableentitlement**](reviewableentitlement) | A list of entitlements associated with this Access Profile | [optional] 
**created** | **datetime** | Date the Access Profile was created. | [optional] 
**modified** | **datetime** | Date the Access Profile was last modified. | [optional] 
}

## Example

```python
from sailpoint.certifications.models.reviewableaccessprofile import Reviewableaccessprofile

reviewableaccessprofile = Reviewableaccessprofile(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
privileged=False,
cloud_governed=False,
end_date='2021-12-25T00:00Z',
owner=sailpoint.certifications.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
                    type = 'IDENTITY', 
                    id = '5168015d32f890ca15812c9180835d2e', 
                    name = 'Alison Ferguso', 
                    email = 'alison.ferguso@identitysoon.com', ),
entitlements=[
                    sailpoint.certifications.models.reviewableentitlement.reviewableentitlement(
                        id = '2c918085718230600171993742c63558', 
                        name = 'CN=entitlement.bbb7c650', 
                        description = 'Gives read/write access to the company database', 
                        privileged = False, 
                        owner = sailpoint.certifications.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
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
                            type = 'IDENTITY', 
                            id = '2c9180857182305e0171993737eb29e6', 
                            name = 'Alison Ferguso', 
                            created = '2020-04-20T20:11:05.067Z', 
                            modified = '2020-05-20T18:57:16.987Z', 
                            activity_insights = sailpoint.certifications.models.activity_insights.Activity Insights(
                                account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                                usage_days = 45, 
                                usage_days_state = 'COMPLETE', ), 
                            description = 'Account for Read/write to the company database', 
                            governance_group_id = '2c9180857182305e0171993737eb29e6', ), )
                    ],
created='2021-01-01T22:32:58.104Z',
modified='2021-02-01T22:32:58.104Z'
)

```
[[Back to top]](#) 

