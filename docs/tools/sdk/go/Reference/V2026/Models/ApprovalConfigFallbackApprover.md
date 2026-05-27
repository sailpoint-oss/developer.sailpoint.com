---
id: v2026-approval-config-fallback-approver
title: ApprovalConfigFallbackApprover
pagination_label: ApprovalConfigFallbackApprover
sidebar_label: ApprovalConfigFallbackApprover
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigFallbackApprover', 'V2026ApprovalConfigFallbackApprover'] 
slug: /tools/sdk/go/v2026/models/approval-config-fallback-approver
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigFallbackApprover', 'V2026ApprovalConfigFallbackApprover']
---

# ApprovalConfigFallbackApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityID** | Pointer to **string** | Optional Identity ID of the type of identity defined in the 'type' field. | [optional] 
**Type** | Pointer to **string** | Type of identityID for the fallback approver. | [optional] 

## Methods

### NewApprovalConfigFallbackApprover

`func NewApprovalConfigFallbackApprover() *ApprovalConfigFallbackApprover`

NewApprovalConfigFallbackApprover instantiates a new ApprovalConfigFallbackApprover object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigFallbackApproverWithDefaults

`func NewApprovalConfigFallbackApproverWithDefaults() *ApprovalConfigFallbackApprover`

NewApprovalConfigFallbackApproverWithDefaults instantiates a new ApprovalConfigFallbackApprover object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityID

`func (o *ApprovalConfigFallbackApprover) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *ApprovalConfigFallbackApprover) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *ApprovalConfigFallbackApprover) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *ApprovalConfigFallbackApprover) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetType

`func (o *ApprovalConfigFallbackApprover) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalConfigFallbackApprover) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalConfigFallbackApprover) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalConfigFallbackApprover) HasType() bool`

HasType returns a boolean if a field has been set.


