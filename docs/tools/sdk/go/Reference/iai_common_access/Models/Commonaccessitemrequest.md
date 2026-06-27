---
id: v1-commonaccessitemrequest
title: Commonaccessitemrequest
pagination_label: Commonaccessitemrequest
sidebar_label: Commonaccessitemrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commonaccessitemrequest', 'V1Commonaccessitemrequest'] 
slug: /tools/sdk/go/iaicommonaccess/models/commonaccessitemrequest
tags: ['SDK', 'Software Development Kit', 'Commonaccessitemrequest', 'V1Commonaccessitemrequest']
---

# Commonaccessitemrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | Pointer to [**Commonaccessitemaccess**](commonaccessitemaccess) |  | [optional] 
**Status** | Pointer to [**Commonaccessitemstate**](commonaccessitemstate) |  | [optional] 

## Methods

### NewCommonaccessitemrequest

`func NewCommonaccessitemrequest() *Commonaccessitemrequest`

NewCommonaccessitemrequest instantiates a new Commonaccessitemrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommonaccessitemrequestWithDefaults

`func NewCommonaccessitemrequestWithDefaults() *Commonaccessitemrequest`

NewCommonaccessitemrequestWithDefaults instantiates a new Commonaccessitemrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *Commonaccessitemrequest) GetAccess() Commonaccessitemaccess`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *Commonaccessitemrequest) GetAccessOk() (*Commonaccessitemaccess, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *Commonaccessitemrequest) SetAccess(v Commonaccessitemaccess)`

SetAccess sets Access field to given value.

### HasAccess

`func (o *Commonaccessitemrequest) HasAccess() bool`

HasAccess returns a boolean if a field has been set.

### GetStatus

`func (o *Commonaccessitemrequest) GetStatus() Commonaccessitemstate`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Commonaccessitemrequest) GetStatusOk() (*Commonaccessitemstate, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Commonaccessitemrequest) SetStatus(v Commonaccessitemstate)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Commonaccessitemrequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


