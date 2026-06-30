---
id: v1-accountdeleterequestinput
title: Accountdeleterequestinput
pagination_label: Accountdeleterequestinput
sidebar_label: Accountdeleterequestinput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountdeleterequestinput', 'V1Accountdeleterequestinput'] 
slug: /tools/sdk/go/accountdeletionrequests/models/accountdeleterequestinput
tags: ['SDK', 'Software Development Kit', 'Accountdeleterequestinput', 'V1Accountdeleterequestinput']
---

# Accountdeleterequestinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to **string** | Reason for deleting the account. | [optional] 

## Methods

### NewAccountdeleterequestinput

`func NewAccountdeleterequestinput() *Accountdeleterequestinput`

NewAccountdeleterequestinput instantiates a new Accountdeleterequestinput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountdeleterequestinputWithDefaults

`func NewAccountdeleterequestinputWithDefaults() *Accountdeleterequestinput`

NewAccountdeleterequestinputWithDefaults instantiates a new Accountdeleterequestinput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *Accountdeleterequestinput) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Accountdeleterequestinput) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Accountdeleterequestinput) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Accountdeleterequestinput) HasComments() bool`

HasComments returns a boolean if a field has been set.


