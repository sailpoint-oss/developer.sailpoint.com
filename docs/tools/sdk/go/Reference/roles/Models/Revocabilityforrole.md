---
id: v1-revocabilityforrole
title: Revocabilityforrole
pagination_label: Revocabilityforrole
sidebar_label: Revocabilityforrole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Revocabilityforrole', 'V1Revocabilityforrole'] 
slug: /tools/sdk/go/roles/models/revocabilityforrole
tags: ['SDK', 'Software Development Kit', 'Revocabilityforrole', 'V1Revocabilityforrole']
---

# Revocabilityforrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentsRequired** | Pointer to **NullableBool** | Whether the requester of the containing object must provide comments justifying the request | [optional] [default to false]
**DenialCommentsRequired** | Pointer to **NullableBool** | Whether an approver must provide comments when denying the request | [optional] [default to false]
**ApprovalSchemes** | Pointer to [**[]Approvalschemeforrole**](approvalschemeforrole) | List describing the steps in approving the revocation request | [optional] 

## Methods

### NewRevocabilityforrole

`func NewRevocabilityforrole() *Revocabilityforrole`

NewRevocabilityforrole instantiates a new Revocabilityforrole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevocabilityforroleWithDefaults

`func NewRevocabilityforroleWithDefaults() *Revocabilityforrole`

NewRevocabilityforroleWithDefaults instantiates a new Revocabilityforrole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentsRequired

`func (o *Revocabilityforrole) GetCommentsRequired() bool`

GetCommentsRequired returns the CommentsRequired field if non-nil, zero value otherwise.

### GetCommentsRequiredOk

`func (o *Revocabilityforrole) GetCommentsRequiredOk() (*bool, bool)`

GetCommentsRequiredOk returns a tuple with the CommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentsRequired

`func (o *Revocabilityforrole) SetCommentsRequired(v bool)`

SetCommentsRequired sets CommentsRequired field to given value.

### HasCommentsRequired

`func (o *Revocabilityforrole) HasCommentsRequired() bool`

HasCommentsRequired returns a boolean if a field has been set.

### SetCommentsRequiredNil

`func (o *Revocabilityforrole) SetCommentsRequiredNil(b bool)`

 SetCommentsRequiredNil sets the value for CommentsRequired to be an explicit nil

### UnsetCommentsRequired
`func (o *Revocabilityforrole) UnsetCommentsRequired()`

UnsetCommentsRequired ensures that no value is present for CommentsRequired, not even an explicit nil
### GetDenialCommentsRequired

`func (o *Revocabilityforrole) GetDenialCommentsRequired() bool`

GetDenialCommentsRequired returns the DenialCommentsRequired field if non-nil, zero value otherwise.

### GetDenialCommentsRequiredOk

`func (o *Revocabilityforrole) GetDenialCommentsRequiredOk() (*bool, bool)`

GetDenialCommentsRequiredOk returns a tuple with the DenialCommentsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentsRequired

`func (o *Revocabilityforrole) SetDenialCommentsRequired(v bool)`

SetDenialCommentsRequired sets DenialCommentsRequired field to given value.

### HasDenialCommentsRequired

`func (o *Revocabilityforrole) HasDenialCommentsRequired() bool`

HasDenialCommentsRequired returns a boolean if a field has been set.

### SetDenialCommentsRequiredNil

`func (o *Revocabilityforrole) SetDenialCommentsRequiredNil(b bool)`

 SetDenialCommentsRequiredNil sets the value for DenialCommentsRequired to be an explicit nil

### UnsetDenialCommentsRequired
`func (o *Revocabilityforrole) UnsetDenialCommentsRequired()`

UnsetDenialCommentsRequired ensures that no value is present for DenialCommentsRequired, not even an explicit nil
### GetApprovalSchemes

`func (o *Revocabilityforrole) GetApprovalSchemes() []Approvalschemeforrole`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Revocabilityforrole) GetApprovalSchemesOk() (*[]Approvalschemeforrole, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Revocabilityforrole) SetApprovalSchemes(v []Approvalschemeforrole)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Revocabilityforrole) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.


