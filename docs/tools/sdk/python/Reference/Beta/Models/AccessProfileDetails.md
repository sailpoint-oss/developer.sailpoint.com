---
id: beta-access-profile-details
title: AccessProfileDetails
pagination_label: AccessProfileDetails
sidebar_label: AccessProfileDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileDetails', 'BetaAccessProfileDetails'] 
slug: /tools/sdk/python/beta/models/access-profile-details
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetails', 'BetaAccessProfileDetails']
---

# AccessProfileDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Access Profile | [optional] 
**name** | **str** | Name of the Access Profile | [optional] 
**description** | **str** | Information about the Access Profile | [optional] 
**created** | **datetime** | Date the Access Profile was created | [optional] 
**modified** | **datetime** | Date the Access Profile was last modified. | [optional] 
**disabled** | **bool** | Whether the Access Profile is enabled. | [optional] [default to True]
**requestable** | **bool** | Whether the Access Profile is requestable via access request. | [optional] [default to False]
**protected** | **bool** | Whether the Access Profile is protected. | [optional] [default to False]
**owner_id** | **str** | The owner ID of the Access Profile | [optional] 
**source_id** | **int** | The source ID of the Access Profile | [optional] 
**source_name** | **str** | The source name of the Access Profile | [optional] 
**app_id** | **int** | The source app ID of the Access Profile | [optional] 
**app_name** | **str** | The source app name of the Access Profile | [optional] 
**application_id** | **str** | The id of the application | [optional] 
**type** | **str** | The type of the access profile | [optional] 
**entitlements** | **[]str** | List of IDs of entitlements | [optional] 
**entitlement_count** | **int** | The number of entitlements in the access profile | [optional] 
**segments** | **[]str** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**approval_schemes** | **str** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**revoke_request_approval_schemes** | **str** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**request_comments_required** | **bool** | Whether the access profile require request comment for access request. | [optional] [default to False]
**denied_comments_required** | **bool** | Whether denied comment is required when access request is denied. | [optional] [default to False]
**account_selector** | [**AccessProfileDetailsAccountSelector**](access-profile-details-account-selector) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_profile_details import AccessProfileDetails

access_profile_details = AccessProfileDetails(
id='2c91808a7190d06e01719938fcd20792',
name='Employee-database-read-write',
description='Collection of entitlements to read/write the employee database',
created='2021-03-01T22:32:58.104Z',
modified='2021-03-02T20:22:28.104Z',
disabled=True,
requestable=True,
protected=False,
owner_id='9870808a7190d06e01719938fcd20792',
source_id=10360661,
source_name='AD Source',
app_id=10360661,
app_name='mail app',
application_id='edcb0951812949d085b60cd8bf35bc78',
type='source',
entitlements=[2c9180857725c14301772a93bb77242d, c9dc28e148a24d65b3ccb5fb8ca5ddd9],
entitlement_count=12,
segments=[f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a],
approval_schemes='accessProfileOwner',
revoke_request_approval_schemes='accessProfileOwner',
request_comments_required=True,
denied_comments_required=True,
account_selector=sailpoint.beta.models.access_profile_details_account_selector.AccessProfileDetails_accountSelector(
                    selectors = [
                        sailpoint.beta.models.selector.selector(
                            application_id = '2c91808874ff91550175097daaec161c"', 
                            account_match_config = sailpoint.beta.models.selector_account_match_config.selector_accountMatchConfig(
                                match_expression = sailpoint.beta.models.selector_account_match_config_match_expression.selector_accountMatchConfig_matchExpression(
                                    match_terms = [{name=, value=, op=null, container=true, and=false, children=[{name=businessCategory, value=Service, op=eq, container=false, and=false, children=null}]}], 
                                    and = True, ), ), )
                        ], )
)

```
[[Back to top]](#) 

