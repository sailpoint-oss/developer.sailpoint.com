---
id: v1-sedapprovalstatus
title: Sedapprovalstatus
pagination_label: Sedapprovalstatus
sidebar_label: Sedapprovalstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sedapprovalstatus', 'V1Sedapprovalstatus'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/sedapprovalstatus
tags: ['SDK', 'Software Development Kit', 'Sedapprovalstatus', 'V1Sedapprovalstatus']
---

# Sedapprovalstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedReason** | Pointer to **string** | failed reason will be display if status is failed | [optional] 
**Id** | Pointer to **string** | Sed id | [optional] 
**Status** | Pointer to **string** | SUCCESS | FAILED | [optional] 

## Methods

### NewSedapprovalstatus

`func NewSedapprovalstatus() *Sedapprovalstatus`

NewSedapprovalstatus instantiates a new Sedapprovalstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedapprovalstatusWithDefaults

`func NewSedapprovalstatusWithDefaults() *Sedapprovalstatus`

NewSedapprovalstatusWithDefaults instantiates a new Sedapprovalstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFailedReason

`func (o *Sedapprovalstatus) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *Sedapprovalstatus) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *Sedapprovalstatus) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *Sedapprovalstatus) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### GetId

`func (o *Sedapprovalstatus) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sedapprovalstatus) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sedapprovalstatus) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sedapprovalstatus) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *Sedapprovalstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sedapprovalstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sedapprovalstatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Sedapprovalstatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


