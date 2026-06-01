---
id: v2026-intel-identity-timestamps
title: IntelIdentityTimestamps
pagination_label: IntelIdentityTimestamps
sidebar_label: IntelIdentityTimestamps
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityTimestamps', 'V2026IntelIdentityTimestamps'] 
slug: /tools/sdk/go/v2026/models/intel-identity-timestamps
tags: ['SDK', 'Software Development Kit', 'IntelIdentityTimestamps', 'V2026IntelIdentityTimestamps']
---

# IntelIdentityTimestamps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **SailPointTime** | Timestamp when the identity record was first created in Identity Security Cloud. | 
**ModifiedAt** | **SailPointTime** | Timestamp when the identity record was last modified in Identity Security Cloud. | 

## Methods

### NewIntelIdentityTimestamps

`func NewIntelIdentityTimestamps(createdAt SailPointTime, modifiedAt SailPointTime, ) *IntelIdentityTimestamps`

NewIntelIdentityTimestamps instantiates a new IntelIdentityTimestamps object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityTimestampsWithDefaults

`func NewIntelIdentityTimestampsWithDefaults() *IntelIdentityTimestamps`

NewIntelIdentityTimestampsWithDefaults instantiates a new IntelIdentityTimestamps object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *IntelIdentityTimestamps) GetCreatedAt() SailPointTime`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *IntelIdentityTimestamps) GetCreatedAtOk() (*SailPointTime, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *IntelIdentityTimestamps) SetCreatedAt(v SailPointTime)`

SetCreatedAt sets CreatedAt field to given value.


### GetModifiedAt

`func (o *IntelIdentityTimestamps) GetModifiedAt() SailPointTime`

GetModifiedAt returns the ModifiedAt field if non-nil, zero value otherwise.

### GetModifiedAtOk

`func (o *IntelIdentityTimestamps) GetModifiedAtOk() (*SailPointTime, bool)`

GetModifiedAtOk returns a tuple with the ModifiedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifiedAt

`func (o *IntelIdentityTimestamps) SetModifiedAt(v SailPointTime)`

SetModifiedAt sets ModifiedAt field to given value.



