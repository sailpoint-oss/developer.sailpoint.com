---
id: v1-approvalconfig-fallback-approver
title: ApprovalconfigFallbackApprover
pagination_label: ApprovalconfigFallbackApprover
sidebar_label: ApprovalconfigFallbackApprover
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigFallbackApprover', 'V1ApprovalconfigFallbackApprover'] 
slug: /tools/sdk/go/approvals/models/approvalconfig-fallback-approver
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigFallbackApprover', 'V1ApprovalconfigFallbackApprover']
---

# ApprovalconfigFallbackApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Optional Identity ID of the type of identity defined in the 'type' field. | [optional] 
**Type** | Pointer to **string** | Type of identityID for the fallback approver. | [optional] 

## Methods

### NewApprovalconfigFallbackApprover

`func NewApprovalconfigFallbackApprover() *ApprovalconfigFallbackApprover`

NewApprovalconfigFallbackApprover instantiates a new ApprovalconfigFallbackApprover object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigFallbackApproverWithDefaults

`func NewApprovalconfigFallbackApproverWithDefaults() *ApprovalconfigFallbackApprover`

NewApprovalconfigFallbackApproverWithDefaults instantiates a new ApprovalconfigFallbackApprover object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *ApprovalconfigFallbackApprover) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *ApprovalconfigFallbackApprover) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *ApprovalconfigFallbackApprover) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *ApprovalconfigFallbackApprover) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetType

`func (o *ApprovalconfigFallbackApprover) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalconfigFallbackApprover) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalconfigFallbackApprover) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalconfigFallbackApprover) HasType() bool`

HasType returns a boolean if a field has been set.


