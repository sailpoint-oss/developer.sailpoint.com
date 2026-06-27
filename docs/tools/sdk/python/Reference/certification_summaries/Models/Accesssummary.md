---
id: accesssummary
title: Accesssummary
pagination_label: Accesssummary
sidebar_label: Accesssummary
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accesssummary', 'Accesssummary'] 
slug: /tools/sdk/python/certification-summaries/models/accesssummary
tags: ['SDK', 'Software Development Kit', 'Accesssummary', 'Accesssummary']
---

# Accesssummary

An object holding the access that is being reviewed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**AccesssummaryAccess**](accesssummary-access) |  | [optional] 
**entitlement** | [**Reviewableentitlement**](reviewableentitlement) |  | [optional] 
**access_profile** | [**Reviewableaccessprofile**](reviewableaccessprofile) |  | [optional] 
**role** | [**Reviewablerole**](reviewablerole) |  | [optional] 
}

## Example

```python
from sailpoint.certification_summaries.models.accesssummary import Accesssummary

accesssummary = Accesssummary(
access=sailpoint.certification_summaries.models.accesssummary_access.accesssummary_access(
                    type = 'IDENTITY', 
                    id = '2c9180867160846801719932c5153fb7', 
                    name = 'Entitlement for Company Database', ),
entitlement=sailpoint.certification_summaries.models.reviewableentitlement.reviewableentitlement(
                    id = '2c918085718230600171993742c63558', 
                    name = 'CN=entitlement.bbb7c650', 
                    description = 'Gives read/write access to the company database', 
                    privileged = False, 
                    owner = sailpoint.certification_summaries.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
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
                    data_access = sailpoint.certification_summaries.models.data_access.Data Access(
                        policies = [
                            sailpoint.certification_summaries.models.dataaccess_policies_inner.dataaccess_policies_inner(
                                value = 'GDPR-20', )
                            ], 
                        categories = [
                            sailpoint.certification_summaries.models.dataaccess_categories_inner.dataaccess_categories_inner(
                                value = 'email-7', 
                                match_count = 10, )
                            ], 
                        impact_score = sailpoint.certification_summaries.models.dataaccess_impact_score.dataaccess_impactScore(
                            value = 'Medium', ), ), 
                    account = sailpoint.certification_summaries.models.reviewableentitlement_account.reviewableentitlement_account(
                        native_identity = 'CN=Alison Ferguso', 
                        disabled = False, 
                        locked = False, 
                        type = 'IDENTITY', 
                        id = '2c9180857182305e0171993737eb29e6', 
                        name = 'Alison Ferguso', 
                        created = '2020-04-20T20:11:05.067Z', 
                        modified = '2020-05-20T18:57:16.987Z', 
                        activity_insights = sailpoint.certification_summaries.models.activity_insights.Activity Insights(
                            account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                            usage_days = 45, 
                            usage_days_state = 'COMPLETE', ), 
                        description = 'Account for Read/write to the company database', 
                        governance_group_id = '2c9180857182305e0171993737eb29e6', ), ),
access_profile=sailpoint.certification_summaries.models.reviewableaccessprofile.reviewableaccessprofile(
                    id = '2c91808a7190d06e01719938fcd20792', 
                    name = 'Employee-database-read-write', 
                    description = 'Collection of entitlements to read/write the employee database', 
                    privileged = False, 
                    cloud_governed = False, 
                    end_date = '2021-12-25T00:00Z', 
                    owner = sailpoint.certification_summaries.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), 
                    entitlements = [
                        sailpoint.certification_summaries.models.reviewableentitlement.reviewableentitlement(
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
                            contains_data_access = True, 
                            data_access = sailpoint.certification_summaries.models.data_access.Data Access(
                                policies = [
                                    sailpoint.certification_summaries.models.dataaccess_policies_inner.dataaccess_policies_inner(
                                        value = 'GDPR-20', )
                                    ], 
                                categories = [
                                    sailpoint.certification_summaries.models.dataaccess_categories_inner.dataaccess_categories_inner(
                                        value = 'email-7', 
                                        match_count = 10, )
                                    ], 
                                impact_score = sailpoint.certification_summaries.models.dataaccess_impact_score.dataaccess_impactScore(
                                    value = 'Medium', ), ), 
                            account = sailpoint.certification_summaries.models.reviewableentitlement_account.reviewableentitlement_account(
                                native_identity = 'CN=Alison Ferguso', 
                                disabled = False, 
                                locked = False, 
                                type = 'IDENTITY', 
                                id = '2c9180857182305e0171993737eb29e6', 
                                name = 'Alison Ferguso', 
                                created = '2020-04-20T20:11:05.067Z', 
                                modified = '2020-05-20T18:57:16.987Z', 
                                activity_insights = sailpoint.certification_summaries.models.activity_insights.Activity Insights(
                                    account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                                    usage_days = 45, 
                                    usage_days_state = 'COMPLETE', ), 
                                description = 'Account for Read/write to the company database', 
                                governance_group_id = '2c9180857182305e0171993737eb29e6', ), )
                        ], 
                    created = '2021-01-01T22:32:58.104Z', 
                    modified = '2021-02-01T22:32:58.104Z', ),
role=sailpoint.certification_summaries.models.reviewablerole.reviewablerole(
                    id = '2c91808a7190d06e0171993907fd0794', 
                    name = 'Accounting-Employees', 
                    description = 'Role for members of the accounting department with the necessary Access Profiles', 
                    privileged = False, 
                    owner = sailpoint.certification_summaries.models.identity_reference_with_name_and_email.Identity Reference With Name And Email(
                        type = 'IDENTITY', 
                        id = '5168015d32f890ca15812c9180835d2e', 
                        name = 'Alison Ferguso', 
                        email = 'alison.ferguso@identitysoon.com', ), 
                    revocable = False, 
                    end_date = '2021-12-25T00:00Z', 
                    access_profiles = [
                        sailpoint.certification_summaries.models.reviewableaccessprofile.reviewableaccessprofile(
                            id = '2c91808a7190d06e01719938fcd20792', 
                            name = 'Employee-database-read-write', 
                            description = 'Collection of entitlements to read/write the employee database', 
                            privileged = False, 
                            cloud_governed = False, 
                            end_date = '2021-12-25T00:00Z', 
                            entitlements = [
                                sailpoint.certification_summaries.models.reviewableentitlement.reviewableentitlement(
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
                                    contains_data_access = True, 
                                    data_access = sailpoint.certification_summaries.models.data_access.Data Access(
                                        policies = [
                                            sailpoint.certification_summaries.models.dataaccess_policies_inner.dataaccess_policies_inner(
                                                value = 'GDPR-20', )
                                            ], 
                                        categories = [
                                            sailpoint.certification_summaries.models.dataaccess_categories_inner.dataaccess_categories_inner(
                                                value = 'email-7', 
                                                match_count = 10, )
                                            ], 
                                        impact_score = sailpoint.certification_summaries.models.dataaccess_impact_score.dataaccess_impactScore(
                                            value = 'Medium', ), ), 
                                    account = sailpoint.certification_summaries.models.reviewableentitlement_account.reviewableentitlement_account(
                                        native_identity = 'CN=Alison Ferguso', 
                                        disabled = False, 
                                        locked = False, 
                                        type = 'IDENTITY', 
                                        id = '2c9180857182305e0171993737eb29e6', 
                                        name = 'Alison Ferguso', 
                                        created = '2020-04-20T20:11:05.067Z', 
                                        modified = '2020-05-20T18:57:16.987Z', 
                                        activity_insights = sailpoint.certification_summaries.models.activity_insights.Activity Insights(
                                            account_id = 'c4ddd5421d8549f0abd309162cafd3b1', 
                                            usage_days = 45, 
                                            usage_days_state = 'COMPLETE', ), 
                                        description = 'Account for Read/write to the company database', 
                                        governance_group_id = '2c9180857182305e0171993737eb29e6', ), )
                                ], 
                            created = '2021-01-01T22:32:58.104Z', 
                            modified = '2021-02-01T22:32:58.104Z', )
                        ], 
                    entitlements = [
                        sailpoint.certification_summaries.models.reviewableentitlement.reviewableentitlement(
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
                        ], )
)

```
[[Back to top]](#) 

