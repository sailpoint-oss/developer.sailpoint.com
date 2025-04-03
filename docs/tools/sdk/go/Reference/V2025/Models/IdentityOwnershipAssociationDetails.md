---
id: v2025-identity-ownership-association-details
title: IdentityOwnershipAssociationDetails
pagination_label: IdentityOwnershipAssociationDetails
sidebar_label: IdentityOwnershipAssociationDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityOwnershipAssociationDetails', 'V2025IdentityOwnershipAssociationDetails'] 
slug: /tools/sdk/go/v2025/models/identity-ownership-association-details
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetails', 'V2025IdentityOwnershipAssociationDetails']
---

# IdentityOwnershipAssociationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationDetails** | Pointer to [**[]IdentityOwnershipAssociationDetailsAssociationDetailsInner**](identity-ownership-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Methods

### NewIdentityOwnershipAssociationDetails

`func NewIdentityOwnershipAssociationDetails() *IdentityOwnershipAssociationDetails`

NewIdentityOwnershipAssociationDetails instantiates a new IdentityOwnershipAssociationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityOwnershipAssociationDetailsWithDefaults

`func NewIdentityOwnershipAssociationDetailsWithDefaults() *IdentityOwnershipAssociationDetails`

NewIdentityOwnershipAssociationDetailsWithDefaults instantiates a new IdentityOwnershipAssociationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociationDetails

`func (o *IdentityOwnershipAssociationDetails) GetAssociationDetails() []IdentityOwnershipAssociationDetailsAssociationDetailsInner`

GetAssociationDetails returns the AssociationDetails field if non-nil, zero value otherwise.

### GetAssociationDetailsOk

`func (o *IdentityOwnershipAssociationDetails) GetAssociationDetailsOk() (*[]IdentityOwnershipAssociationDetailsAssociationDetailsInner, bool)`

GetAssociationDetailsOk returns a tuple with the AssociationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationDetails

`func (o *IdentityOwnershipAssociationDetails) SetAssociationDetails(v []IdentityOwnershipAssociationDetailsAssociationDetailsInner)`

SetAssociationDetails sets AssociationDetails field to given value.

### HasAssociationDetails

`func (o *IdentityOwnershipAssociationDetails) HasAssociationDetails() bool`

HasAssociationDetails returns a boolean if a field has been set.


