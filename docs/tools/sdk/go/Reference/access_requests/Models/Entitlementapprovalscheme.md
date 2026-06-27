---
id: v1-entitlementapprovalscheme
title: Entitlementapprovalscheme
pagination_label: Entitlementapprovalscheme
sidebar_label: Entitlementapprovalscheme
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementapprovalscheme', 'V1Entitlementapprovalscheme'] 
slug: /tools/sdk/go/accessrequests/models/entitlementapprovalscheme
tags: ['SDK', 'Software Development Kit', 'Entitlementapprovalscheme', 'V1Entitlementapprovalscheme']
---

# Entitlementapprovalscheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** | Pointer to **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field  **WORKFLOW**: A Workflow, the ID of which is specified by the **approverId** field, Workflows are exclusive to other types of approvals and License required.      | [optional] 
**ApproverId** | Pointer to **NullableString** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP or WORKFLOW | [optional] 

## Methods

### NewEntitlementapprovalscheme

`func NewEntitlementapprovalscheme() *Entitlementapprovalscheme`

NewEntitlementapprovalscheme instantiates a new Entitlementapprovalscheme object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementapprovalschemeWithDefaults

`func NewEntitlementapprovalschemeWithDefaults() *Entitlementapprovalscheme`

NewEntitlementapprovalschemeWithDefaults instantiates a new Entitlementapprovalscheme object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproverType

`func (o *Entitlementapprovalscheme) GetApproverType() string`

GetApproverType returns the ApproverType field if non-nil, zero value otherwise.

### GetApproverTypeOk

`func (o *Entitlementapprovalscheme) GetApproverTypeOk() (*string, bool)`

GetApproverTypeOk returns a tuple with the ApproverType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverType

`func (o *Entitlementapprovalscheme) SetApproverType(v string)`

SetApproverType sets ApproverType field to given value.

### HasApproverType

`func (o *Entitlementapprovalscheme) HasApproverType() bool`

HasApproverType returns a boolean if a field has been set.

### GetApproverId

`func (o *Entitlementapprovalscheme) GetApproverId() string`

GetApproverId returns the ApproverId field if non-nil, zero value otherwise.

### GetApproverIdOk

`func (o *Entitlementapprovalscheme) GetApproverIdOk() (*string, bool)`

GetApproverIdOk returns a tuple with the ApproverId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverId

`func (o *Entitlementapprovalscheme) SetApproverId(v string)`

SetApproverId sets ApproverId field to given value.

### HasApproverId

`func (o *Entitlementapprovalscheme) HasApproverId() bool`

HasApproverId returns a boolean if a field has been set.

### SetApproverIdNil

`func (o *Entitlementapprovalscheme) SetApproverIdNil(b bool)`

 SetApproverIdNil sets the value for ApproverId to be an explicit nil

### UnsetApproverId
`func (o *Entitlementapprovalscheme) UnsetApproverId()`

UnsetApproverId ensures that no value is present for ApproverId, not even an explicit nil

