---
id: v1-bulkidentitiesaccountsresponse
title: Bulkidentitiesaccountsresponse
pagination_label: Bulkidentitiesaccountsresponse
sidebar_label: Bulkidentitiesaccountsresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkidentitiesaccountsresponse', 'V1Bulkidentitiesaccountsresponse'] 
slug: /tools/sdk/go/accounts/models/bulkidentitiesaccountsresponse
tags: ['SDK', 'Software Development Kit', 'Bulkidentitiesaccountsresponse', 'V1Bulkidentitiesaccountsresponse']
---

# Bulkidentitiesaccountsresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of bulk request item. | [optional] 
**StatusCode** | Pointer to **int32** | Response status value. | [optional] 
**Message** | Pointer to **string** | Status containing additional context information about failures. | [optional] 

## Methods

### NewBulkidentitiesaccountsresponse

`func NewBulkidentitiesaccountsresponse() *Bulkidentitiesaccountsresponse`

NewBulkidentitiesaccountsresponse instantiates a new Bulkidentitiesaccountsresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkidentitiesaccountsresponseWithDefaults

`func NewBulkidentitiesaccountsresponseWithDefaults() *Bulkidentitiesaccountsresponse`

NewBulkidentitiesaccountsresponseWithDefaults instantiates a new Bulkidentitiesaccountsresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Bulkidentitiesaccountsresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Bulkidentitiesaccountsresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Bulkidentitiesaccountsresponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Bulkidentitiesaccountsresponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatusCode

`func (o *Bulkidentitiesaccountsresponse) GetStatusCode() int32`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *Bulkidentitiesaccountsresponse) GetStatusCodeOk() (*int32, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *Bulkidentitiesaccountsresponse) SetStatusCode(v int32)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *Bulkidentitiesaccountsresponse) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.

### GetMessage

`func (o *Bulkidentitiesaccountsresponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Bulkidentitiesaccountsresponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Bulkidentitiesaccountsresponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Bulkidentitiesaccountsresponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


