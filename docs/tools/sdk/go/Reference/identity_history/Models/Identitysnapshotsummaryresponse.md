---
id: v1-identitysnapshotsummaryresponse
title: Identitysnapshotsummaryresponse
pagination_label: Identitysnapshotsummaryresponse
sidebar_label: Identitysnapshotsummaryresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitysnapshotsummaryresponse', 'V1Identitysnapshotsummaryresponse'] 
slug: /tools/sdk/go/identityhistory/models/identitysnapshotsummaryresponse
tags: ['SDK', 'Software Development Kit', 'Identitysnapshotsummaryresponse', 'V1Identitysnapshotsummaryresponse']
---

# Identitysnapshotsummaryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | Pointer to **string** | the date when the identity record was created | [optional] 

## Methods

### NewIdentitysnapshotsummaryresponse

`func NewIdentitysnapshotsummaryresponse() *Identitysnapshotsummaryresponse`

NewIdentitysnapshotsummaryresponse instantiates a new Identitysnapshotsummaryresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitysnapshotsummaryresponseWithDefaults

`func NewIdentitysnapshotsummaryresponseWithDefaults() *Identitysnapshotsummaryresponse`

NewIdentitysnapshotsummaryresponseWithDefaults instantiates a new Identitysnapshotsummaryresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSnapshot

`func (o *Identitysnapshotsummaryresponse) GetSnapshot() string`

GetSnapshot returns the Snapshot field if non-nil, zero value otherwise.

### GetSnapshotOk

`func (o *Identitysnapshotsummaryresponse) GetSnapshotOk() (*string, bool)`

GetSnapshotOk returns a tuple with the Snapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshot

`func (o *Identitysnapshotsummaryresponse) SetSnapshot(v string)`

SetSnapshot sets Snapshot field to given value.

### HasSnapshot

`func (o *Identitysnapshotsummaryresponse) HasSnapshot() bool`

HasSnapshot returns a boolean if a field has been set.


