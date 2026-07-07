---
id: v1-identityownershipassociationdetails-association-details-inner
title: IdentityownershipassociationdetailsAssociationDetailsInner
pagination_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'V1IdentityownershipassociationdetailsAssociationDetailsInner'] 
slug: /tools/sdk/go/identities/models/identityownershipassociationdetails-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'V1IdentityownershipassociationdetailsAssociationDetailsInner']
---

# IdentityownershipassociationdetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | Pointer to **string** | association type with the identity | [optional] 
**Entities** | Pointer to [**[]Identityentities**](identityentities) | the specific resource this identity has ownership on | [optional] 

## Methods

### NewIdentityownershipassociationdetailsAssociationDetailsInner

`func NewIdentityownershipassociationdetailsAssociationDetailsInner() *IdentityownershipassociationdetailsAssociationDetailsInner`

NewIdentityownershipassociationdetailsAssociationDetailsInner instantiates a new IdentityownershipassociationdetailsAssociationDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityownershipassociationdetailsAssociationDetailsInnerWithDefaults

`func NewIdentityownershipassociationdetailsAssociationDetailsInnerWithDefaults() *IdentityownershipassociationdetailsAssociationDetailsInner`

NewIdentityownershipassociationdetailsAssociationDetailsInnerWithDefaults instantiates a new IdentityownershipassociationdetailsAssociationDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociationType

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) GetAssociationType() string`

GetAssociationType returns the AssociationType field if non-nil, zero value otherwise.

### GetAssociationTypeOk

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) GetAssociationTypeOk() (*string, bool)`

GetAssociationTypeOk returns a tuple with the AssociationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationType

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) SetAssociationType(v string)`

SetAssociationType sets AssociationType field to given value.

### HasAssociationType

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) HasAssociationType() bool`

HasAssociationType returns a boolean if a field has been set.

### GetEntities

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) GetEntities() []Identityentities`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) GetEntitiesOk() (*[]Identityentities, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) SetEntities(v []Identityentities)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *IdentityownershipassociationdetailsAssociationDetailsInner) HasEntities() bool`

HasEntities returns a boolean if a field has been set.


