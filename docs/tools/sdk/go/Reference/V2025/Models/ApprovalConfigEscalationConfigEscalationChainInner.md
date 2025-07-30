---
id: v2025-approval-config-escalation-config-escalation-chain-inner
title: ApprovalConfigEscalationConfigEscalationChainInner
pagination_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_label: ApprovalConfigEscalationConfigEscalationChainInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner'] 
slug: /tools/sdk/go/v2025/models/approval-config-escalation-config-escalation-chain-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigEscalationConfigEscalationChainInner', 'V2025ApprovalConfigEscalationConfigEscalationChainInner']
---

# ApprovalConfigEscalationConfigEscalationChainInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChainId** | Pointer to **string** | ID of the escalation chain. | [optional] 
**Tier** | Pointer to **int64** | Starting at 1 defines the order in which the identities will get assigned | [optional] 
**IdentityId** | Pointer to **string** | Identity ID in the escalation chain. | [optional] 
**IdentityType** | Pointer to **string** | Type of identity in the escalation chain. | [optional] 

## Methods

### NewApprovalConfigEscalationConfigEscalationChainInner

`func NewApprovalConfigEscalationConfigEscalationChainInner() *ApprovalConfigEscalationConfigEscalationChainInner`

NewApprovalConfigEscalationConfigEscalationChainInner instantiates a new ApprovalConfigEscalationConfigEscalationChainInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigEscalationConfigEscalationChainInnerWithDefaults

`func NewApprovalConfigEscalationConfigEscalationChainInnerWithDefaults() *ApprovalConfigEscalationConfigEscalationChainInner`

NewApprovalConfigEscalationConfigEscalationChainInnerWithDefaults instantiates a new ApprovalConfigEscalationConfigEscalationChainInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChainId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetChainId() string`

GetChainId returns the ChainId field if non-nil, zero value otherwise.

### GetChainIdOk

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetChainIdOk() (*string, bool)`

GetChainIdOk returns a tuple with the ChainId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) SetChainId(v string)`

SetChainId sets ChainId field to given value.

### HasChainId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) HasChainId() bool`

HasChainId returns a boolean if a field has been set.

### GetTier

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetTier() int64`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetTierOk() (*int64, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) SetTier(v int64)`

SetTier sets Tier field to given value.

### HasTier

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetIdentityId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetIdentityType

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetIdentityType() string`

GetIdentityType returns the IdentityType field if non-nil, zero value otherwise.

### GetIdentityTypeOk

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) GetIdentityTypeOk() (*string, bool)`

GetIdentityTypeOk returns a tuple with the IdentityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityType

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) SetIdentityType(v string)`

SetIdentityType sets IdentityType field to given value.

### HasIdentityType

`func (o *ApprovalConfigEscalationConfigEscalationChainInner) HasIdentityType() bool`

HasIdentityType returns a boolean if a field has been set.


