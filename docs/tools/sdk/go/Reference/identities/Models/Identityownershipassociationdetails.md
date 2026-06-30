---
id: v1-identityownershipassociationdetails
title: Identityownershipassociationdetails
pagination_label: Identityownershipassociationdetails
sidebar_label: Identityownershipassociationdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityownershipassociationdetails', 'V1Identityownershipassociationdetails'] 
slug: /tools/sdk/go/identities/models/identityownershipassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityownershipassociationdetails', 'V1Identityownershipassociationdetails']
---

# Identityownershipassociationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationDetails** | Pointer to [**[]IdentityownershipassociationdetailsAssociationDetailsInner**](identityownershipassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Methods

### NewIdentityownershipassociationdetails

`func NewIdentityownershipassociationdetails() *Identityownershipassociationdetails`

NewIdentityownershipassociationdetails instantiates a new Identityownershipassociationdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityownershipassociationdetailsWithDefaults

`func NewIdentityownershipassociationdetailsWithDefaults() *Identityownershipassociationdetails`

NewIdentityownershipassociationdetailsWithDefaults instantiates a new Identityownershipassociationdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociationDetails

`func (o *Identityownershipassociationdetails) GetAssociationDetails() []IdentityownershipassociationdetailsAssociationDetailsInner`

GetAssociationDetails returns the AssociationDetails field if non-nil, zero value otherwise.

### GetAssociationDetailsOk

`func (o *Identityownershipassociationdetails) GetAssociationDetailsOk() (*[]IdentityownershipassociationdetailsAssociationDetailsInner, bool)`

GetAssociationDetailsOk returns a tuple with the AssociationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationDetails

`func (o *Identityownershipassociationdetails) SetAssociationDetails(v []IdentityownershipassociationdetailsAssociationDetailsInner)`

SetAssociationDetails sets AssociationDetails field to given value.

### HasAssociationDetails

`func (o *Identityownershipassociationdetails) HasAssociationDetails() bool`

HasAssociationDetails returns a boolean if a field has been set.


