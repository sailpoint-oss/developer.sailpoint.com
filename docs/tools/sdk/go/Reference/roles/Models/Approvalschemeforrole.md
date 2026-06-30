---
id: v1-approvalschemeforrole
title: Approvalschemeforrole
pagination_label: Approvalschemeforrole
sidebar_label: Approvalschemeforrole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalschemeforrole', 'V1Approvalschemeforrole'] 
slug: /tools/sdk/go/roles/models/approvalschemeforrole
tags: ['SDK', 'Software Development Kit', 'Approvalschemeforrole', 'V1Approvalschemeforrole']
---

# Approvalschemeforrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** | Pointer to **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **OWNER**: Owner of the associated Role  **MANAGER**: Manager of the Identity making the request  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field. Workflow is exclusive to other types of approvals and License required.  **ALL_OWNERS**: All owners of the Role, including the primary owner and any secondary owners  **ADDITIONAL_OWNER**: An additional owner of the Role, the ID of which is specified by the **approverId** field  **ADDITIONAL_GOVERNANCE_GROUP**: An additional Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** | Pointer to **NullableString** | Id of the specific approver, used when approverType is GOVERNANCE_GROUP, WORKFLOW, or ADDITIONAL_GOVERNANCE_GROUP. | [optional] 

## Methods

### NewApprovalschemeforrole

`func NewApprovalschemeforrole() *Approvalschemeforrole`

NewApprovalschemeforrole instantiates a new Approvalschemeforrole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalschemeforroleWithDefaults

`func NewApprovalschemeforroleWithDefaults() *Approvalschemeforrole`

NewApprovalschemeforroleWithDefaults instantiates a new Approvalschemeforrole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproverType

`func (o *Approvalschemeforrole) GetApproverType() string`

GetApproverType returns the ApproverType field if non-nil, zero value otherwise.

### GetApproverTypeOk

`func (o *Approvalschemeforrole) GetApproverTypeOk() (*string, bool)`

GetApproverTypeOk returns a tuple with the ApproverType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverType

`func (o *Approvalschemeforrole) SetApproverType(v string)`

SetApproverType sets ApproverType field to given value.

### HasApproverType

`func (o *Approvalschemeforrole) HasApproverType() bool`

HasApproverType returns a boolean if a field has been set.

### GetApproverId

`func (o *Approvalschemeforrole) GetApproverId() string`

GetApproverId returns the ApproverId field if non-nil, zero value otherwise.

### GetApproverIdOk

`func (o *Approvalschemeforrole) GetApproverIdOk() (*string, bool)`

GetApproverIdOk returns a tuple with the ApproverId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverId

`func (o *Approvalschemeforrole) SetApproverId(v string)`

SetApproverId sets ApproverId field to given value.

### HasApproverId

`func (o *Approvalschemeforrole) HasApproverId() bool`

HasApproverId returns a boolean if a field has been set.

### SetApproverIdNil

`func (o *Approvalschemeforrole) SetApproverIdNil(b bool)`

 SetApproverIdNil sets the value for ApproverId to be an explicit nil

### UnsetApproverId
`func (o *Approvalschemeforrole) UnsetApproverId()`

UnsetApproverId ensures that no value is present for ApproverId, not even an explicit nil

