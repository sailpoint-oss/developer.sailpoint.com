---
id: v2024-entitlement-approval-scheme
title: EntitlementApprovalScheme
pagination_label: EntitlementApprovalScheme
sidebar_label: EntitlementApprovalScheme
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementApprovalScheme', 'V2024EntitlementApprovalScheme'] 
slug: /tools/sdk/go/v2024/models/entitlement-approval-scheme
tags: ['SDK', 'Software Development Kit', 'EntitlementApprovalScheme', 'V2024EntitlementApprovalScheme']
---

# EntitlementApprovalScheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApproverType** | Pointer to **string** | Describes the individual or group that is responsible for an approval step. Values are as follows.  **ENTITLEMENT_OWNER**: Owner of the associated Entitlement  **SOURCE_OWNER**: Owner of the associated Source  **MANAGER**: Manager of the Identity for whom the request is being made  **GOVERNANCE_GROUP**: A Governance Group, the ID of which is specified by the **approverId** field | [optional] 
**ApproverId** | Pointer to **NullableString** | Id of the specific approver, used only when approverType is GOVERNANCE_GROUP | [optional] 

## Methods

### NewEntitlementApprovalScheme

`func NewEntitlementApprovalScheme() *EntitlementApprovalScheme`

NewEntitlementApprovalScheme instantiates a new EntitlementApprovalScheme object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementApprovalSchemeWithDefaults

`func NewEntitlementApprovalSchemeWithDefaults() *EntitlementApprovalScheme`

NewEntitlementApprovalSchemeWithDefaults instantiates a new EntitlementApprovalScheme object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApproverType

`func (o *EntitlementApprovalScheme) GetApproverType() string`

GetApproverType returns the ApproverType field if non-nil, zero value otherwise.

### GetApproverTypeOk

`func (o *EntitlementApprovalScheme) GetApproverTypeOk() (*string, bool)`

GetApproverTypeOk returns a tuple with the ApproverType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverType

`func (o *EntitlementApprovalScheme) SetApproverType(v string)`

SetApproverType sets ApproverType field to given value.

### HasApproverType

`func (o *EntitlementApprovalScheme) HasApproverType() bool`

HasApproverType returns a boolean if a field has been set.

### GetApproverId

`func (o *EntitlementApprovalScheme) GetApproverId() string`

GetApproverId returns the ApproverId field if non-nil, zero value otherwise.

### GetApproverIdOk

`func (o *EntitlementApprovalScheme) GetApproverIdOk() (*string, bool)`

GetApproverIdOk returns a tuple with the ApproverId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverId

`func (o *EntitlementApprovalScheme) SetApproverId(v string)`

SetApproverId sets ApproverId field to given value.

### HasApproverId

`func (o *EntitlementApprovalScheme) HasApproverId() bool`

HasApproverId returns a boolean if a field has been set.

### SetApproverIdNil

`func (o *EntitlementApprovalScheme) SetApproverIdNil(b bool)`

 SetApproverIdNil sets the value for ApproverId to be an explicit nil

### UnsetApproverId
`func (o *EntitlementApprovalScheme) UnsetApproverId()`

UnsetApproverId ensures that no value is present for ApproverId, not even an explicit nil

