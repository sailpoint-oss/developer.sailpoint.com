---
id: v1-revocability
title: Revocability
pagination_label: Revocability
sidebar_label: Revocability
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Revocability', 'V1Revocability'] 
slug: /tools/sdk/go/accessprofiles/models/revocability
tags: ['SDK', 'Software Development Kit', 'Revocability', 'V1Revocability']
---

# Revocability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]Accessprofileapprovalscheme**](accessprofileapprovalscheme) | List describing the steps involved in approving the revocation request. | [optional] 

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

`func (o *Revocability) GetApprovalSchemes() []Accessprofileapprovalscheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Revocability) GetApprovalSchemesOk() (*[]Accessprofileapprovalscheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Revocability) SetApprovalSchemes(v []Accessprofileapprovalscheme)`

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

