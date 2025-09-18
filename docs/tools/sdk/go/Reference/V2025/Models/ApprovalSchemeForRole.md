---
id: v2025-approval-scheme-for-role
title: ApprovalSchemeForRole
pagination_label: ApprovalSchemeForRole
sidebar_label: ApprovalSchemeForRole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalSchemeForRole', 'V2025ApprovalSchemeForRole'] 
slug: /tools/sdk/go/v2025/models/approval-scheme-for-role
tags: ['SDK', 'Software Development Kit', 'ApprovalSchemeForRole', 'V2025ApprovalSchemeForRole']
---

# ApprovalSchemeForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** | Pointer to **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.  | [optional] 
**ApproverId** | Pointer to **NullableString** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP or WORKFLOW. | [optional] 

## Methods

### NewApprovalSchemeForRole

`func NewApprovalSchemeForRole() *ApprovalSchemeForRole`

NewApprovalSchemeForRole instantiates a new ApprovalSchemeForRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalSchemeForRoleWithDefaults

`func NewApprovalSchemeForRoleWithDefaults() *ApprovalSchemeForRole`

NewApprovalSchemeForRoleWithDefaults instantiates a new ApprovalSchemeForRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproverType

`func (o *ApprovalSchemeForRole) GetApproverType() string`

GetApproverType returns the ApproverType field if non-nil, zero value otherwise.

### GetApproverTypeOk

`func (o *ApprovalSchemeForRole) GetApproverTypeOk() (*string, bool)`

GetApproverTypeOk returns a tuple with the ApproverType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverType

`func (o *ApprovalSchemeForRole) SetApproverType(v string)`

SetApproverType sets ApproverType field to given value.

### HasApproverType

`func (o *ApprovalSchemeForRole) HasApproverType() bool`

HasApproverType returns a boolean if a field has been set.

### GetApproverId

`func (o *ApprovalSchemeForRole) GetApproverId() string`

GetApproverId returns the ApproverId field if non-nil, zero value otherwise.

### GetApproverIdOk

`func (o *ApprovalSchemeForRole) GetApproverIdOk() (*string, bool)`

GetApproverIdOk returns a tuple with the ApproverId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverId

`func (o *ApprovalSchemeForRole) SetApproverId(v string)`

SetApproverId sets ApproverId field to given value.

### HasApproverId

`func (o *ApprovalSchemeForRole) HasApproverId() bool`

HasApproverId returns a boolean if a field has been set.

### SetApproverIdNil

`func (o *ApprovalSchemeForRole) SetApproverIdNil(b bool)`

 SetApproverIdNil sets the value for ApproverId to be an explicit nil

### UnsetApproverId
`func (o *ApprovalSchemeForRole) UnsetApproverId()`

UnsetApproverId ensures that no value is present for ApproverId, not even an explicit nil

