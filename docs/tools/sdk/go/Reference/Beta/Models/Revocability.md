---
id: beta-revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Revocability', 'BetaRevocability'] 
slug: /tools/sdk/go/beta/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'BetaRevocability']
---

# Revocability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]AccessProfileApprovalScheme**](access-profile-approval-scheme) | List describing the steps in approving the revocation request | [optional] 

## Methods

### NewRevocability

`func NewRevocability() *Revocability`

NewRevocability instantiates a new Revocability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevocabilityWithDefaults

`func NewRevocabilityWithDefaults() *Revocability`

NewRevocabilityWithDefaults instantiates a new Revocability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *Revocability) GetApprovalSchemes() []AccessProfileApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Revocability) GetApprovalSchemesOk() (*[]AccessProfileApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Revocability) SetApprovalSchemes(v []AccessProfileApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Revocability) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### SetApprovalSchemesNil

`func (o *Revocability) SetApprovalSchemesNil(b bool)`

 SetApprovalSchemesNil sets the value for ApprovalSchemes to be an explicit nil

### UnsetApprovalSchemes
`func (o *Revocability) UnsetApprovalSchemes()`

UnsetApprovalSchemes ensures that no value is present for ApprovalSchemes, not even an explicit nil

