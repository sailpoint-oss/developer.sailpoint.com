---
id: v1-identitycompareresponse
title: Identitycompareresponse
pagination_label: Identitycompareresponse
sidebar_label: Identitycompareresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycompareresponse', 'V1Identitycompareresponse'] 
slug: /tools/sdk/go/identityhistory/models/identitycompareresponse
tags: ['SDK', 'Software Development Kit', 'Identitycompareresponse', 'V1Identitycompareresponse']
---

# Identitycompareresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItemDiff** | Pointer to **map[string]map[string]interface{}** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Methods

### NewIdentitycompareresponse

`func NewIdentitycompareresponse() *Identitycompareresponse`

NewIdentitycompareresponse instantiates a new Identitycompareresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycompareresponseWithDefaults

`func NewIdentitycompareresponseWithDefaults() *Identitycompareresponse`

NewIdentitycompareresponseWithDefaults instantiates a new Identitycompareresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItemDiff

`func (o *Identitycompareresponse) GetAccessItemDiff() map[string]map[string]interface{}`

GetAccessItemDiff returns the AccessItemDiff field if non-nil, zero value otherwise.

### GetAccessItemDiffOk

`func (o *Identitycompareresponse) GetAccessItemDiffOk() (*map[string]map[string]interface{}, bool)`

GetAccessItemDiffOk returns a tuple with the AccessItemDiff field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemDiff

`func (o *Identitycompareresponse) SetAccessItemDiff(v map[string]map[string]interface{})`

SetAccessItemDiff sets AccessItemDiff field to given value.

### HasAccessItemDiff

`func (o *Identitycompareresponse) HasAccessItemDiff() bool`

HasAccessItemDiff returns a boolean if a field has been set.


