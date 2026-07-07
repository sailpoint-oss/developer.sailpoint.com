---
id: v1-accessrequested
title: Accessrequested
pagination_label: Accessrequested
sidebar_label: Accessrequested
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequested', 'V1Accessrequested'] 
slug: /tools/sdk/go/identityhistory/models/accessrequested
tags: ['SDK', 'Software Development Kit', 'Accessrequested', 'V1Accessrequested']
---

# Accessrequested

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequest** | [**Accessrequestresponse2**](accessrequestresponse2) |  | 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 

## Methods

### NewAccessrequested

`func NewAccessrequested(accessRequest Accessrequestresponse2, ) *Accessrequested`

NewAccessrequested instantiates a new Accessrequested object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestedWithDefaults

`func NewAccessrequestedWithDefaults() *Accessrequested`

NewAccessrequestedWithDefaults instantiates a new Accessrequested object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequest

`func (o *Accessrequested) GetAccessRequest() Accessrequestresponse2`

GetAccessRequest returns the AccessRequest field if non-nil, zero value otherwise.

### GetAccessRequestOk

`func (o *Accessrequested) GetAccessRequestOk() (*Accessrequestresponse2, bool)`

GetAccessRequestOk returns a tuple with the AccessRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequest

`func (o *Accessrequested) SetAccessRequest(v Accessrequestresponse2)`

SetAccessRequest sets AccessRequest field to given value.


### GetIdentityId

`func (o *Accessrequested) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessrequested) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessrequested) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accessrequested) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *Accessrequested) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Accessrequested) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Accessrequested) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Accessrequested) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *Accessrequested) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Accessrequested) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Accessrequested) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Accessrequested) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.


