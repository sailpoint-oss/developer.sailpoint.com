---
id: v2025-approval-config-serial-chain-inner
title: ApprovalConfigSerialChainInner
pagination_label: ApprovalConfigSerialChainInner
sidebar_label: ApprovalConfigSerialChainInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigSerialChainInner', 'V2025ApprovalConfigSerialChainInner'] 
slug: /tools/sdk/go/v2025/models/approval-config-serial-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigSerialChainInner', 'V2025ApprovalConfigSerialChainInner']
---

# ApprovalConfigSerialChainInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | Pointer to **string** | ID of the serial chain. | [optional] 
**Tier** | Pointer to **int64** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**IdentityId** | Pointer to **string** | Identity ID in the serial chain. | [optional] 
**IdentityType** | Pointer to **string** | Type of identity in the serial chain. | [optional] 

## Methods

### NewApprovalConfigSerialChainInner

`func NewApprovalConfigSerialChainInner() *ApprovalConfigSerialChainInner`

NewApprovalConfigSerialChainInner instantiates a new ApprovalConfigSerialChainInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigSerialChainInnerWithDefaults

`func NewApprovalConfigSerialChainInnerWithDefaults() *ApprovalConfigSerialChainInner`

NewApprovalConfigSerialChainInnerWithDefaults instantiates a new ApprovalConfigSerialChainInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainId

`func (o *ApprovalConfigSerialChainInner) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *ApprovalConfigSerialChainInner) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *ApprovalConfigSerialChainInner) SetChainId(v string)`

SetChainId sets ChainId field to given value.

### HasChainId

`func (o *ApprovalConfigSerialChainInner) HasChainId() bool`

HasChainId returns a boolean if a field has been set.

### GetTier

`func (o *ApprovalConfigSerialChainInner) GetTier() int64`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *ApprovalConfigSerialChainInner) GetTierOk() (*int64, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *ApprovalConfigSerialChainInner) SetTier(v int64)`

SetTier sets Tier field to given value.

### HasTier

`func (o *ApprovalConfigSerialChainInner) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetIdentityId

`func (o *ApprovalConfigSerialChainInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *ApprovalConfigSerialChainInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *ApprovalConfigSerialChainInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *ApprovalConfigSerialChainInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityType

`func (o *ApprovalConfigSerialChainInner) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *ApprovalConfigSerialChainInner) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *ApprovalConfigSerialChainInner) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.

### HasIdentityType

`func (o *ApprovalConfigSerialChainInner) HasIdentityType() bool`

HasIdentityType returns a boolean if a field has been set.


