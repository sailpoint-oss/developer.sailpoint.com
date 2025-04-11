---
id: v2024-identity-association-details
title: IdentityAssociationDetails
pagination_label: IdentityAssociationDetails
sidebar_label: IdentityAssociationDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAssociationDetails', 'V2024IdentityAssociationDetails'] 
slug: /tools/sdk/go/v2024/models/identity-association-details
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetails', 'V2024IdentityAssociationDetails']
---

# IdentityAssociationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | any additional context information of the http call result | [optional] 
**AssociationDetails** | Pointer to [**[]IdentityAssociationDetailsAssociationDetailsInner**](identity-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Methods

### NewIdentityAssociationDetails

`func NewIdentityAssociationDetails() *IdentityAssociationDetails`

NewIdentityAssociationDetails instantiates a new IdentityAssociationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAssociationDetailsWithDefaults

`func NewIdentityAssociationDetailsWithDefaults() *IdentityAssociationDetails`

NewIdentityAssociationDetailsWithDefaults instantiates a new IdentityAssociationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *IdentityAssociationDetails) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *IdentityAssociationDetails) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *IdentityAssociationDetails) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *IdentityAssociationDetails) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetAssociationDetails

`func (o *IdentityAssociationDetails) GetAssociationDetails() []IdentityAssociationDetailsAssociationDetailsInner`

GetAssociationDetails returns the AssociationDetails field if non-nil, zero value otherwise.

### GetAssociationDetailsOk

`func (o *IdentityAssociationDetails) GetAssociationDetailsOk() (*[]IdentityAssociationDetailsAssociationDetailsInner, bool)`

GetAssociationDetailsOk returns a tuple with the AssociationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationDetails

`func (o *IdentityAssociationDetails) SetAssociationDetails(v []IdentityAssociationDetailsAssociationDetailsInner)`

SetAssociationDetails sets AssociationDetails field to given value.

### HasAssociationDetails

`func (o *IdentityAssociationDetails) HasAssociationDetails() bool`

HasAssociationDetails returns a boolean if a field has been set.


