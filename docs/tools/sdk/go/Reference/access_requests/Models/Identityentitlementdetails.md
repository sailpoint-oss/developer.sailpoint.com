---
id: v1-identityentitlementdetails
title: Identityentitlementdetails
pagination_label: Identityentitlementdetails
sidebar_label: Identityentitlementdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityentitlementdetails', 'V1Identityentitlementdetails'] 
slug: /tools/sdk/go/accessrequests/models/identityentitlementdetails
tags: ['SDK', 'Software Development Kit', 'Identityentitlementdetails', 'V1Identityentitlementdetails']
---

# Identityentitlementdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | Pointer to **string** | Id of Identity | [optional] 
**Entitlement** | Pointer to [**Identityentitlementdetailsentitlementdto**](identityentitlementdetailsentitlementdto) |  | [optional] 
**SourceId** | Pointer to **string** | Id of Source | [optional] 
**AccountTargets** | Pointer to [**[]Identityentitlementdetailsaccounttarget**](identityentitlementdetailsaccounttarget) | A list of account targets on the identity provisioned with the requested entitlement. | [optional] 

## Methods

### NewIdentityentitlementdetails

`func NewIdentityentitlementdetails() *Identityentitlementdetails`

NewIdentityentitlementdetails instantiates a new Identityentitlementdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityentitlementdetailsWithDefaults

`func NewIdentityentitlementdetailsWithDefaults() *Identityentitlementdetails`

NewIdentityentitlementdetailsWithDefaults instantiates a new Identityentitlementdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Identityentitlementdetails) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Identityentitlementdetails) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Identityentitlementdetails) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Identityentitlementdetails) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEntitlement

`func (o *Identityentitlementdetails) GetEntitlement() Identityentitlementdetailsentitlementdto`

GetEntitlement returns the Entitlement field if non-nil, zero value otherwise.

### GetEntitlementOk

`func (o *Identityentitlementdetails) GetEntitlementOk() (*Identityentitlementdetailsentitlementdto, bool)`

GetEntitlementOk returns a tuple with the Entitlement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlement

`func (o *Identityentitlementdetails) SetEntitlement(v Identityentitlementdetailsentitlementdto)`

SetEntitlement sets Entitlement field to given value.

### HasEntitlement

`func (o *Identityentitlementdetails) HasEntitlement() bool`

HasEntitlement returns a boolean if a field has been set.

### GetSourceId

`func (o *Identityentitlementdetails) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Identityentitlementdetails) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Identityentitlementdetails) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Identityentitlementdetails) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetAccountTargets

`func (o *Identityentitlementdetails) GetAccountTargets() []Identityentitlementdetailsaccounttarget`

GetAccountTargets returns the AccountTargets field if non-nil, zero value otherwise.

### GetAccountTargetsOk

`func (o *Identityentitlementdetails) GetAccountTargetsOk() (*[]Identityentitlementdetailsaccounttarget, bool)`

GetAccountTargetsOk returns a tuple with the AccountTargets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTargets

`func (o *Identityentitlementdetails) SetAccountTargets(v []Identityentitlementdetailsaccounttarget)`

SetAccountTargets sets AccountTargets field to given value.

### HasAccountTargets

`func (o *Identityentitlementdetails) HasAccountTargets() bool`

HasAccountTargets returns a boolean if a field has been set.


