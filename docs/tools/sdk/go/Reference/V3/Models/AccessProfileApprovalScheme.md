---
id: access-profile-approval-scheme
title: AccessProfileApprovalScheme
pagination_label: AccessProfileApprovalScheme
sidebar_label: AccessProfileApprovalScheme
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileApprovalScheme', 'AccessProfileApprovalScheme'] 
slug: /tools/sdk/go/v3/models/access-profile-approval-scheme
tags: ['SDK', 'Software Development Kit', 'AccessProfileApprovalScheme', 'AccessProfileApprovalScheme']
---

# AccessProfileApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** | Pointer to **string** | Describes the individual or group that is responsible for an approval step. These are the possible values: **APP_OWNER**: The owner of the Application  **OWNER**: Owner of the associated Access Profile or Role  **SOURCE_OWNER**: Owner of the Source associated with an Access Profile  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.    | [optional] 
**ApproverId** | Pointer to **NullableString** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP or WORKFLOW. | [optional] 

## Methods

### NewAccessProfileApprovalScheme

`func NewAccessProfileApprovalScheme() *AccessProfileApprovalScheme`

NewAccessProfileApprovalScheme instantiates a new AccessProfileApprovalScheme object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileApprovalSchemeWithDefaults

`func NewAccessProfileApprovalSchemeWithDefaults() *AccessProfileApprovalScheme`

NewAccessProfileApprovalSchemeWithDefaults instantiates a new AccessProfileApprovalScheme object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproverType

`func (o *AccessProfileApprovalScheme) GetApproverType() string`

GetApproverType returns the ApproverType field if non-nil, zero value otherwise.

### GetApproverTypeOk

`func (o *AccessProfileApprovalScheme) GetApproverTypeOk() (*string, bool)`

GetApproverTypeOk returns a tuple with the ApproverType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverType

`func (o *AccessProfileApprovalScheme) SetApproverType(v string)`

SetApproverType sets ApproverType field to given value.

### HasApproverType

`func (o *AccessProfileApprovalScheme) HasApproverType() bool`

HasApproverType returns a boolean if a field has been set.

### GetApproverId

`func (o *AccessProfileApprovalScheme) GetApproverId() string`

GetApproverId returns the ApproverId field if non-nil, zero value otherwise.

### GetApproverIdOk

`func (o *AccessProfileApprovalScheme) GetApproverIdOk() (*string, bool)`

GetApproverIdOk returns a tuple with the ApproverId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverId

`func (o *AccessProfileApprovalScheme) SetApproverId(v string)`

SetApproverId sets ApproverId field to given value.

### HasApproverId

`func (o *AccessProfileApprovalScheme) HasApproverId() bool`

HasApproverId returns a boolean if a field has been set.

### SetApproverIdNil

`func (o *AccessProfileApprovalScheme) SetApproverIdNil(b bool)`

 SetApproverIdNil sets the value for ApproverId to be an explicit nil

### UnsetApproverId
`func (o *AccessProfileApprovalScheme) UnsetApproverId()`

UnsetApproverId ensures that no value is present for ApproverId, not even an explicit nil

