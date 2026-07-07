---
id: v1-approvalinforesponse
title: Approvalinforesponse
pagination_label: Approvalinforesponse
sidebar_label: Approvalinforesponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalinforesponse', 'V1Approvalinforesponse'] 
slug: /tools/sdk/go/identityhistory/models/approvalinforesponse
tags: ['SDK', 'Software Development Kit', 'Approvalinforesponse', 'V1Approvalinforesponse']
---

# Approvalinforesponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | the id of approver | [optional] 
**Name** | Pointer to **string** | the name of approver | [optional] 
**Status** | Pointer to **string** | the status of the approval request | [optional] 

## Methods

### NewApprovalinforesponse

`func NewApprovalinforesponse() *Approvalinforesponse`

NewApprovalinforesponse instantiates a new Approvalinforesponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalinforesponseWithDefaults

`func NewApprovalinforesponseWithDefaults() *Approvalinforesponse`

NewApprovalinforesponseWithDefaults instantiates a new Approvalinforesponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approvalinforesponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approvalinforesponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approvalinforesponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approvalinforesponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Approvalinforesponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalinforesponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalinforesponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalinforesponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *Approvalinforesponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Approvalinforesponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Approvalinforesponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Approvalinforesponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


