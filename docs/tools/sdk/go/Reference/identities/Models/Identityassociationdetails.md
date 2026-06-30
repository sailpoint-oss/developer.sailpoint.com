---
id: v1-identityassociationdetails
title: Identityassociationdetails
pagination_label: Identityassociationdetails
sidebar_label: Identityassociationdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityassociationdetails', 'V1Identityassociationdetails'] 
slug: /tools/sdk/go/identities/models/identityassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityassociationdetails', 'V1Identityassociationdetails']
---

# Identityassociationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | any additional context information of the http call result | [optional] 
**AssociationDetails** | Pointer to [**[]IdentityassociationdetailsAssociationDetailsInner**](identityassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Methods

### NewIdentityassociationdetails

`func NewIdentityassociationdetails() *Identityassociationdetails`

NewIdentityassociationdetails instantiates a new Identityassociationdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityassociationdetailsWithDefaults

`func NewIdentityassociationdetailsWithDefaults() *Identityassociationdetails`

NewIdentityassociationdetailsWithDefaults instantiates a new Identityassociationdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *Identityassociationdetails) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Identityassociationdetails) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Identityassociationdetails) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Identityassociationdetails) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetAssociationDetails

`func (o *Identityassociationdetails) GetAssociationDetails() []IdentityassociationdetailsAssociationDetailsInner`

GetAssociationDetails returns the AssociationDetails field if non-nil, zero value otherwise.

### GetAssociationDetailsOk

`func (o *Identityassociationdetails) GetAssociationDetailsOk() (*[]IdentityassociationdetailsAssociationDetailsInner, bool)`

GetAssociationDetailsOk returns a tuple with the AssociationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationDetails

`func (o *Identityassociationdetails) SetAssociationDetails(v []IdentityassociationdetailsAssociationDetailsInner)`

SetAssociationDetails sets AssociationDetails field to given value.

### HasAssociationDetails

`func (o *Identityassociationdetails) HasAssociationDetails() bool`

HasAssociationDetails returns a boolean if a field has been set.


