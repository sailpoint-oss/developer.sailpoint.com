---
id: trigger-example-input
title: TriggerExampleInput
pagination_label: TriggerExampleInput
sidebar_label: TriggerExampleInput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TriggerExampleInput', 'TriggerExampleInput'] 
slug: /tools/sdk/python/triggers/models/trigger-example-input
tags: ['SDK', 'Software Development Kit', 'TriggerExampleInput', 'TriggerExampleInput']
---

# TriggerExampleInput

An example of the JSON payload that will be sent by the trigger to the subscribed service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_id** | **str** | The unique ID of the access request. | [required]
**requested_for** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | [required]
**requested_items** | [**[]AccessrequestpreapprovalRequestedItemsInner**](accessrequestpreapproval-requested-items-inner) | Details of the access items being requested. | [required]
**requested_by** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | [required]
**requested_items_status** | [**[]AccessrequestpostapprovalRequestedItemsStatusInner**](accessrequestpostapproval-requested-items-status-inner) | Details on the outcome of each access item. | [required]
**source** | [**Accountsourcereference**](accountsourcereference) |  | [required]
**status** |  **Enum** [  'Success',    'Failed',    'Terminated' ] | The overall status of the collection. | [required]
**started** | **datetime** | The date and time when the account collection started. | [required]
**completed** | **datetime** | The date and time when the account collection finished. | [required]
**errors** | **[]str** | A list of any accumulated error messages that occurred during provisioning. | [required]
**warnings** | **[]str** | A list of any accumulated warning messages that occurred during provisioning. | [required]
**stats** | [**AccountscollectedforaggregationStats**](accountscollectedforaggregation-stats) |  | [required]
**identity** | [**IdentitydeletedIdentity**](identitydeleted-identity) |  | [required]
**account** | [**Accountv2**](accountv2) |  | [required]
**changes** | [**[]IdentityattributeschangedChangesInner**](identityattributeschanged-changes-inner) | A list of one or more identity attributes that changed on the identity. | [required]
**attributes** | **map[string]object** | The attributes of the account. The contents of attributes depends on the account schema for the source. | [required]
**entitlement_count** | **int** | The number of entitlements associated with this account. | [optional] 
**event** | [**AccountupdatedEvent**](accountupdated-event) |  | [required]
**account_change_types** | **[]str** | The types of changes that occurred to the account. | [required]
**single_value_attribute_changes** | [**[]MachineidentityupdatedSingleValueAttributeChangesInner**](machineidentityupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | [required]
**multi_value_attribute_changes** | [**[]AccountupdatedMultiValueAttributeChangesInner**](accountupdated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | [required]
**entitlement_changes** | [**[]AccountupdatedEntitlementChangesInner**](accountupdated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | [required]
**campaign** | [**CampaigngeneratedCampaign**](campaigngenerated-campaign) |  | [required]
**certification** | [**CertificationsignedoffCertification**](certificationsignedoff-certification) |  | [required]
**event_type** |  **Enum** [  'MACHINE_IDENTITY_DELETED' ] | Type of the event. | [required]
**machine_identity** | [**MachineidentitydeletedMachineIdentity**](machineidentitydeleted-machine-identity) |  | [required]
**machine_identity_change_types** | **[]str** | Types of changes that occurred to the machine identity. | [required]
**user_entitlement_changes** | [**MachineidentityupdatedUserEntitlementChanges**](machineidentityupdated-user-entitlement-changes) |  | [required]
**owner_changes** | [**MachineidentityupdatedOwnerChanges**](machineidentityupdated-owner-changes) |  | [required]
**tracking_number** | **str** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | [required]
**sources** | **str** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | [required]
**action** | **str** | Origin of where the provisioning request came from. | [optional] 
**recipient** | [**ProvisioningcompletedRecipient**](provisioningcompleted-recipient) |  | [required]
**requester** | [**ProvisioningcompletedRequester**](provisioningcompleted-requester) |  | [optional] 
**account_requests** | [**[]ProvisioningcompletedAccountRequestsInner**](provisioningcompleted-account-requests-inner) | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | [required]
**file_name** | **str** | A name for the report file. | [required]
**owner_email** | **str** | The email address of the identity that owns the saved search. | [required]
**owner_name** | **str** | The name of the identity that owns the saved search. | [required]
**query** | **str** | The search query that was used to generate the report. | [required]
**search_name** | **str** | The name of the saved search. | [required]
**search_results** | [**SavedsearchcompleteSearchResults**](savedsearchcomplete-search-results) |  | [required]
**signed_s3_url** | **str** | The Amazon S3 URL to download the report from. | [required]
**uuid** | **str** | Source unique identifier for the identity. UUID is generated by the source system. | [optional] 
**id** | **str** | The unique ID of the source. | [required]
**native_identifier** | **str** | Unique ID of the account on the source. | [required]
**source_id** | **str** | The ID of the source. | [required]
**source_name** | **str** | The name of the source. | [required]
**identity_id** | **str** | The ID of the identity that is correlated with this account. | [required]
**identity_name** | **str** | The name of the identity that is correlated with this account. | [required]
**name** | **str** | The user friendly name of the source. | [required]
**type** | **str** | The connection type of the source. | [required]
**created** | **datetime** | The date and time the status change occurred. | [required]
**connector** | **str** | The connector type used to connect to the source. | [required]
**actor** | [**SourceupdatedActor**](sourceupdated-actor) |  | [required]
**deleted** | **datetime** | The date and time the source was deleted. | [required]
**modified** | **datetime** | The date and time the source was modified. | [required]
**application** | [**VaclusterstatuschangeeventApplication**](vaclusterstatuschangeevent-application) |  | [required]
**health_check_result** | [**VaclusterstatuschangeeventHealthCheckResult**](vaclusterstatuschangeevent-health-check-result) |  | [required]
**previous_health_check_result** | [**VaclusterstatuschangeeventPreviousHealthCheckResult**](vaclusterstatuschangeevent-previous-health-check-result) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.trigger_example_input import TriggerExampleInput

trigger_example_input = TriggerExampleInput(
access_request_id='2c91808b6ef1d43e016efba0ce470904',
requested_for=[
                    sailpoint.triggers.models.accessitemrequestedfordto.accessitemrequestedfordto(
                        type = 'IDENTITY', 
                        id = '2c4180a46faadee4016fb4e018c20626', 
                        name = 'Robert Robinson', )
                    ],
requested_items=[
                    sailpoint.triggers.models.accessrequestpreapproval_requested_items_inner.accessrequestpreapproval_requestedItems_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access to do his job.', )
                    ],
requested_by=sailpoint.triggers.models.accessitemrequesterdto.accessitemrequesterdto(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
requested_items_status=[
                    sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner.accessrequestpostapproval_requestedItemsStatus_inner(
                        id = '2c91808b6ef1d43e016efba0ce470904', 
                        name = 'Engineering Access', 
                        description = 'Access to engineering database', 
                        type = 'ACCESS_PROFILE', 
                        operation = 'Add', 
                        comment = 'William needs this access to do his job.', 
                        client_metadata = {"applicationName":"My application"}, 
                        approval_info = [
                            sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner(
                                approval_comment = 'This access looks good.  Approved.', 
                                approval_decision = 'APPROVED', 
                                approver_name = 'Stephen.Austin', 
                                approver = sailpoint.triggers.models.accessrequestpostapproval_requested_items_status_inner_approval_info_inner_approver.accessrequestpostapproval_requestedItemsStatus_inner_approvalInfo_inner_approver(
                                    type = 'IDENTITY', ), )
                            ], )
                    ],
source=sailpoint.triggers.models.accountsourcereference.accountsourcereference(
                    id = '2c918082814e693601816e09471b29b6', 
                    name = 'Active Directory', 
                    alias = 'AD', 
                    owner = sailpoint.triggers.models.accountsourcereference_owner.accountsourcereference_owner(
                        id = 'owner-123', 
                        name = 'owner-name', ), 
                    governance_group = sailpoint.triggers.models.accountsourcereference_governance_group.accountsourcereference_governanceGroup(
                        id = 'group-456', 
                        name = 'governance-group-name', ), ),
status='Success',
started='2020-06-29T22:01:50.474Z',
completed='2020-06-29T22:02:04.090Z',
errors=[
                    'Connector AD Failed'
                    ],
warnings=[
                    'Notification Skipped due to invalid email'
                    ],
stats=sailpoint.triggers.models.accountscollectedforaggregation_stats.accountscollectedforaggregation_stats(
                    scanned = 200, 
                    unchanged = 190, 
                    changed = 6, 
                    added = 4, 
                    removed = 3, ),
identity=sailpoint.triggers.models.identitydeleted_identity.identitydeleted_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
account=sailpoint.triggers.models.accountv2.accountv2(
                    id = '2c9180835d2e5168015d32f890ca1581', 
                    name = 'john.doe', 
                    native_identity = 'CN=John Doe,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=acme,DC=com', 
                    uuid = 'b7264868-7201-415f-9118-b581d431c688', 
                    correlated = True, 
                    is_machine = False, 
                    origin = 'Active Directory', 
                    attributes = {"firstname":"John","lastname":"Doe"}, ),
changes=[
                    sailpoint.triggers.models.identityattributeschanged_changes_inner.identityattributeschanged_changes_inner(
                        attribute = 'department', 
                        old_value = sales, 
                        new_value = marketing, )
                    ],
attributes={firstname=John, lastname=Doe, email=john.doe@gmail.com, department=Sales, displayName=John Doe, created=2020-04-27T16:48:33.597Z, employeeNumber=E009, uid=E009, inactive=true, phone=null, identificationNumber=E009},
entitlement_count=0,
event=sailpoint.triggers.models.accountupdated_event.accountupdated_event(
                    type = 'ACCOUNT_UPDATED_V2', 
                    cause = 'AGGREGATION', ),
account_change_types=[
                    'ATTRIBUTES_CHANGED'
                    ],
single_value_attribute_changes=[
                    sailpoint.triggers.models.machineidentityupdated_single_value_attribute_changes_inner.machineidentityupdated_singleValueAttributeChanges_inner(
                        name = 'displayName', 
                        old_value = John Doe, 
                        new_value = John A. Doe, )
                    ],
multi_value_attribute_changes=[
                    sailpoint.triggers.models.accountupdated_multi_value_attribute_changes_inner.accountupdated_multiValueAttributeChanges_inner(
                        name = 'memberOf', 
                        added_values = ["CN=Sales,OU=Groups,DC=acme,DC=com","CN=AllEmployees,OU=Groups,DC=acme,DC=com"], 
                        removed_values = ["CN=AllEmployees,OU=Groups,DC=acme,DC=com","CN=Contractors,OU=Groups,DC=acme,DC=com"], )
                    ],
entitlement_changes=[
                    sailpoint.triggers.models.accountupdated_entitlement_changes_inner.accountupdated_entitlementChanges_inner(
                        attribute_name = 'roles', 
                        added = [{"id":"2c9180835d2e5168015d32f890ca1581","name":"Admin","owner":{"id":"2c9180835d2e5168015d32f890ca1581","name":"Owner Name","type":"Primary"},"value":"Admin"},{"id":"2c9180835d2e5168015d32f890ca1582","name":"User","owner":{"id":"2c9180835d2e5168015d32f890ca1582","name":"Owner Name 2","type":"Secondary"},"value":"User"}], 
                        removed = [{"id":"2c9180835d2e5168015d32f890ca1583","name":"Group","owner":{"id":"2c9180835d2e5168015d32f890ca1583","name":"Owner Name 3","type":"Primary"},"value":"Group"}], )
                    ],
campaign=sailpoint.triggers.models.campaigngenerated_campaign.campaigngenerated_campaign(
                    id = '2c91808576f886190176f88cac5a0010', 
                    name = 'Manager Access Campaign', 
                    description = 'Audit access for all employees.', 
                    created = '2021-02-16T03:04:45.815Z', 
                    modified = '2021-02-17T03:04:45.815Z', 
                    deadline = '2021-02-18T03:04:45.815Z', 
                    type = 'MANAGER', 
                    campaign_owner = sailpoint.triggers.models.campaigngenerated_campaign_campaign_owner.campaigngenerated_campaign_campaignOwner(
                        id = '37f080867702c1910177031320c40n27', 
                        display_name = 'John Snow', 
                        email = 'john.snow@example.com', ), 
                    status = 'STAGED', ),
certification=sailpoint.triggers.models.certificationsignedoff_certification.certificationsignedoff_certification(
                    id = '2c91808576f886190176f88caf0d0067', 
                    name = 'Manager Access Review for Alice Baker', 
                    created = '2020-02-16T03:04:45.815Z', 
                    modified = '2020-02-16T03:06:45.815Z', ),
event_type='MACHINE_IDENTITY_DELETED',
machine_identity=sailpoint.triggers.models.machineidentitydeleted_machine_identity.machineidentitydeleted_machineIdentity(
                    id = '8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6', 
                    name = 'TestName', 
                    created = '2025-08-08T12:42:21.491666Z', 
                    modified = '2025-09-01T06:36:54.401476Z', 
                    business_application = 'MyBusinessApplication2', 
                    description = 'test description event', 
                    attributes = {"botUserId":"005KV00000BLoMCYA1"}, 
                    subtype = 'AI Agent', 
                    owners = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], 
                    source_id = 'c0201251a6ce4d268aba536cdd60a7f2', 
                    uuid = 'f5dd23fe-3414-42b7-bb1c-869400ad7a10', 
                    native_identity = 'abc:123:dddd1', 
                    manually_edited = True, 
                    manually_created = True, 
                    dataset_id = 'agentforce:agents', 
                    source = {"type":"SOURCE","id":"c0201251a6ce4d268aba536cdd60a7f2","name":"IdentityNow"}, 
                    user_entitlements = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], 
                    exists_on_source = 'NOT_APPLICABLE', ),
machine_identity_change_types=[ATTRIBUTES_CHANGED, USER_ENTITLEMENTS_ADDED, USER_ENTITLEMENTS_REMOVED, OWNERS_ADDED, OWNERS_REMOVED],
user_entitlement_changes=sailpoint.triggers.models.machineidentityupdated_user_entitlement_changes.machineidentityupdated_userEntitlementChanges(
                    attribute_name = 'userEntitlements', 
                    added = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], 
                    removed = [
                        {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                        ], ),
owner_changes=sailpoint.triggers.models.machineidentityupdated_owner_changes.machineidentityupdated_ownerChanges(
                    attribute_name = 'owners', 
                    added = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], 
                    removed = [
                        {"type":"IDENTITY","id":"84d8c1b819144608b8b8bc3b84ddbb7b","name":"Jerrie admin3cf084","isPrimary":true}
                        ], ),
tracking_number='4b4d982dddff4267ab12f0f1e72b5a6d',
sources='Corp AD, Corp LDAP, Corp Salesforce',
action='IdentityRefresh',
recipient=sailpoint.triggers.models.provisioningcompleted_recipient.provisioningcompleted_recipient(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
requester=sailpoint.triggers.models.provisioningcompleted_requester.provisioningcompleted_requester(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
account_requests=[
                    sailpoint.triggers.models.provisioningcompleted_account_requests_inner.provisioningcompleted_accountRequests_inner(
                        source = sailpoint.triggers.models.provisioningcompleted_account_requests_inner_source.provisioningcompleted_accountRequests_inner_source(
                            id = '4e4d982dddff4267ab12f0f1e72b5a6d', 
                            type = 'SOURCE', 
                            name = 'Corporate Active Directory', ), 
                        account_id = 'CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com', 
                        account_operation = 'Modify', 
                        provisioning_result = 'SUCCESS', 
                        provisioning_target = 'Corp AD', 
                        ticket_id = '72619262', 
                        attribute_requests = [
                            sailpoint.triggers.models.provisioningcompleted_account_requests_inner_attribute_requests_inner.provisioningcompleted_accountRequests_inner_attributeRequests_inner(
                                attribute_name = 'memberOf', 
                                attribute_value = 'CN=jedi,DC=starwars,DC=com', 
                                operation = 'Add', )
                            ], )
                    ],
file_name='Modified.zip',
owner_email='test@sailpoint.com',
owner_name='Cloud Support',
query='modified:[now-7y/d TO now]',
search_name='Modified Activity',
search_results=sailpoint.triggers.models.savedsearchcomplete_search_results.savedsearchcomplete_searchResults(
                    account = sailpoint.triggers.models.savedsearchcomplete_search_results_account.savedsearchcomplete_searchResults_Account(
                        count = '3', 
                        noun = 'accounts', 
                        preview = [
                            []
                            ], ), 
                    entitlement = sailpoint.triggers.models.savedsearchcomplete_search_results_entitlement.savedsearchcomplete_searchResults_Entitlement(
                        count = '2', 
                        noun = 'entitlements', 
                        preview = [
                            []
                            ], ), 
                    identity = sailpoint.triggers.models.savedsearchcomplete_search_results_identity.savedsearchcomplete_searchResults_Identity(
                        count = '2', 
                        noun = 'identities', 
                        preview = [
                            []
                            ], ), ),
signed_s3_url='https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc',
uuid='b7264868-7201-415f-9118-b581d431c688',
id='2c9180866166b5b0016167c32ef31a66',
native_identifier='E009',
source_id='2c918082814e693601816e09471b29b6',
source_name='Active Directory',
identity_id='ee769173319b41d19ccec6c235423237b',
identity_name='john.doe',
name='Corporate Active Directory',
type='DIRECT_CONNECT',
created='2020-06-29T22:01:50.474Z',
connector='active-directory',
actor=sailpoint.triggers.models.sourceupdated_actor.sourceupdated_actor(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
deleted='2021-03-29T22:01:50.474Z',
modified='2021-03-29T22:01:50.474Z',
application=sailpoint.triggers.models.vaclusterstatuschangeevent_application.vaclusterstatuschangeevent_application(
                    id = '2c9180866166b5b0016167c32ef31a66', 
                    name = 'Production VA Cluster', 
                    attributes = { }, ),
health_check_result=sailpoint.triggers.models.vaclusterstatuschangeevent_health_check_result.vaclusterstatuschangeevent_healthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = 'Succeeded', ),
previous_health_check_result=sailpoint.triggers.models.vaclusterstatuschangeevent_previous_health_check_result.vaclusterstatuschangeevent_previousHealthCheckResult(
                    message = 'Test Connection failed with exception. Error message - java.lang Exception', 
                    result_type = 'SOURCE_STATE_ERROR_CLUSTER', 
                    status = 'Failed', )
)

```
[[Back to top]](#) 

