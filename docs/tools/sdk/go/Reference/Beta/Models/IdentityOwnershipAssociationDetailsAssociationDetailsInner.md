---
id: beta-identity-ownership-association-details-association-details-inner
title: IdentityOwnershipAssociationDetailsAssociationDetailsInner
pagination_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner', 'BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/go/beta/models/identity-ownership-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner', 'BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner']
---

# IdentityOwnershipAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | Pointer to **string** | association type with the identity | [optional] 
**Entities** | Pointer to [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Methods

### NewIdentityOwnershipAssociationDetailsAssociationDetailsInner

`func NewIdentityOwnershipAssociationDetailsAssociationDetailsInner() *IdentityOwnershipAssociationDetailsAssociationDetailsInner`

NewIdentityOwnershipAssociationDetailsAssociationDetailsInner instantiates a new IdentityOwnershipAssociationDetailsAssociationDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityOwnershipAssociationDetailsAssociationDetailsInnerWithDefaults

`func NewIdentityOwnershipAssociationDetailsAssociationDetailsInnerWithDefaults() *IdentityOwnershipAssociationDetailsAssociationDetailsInner`

NewIdentityOwnershipAssociationDetailsAssociationDetailsInnerWithDefaults instantiates a new IdentityOwnershipAssociationDetailsAssociationDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociationType

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) GetAssociationType() string`

GetAssociationType returns the AssociationType field if non-nil, zero value otherwise.

### GetAssociationTypeOk

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) GetAssociationTypeOk() (*string, bool)`

GetAssociationTypeOk returns a tuple with the AssociationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociationType

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) SetAssociationType(v string)`

SetAssociationType sets AssociationType field to given value.

### HasAssociationType

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) HasAssociationType() bool`

HasAssociationType returns a boolean if a field has been set.

### GetEntities

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) GetEntities() []IdentityEntities`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) GetEntitiesOk() (*[]IdentityEntities, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) SetEntities(v []IdentityEntities)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *IdentityOwnershipAssociationDetailsAssociationDetailsInner) HasEntities() bool`

HasEntities returns a boolean if a field has been set.


