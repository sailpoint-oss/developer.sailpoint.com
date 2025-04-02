---
id: identity-snapshot-summary-response
title: IdentitySnapshotSummaryResponse
pagination_label: IdentitySnapshotSummaryResponse
sidebar_label: IdentitySnapshotSummaryResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitySnapshotSummaryResponse', 'IdentitySnapshotSummaryResponse'] 
slug: /tools/sdk/go//models/identity-snapshot-summary-response
tags: ['SDK', 'Software Development Kit', 'IdentitySnapshotSummaryResponse', 'IdentitySnapshotSummaryResponse']
---

# IdentitySnapshotSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | Pointer to **string** | the date when the identity record was created | [optional] 

## Methods

### NewIdentitySnapshotSummaryResponse

`func NewIdentitySnapshotSummaryResponse() *IdentitySnapshotSummaryResponse`

NewIdentitySnapshotSummaryResponse instantiates a new IdentitySnapshotSummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitySnapshotSummaryResponseWithDefaults

`func NewIdentitySnapshotSummaryResponseWithDefaults() *IdentitySnapshotSummaryResponse`

NewIdentitySnapshotSummaryResponseWithDefaults instantiates a new IdentitySnapshotSummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSnapshot

`func (o *IdentitySnapshotSummaryResponse) GetSnapshot() string`

GetSnapshot returns the Snapshot field if non-nil, zero value otherwise.

### GetSnapshotOk

`func (o *IdentitySnapshotSummaryResponse) GetSnapshotOk() (*string, bool)`

GetSnapshotOk returns a tuple with the Snapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshot

`func (o *IdentitySnapshotSummaryResponse) SetSnapshot(v string)`

SetSnapshot sets Snapshot field to given value.

### HasSnapshot

`func (o *IdentitySnapshotSummaryResponse) HasSnapshot() bool`

HasSnapshot returns a boolean if a field has been set.


