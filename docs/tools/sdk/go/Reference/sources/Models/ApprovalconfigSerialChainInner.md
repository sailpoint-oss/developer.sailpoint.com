---
id: v1-approvalconfig-serial-chain-inner
title: ApprovalconfigSerialChainInner
pagination_label: ApprovalconfigSerialChainInner
sidebar_label: ApprovalconfigSerialChainInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigSerialChainInner', 'V1ApprovalconfigSerialChainInner'] 
slug: /tools/sdk/go/sources/models/approvalconfig-serial-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigSerialChainInner', 'V1ApprovalconfigSerialChainInner']
---

# ApprovalconfigSerialChainInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tier** | Pointer to **int64** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**IdentityId** | Pointer to **string** | Optional Identity ID of the type of identity defined in the 'identityType' field. | [optional] 
**IdentityType** | Pointer to **string** | Type of identityId in the serial chain. | [optional] 

## Methods

### NewApprovalconfigSerialChainInner

`func NewApprovalconfigSerialChainInner() *ApprovalconfigSerialChainInner`

NewApprovalconfigSerialChainInner instantiates a new ApprovalconfigSerialChainInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigSerialChainInnerWithDefaults

`func NewApprovalconfigSerialChainInnerWithDefaults() *ApprovalconfigSerialChainInner`

NewApprovalconfigSerialChainInnerWithDefaults instantiates a new ApprovalconfigSerialChainInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTier

`func (o *ApprovalconfigSerialChainInner) GetTier() int64`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *ApprovalconfigSerialChainInner) GetTierOk() (*int64, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *ApprovalconfigSerialChainInner) SetTier(v int64)`

SetTier sets Tier field to given value.

### HasTier

`func (o *ApprovalconfigSerialChainInner) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetIdentityId

`func (o *ApprovalconfigSerialChainInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *ApprovalconfigSerialChainInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *ApprovalconfigSerialChainInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *ApprovalconfigSerialChainInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityType

`func (o *ApprovalconfigSerialChainInner) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *ApprovalconfigSerialChainInner) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *ApprovalconfigSerialChainInner) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.

### HasIdentityType

`func (o *ApprovalconfigSerialChainInner) HasIdentityType() bool`

HasIdentityType returns a boolean if a field has been set.


