---
id: revocability-for-role
title: RevocabilityForRole
pagination_label: RevocabilityForRole
sidebar_label: RevocabilityForRole
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RevocabilityForRole'] 
slug: /tools/sdk/go/v3/models/revocability-for-role
tags: ['SDK', 'Software Development Kit', 'RevocabilityForRole']
---

# RevocabilityForRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** |  Pointer to **NullableBool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to false]
**DenialCommentsRequired** |  Pointer to **NullableBool** | Whether an approver must provide comments when denying the request | [optional] [default to false]
**ApprovalSchemes** |  Pointer to [**[]ApprovalSchemeForRole**](approval-scheme-for-role) | List describing the steps in approving the revocation request | [optional] 

## Methods

### NewRevocabilityForRole

`func NewRevocabilityForRole() *RevocabilityForRole`

NewRevocabilityForRole instantiates a new RevocabilityForRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevocabilityForRoleWithDefaults

`func NewRevocabilityForRoleWithDefaults() *RevocabilityForRole`

NewRevocabilityForRoleWithDefaults instantiates a new RevocabilityForRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentsRequired

`func (o *RevocabilityForRole) GetCommentsRequired() bool`

GetCommentsRequired returns the CommentsRequired field if non-nil, zero value otherwise.

### GetCommentsRequiredOk

`func (o *RevocabilityForRole) GetCommentsRequiredOk() (*bool, bool)`

GetCommentsRequiredOk returns a tuple with the CommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentsRequired

`func (o *RevocabilityForRole) SetCommentsRequired(v bool)`

SetCommentsRequired sets CommentsRequired field to given value.

### HasCommentsRequired

`func (o *RevocabilityForRole) HasCommentsRequired() bool`

HasCommentsRequired returns a boolean if a field has been set.

### SetCommentsRequiredNil

`func (o *RevocabilityForRole) SetCommentsRequiredNil(b bool)`

 SetCommentsRequiredNil sets the value for CommentsRequired to be an explicit nil

### UnsetCommentsRequired
`func (o *RevocabilityForRole) UnsetCommentsRequired()`

UnsetCommentsRequired ensures that no value is present for CommentsRequired, not even an explicit nil
### GetDenialCommentsRequired

`func (o *RevocabilityForRole) GetDenialCommentsRequired() bool`

GetDenialCommentsRequired returns the DenialCommentsRequired field if non-nil, zero value otherwise.

### GetDenialCommentsRequiredOk

`func (o *RevocabilityForRole) GetDenialCommentsRequiredOk() (*bool, bool)`

GetDenialCommentsRequiredOk returns a tuple with the DenialCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentsRequired

`func (o *RevocabilityForRole) SetDenialCommentsRequired(v bool)`

SetDenialCommentsRequired sets DenialCommentsRequired field to given value.

### HasDenialCommentsRequired

`func (o *RevocabilityForRole) HasDenialCommentsRequired() bool`

HasDenialCommentsRequired returns a boolean if a field has been set.

### SetDenialCommentsRequiredNil

`func (o *RevocabilityForRole) SetDenialCommentsRequiredNil(b bool)`

 SetDenialCommentsRequiredNil sets the value for DenialCommentsRequired to be an explicit nil

### UnsetDenialCommentsRequired
`func (o *RevocabilityForRole) UnsetDenialCommentsRequired()`

UnsetDenialCommentsRequired ensures that no value is present for DenialCommentsRequired, not even an explicit nil
### GetApprovalSchemes

`func (o *RevocabilityForRole) GetApprovalSchemes() []ApprovalSchemeForRole`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *RevocabilityForRole) GetApprovalSchemesOk() (*[]ApprovalSchemeForRole, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *RevocabilityForRole) SetApprovalSchemes(v []ApprovalSchemeForRole)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *RevocabilityForRole) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.


[[Back to top]](#) 


