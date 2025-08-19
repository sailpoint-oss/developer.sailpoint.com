---
id: v2024-identity-entitlement-details
title: IdentityEntitlementDetails
pagination_label: IdentityEntitlementDetails
sidebar_label: IdentityEntitlementDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityEntitlementDetails', 'V2024IdentityEntitlementDetails'] 
slug: /tools/sdk/go/v2024/models/identity-entitlement-details
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetails', 'V2024IdentityEntitlementDetails']
---

# IdentityEntitlementDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Id of Identity | [optional] 
**Entitlement** | Pointer to [**IdentityEntitlementDetailsEntitlementDto**](identity-entitlement-details-entitlement-dto) |  | [optional] 
**SourceId** | Pointer to **string** | Id of Source | [optional] 
**AccountTargets** | Pointer to [**[]IdentityEntitlementDetailsAccountTarget**](identity-entitlement-details-account-target) | A list of account targets on the identity provisioned with the requested entitlement. | [optional] 

## Methods

### NewIdentityEntitlementDetails

`func NewIdentityEntitlementDetails() *IdentityEntitlementDetails`

NewIdentityEntitlementDetails instantiates a new IdentityEntitlementDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityEntitlementDetailsWithDefaults

`func NewIdentityEntitlementDetailsWithDefaults() *IdentityEntitlementDetails`

NewIdentityEntitlementDetailsWithDefaults instantiates a new IdentityEntitlementDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *IdentityEntitlementDetails) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *IdentityEntitlementDetails) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *IdentityEntitlementDetails) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *IdentityEntitlementDetails) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEntitlement

`func (o *IdentityEntitlementDetails) GetEntitlement() IdentityEntitlementDetailsEntitlementDto`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *IdentityEntitlementDetails) GetEntitlementOk() (*IdentityEntitlementDetailsEntitlementDto, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *IdentityEntitlementDetails) SetEntitlement(v IdentityEntitlementDetailsEntitlementDto)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *IdentityEntitlementDetails) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetSourceId

`func (o *IdentityEntitlementDetails) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *IdentityEntitlementDetails) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *IdentityEntitlementDetails) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *IdentityEntitlementDetails) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAccountTargets

`func (o *IdentityEntitlementDetails) GetAccountTargets() []IdentityEntitlementDetailsAccountTarget`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *IdentityEntitlementDetails) GetAccountTargetsOk() (*[]IdentityEntitlementDetailsAccountTarget, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *IdentityEntitlementDetails) SetAccountTargets(v []IdentityEntitlementDetailsAccountTarget)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *IdentityEntitlementDetails) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.


